using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Scripting;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Scripting;
using Microsoft.CodeAnalysis.Scripting.Hosting;
using Microsoft.EntityFrameworkCore;
using TypeInfo = Microsoft.CodeAnalysis.TypeInfo;

namespace LinqRunner.Server.Api
{
    public class LinqCompleter
    {
        private readonly ScriptOptions _scriptOptions;

        private readonly Assembly[] _defaultReferences;

        public LinqCompleter()
        {
            _scriptOptions = ScriptOptions.Default;

            //Add reference to mscorlib
            var linqlib = typeof(Queryable).GetTypeInfo().Assembly;

            _defaultReferences = new [] { linqlib };

            //Add namespaces
            _scriptOptions = _scriptOptions.AddImports("System.Linq");
        }

        public async Task<List<Completion>> GetSuggestions<T>(string linq, int start, int end) where T : DbContext
        {
            if (string.IsNullOrEmpty(linq) || linq.Length < 2)
                return new List<Completion> { new Completion { Text = "Db", DisplayText = "Db" } };

            var partialTok = linq.Substring(start, end - start);
            partialTok = partialTok == "." ? "" : partialTok;

            linq = linq.Insert(start, " ");

            var dbType = typeof(T);
            var dbModel = typeof(T).GetTypeInfo().Assembly;
            using (var interactiveLoader = new InteractiveAssemblyLoader())
            {
                var scriptOptions = GetScriptOptions(dbModel, interactiveLoader, dbType);

                linq = Regex.Replace(linq, "^db.", "Db.");

                var script = CSharpScript.Create(
                    $"{linq}", scriptOptions, typeof(LinqRunnerGlobal<T>), interactiveLoader);

                var compilation = script.GetCompilation();
                var syntaxTree = compilation.SyntaxTrees.Single();
                var semanticModel = compilation.GetSemanticModel(syntaxTree);

                var semanticInfo = GetSemanticInfo(start, syntaxTree, semanticModel);
                var res = GetSymbols(start, semanticInfo, semanticModel, partialTok, dbType);

                return await Task.FromResult(res);
            }
        }

        private static List<Completion> GetSymbols(
            int position, TypeInfo semanticInfo, SemanticModel semanticModel, string token, Type dbType)
        {
            var type = semanticInfo.Type;

            var symbols = semanticModel.LookupSymbols(position, type, null, true);
            var res = new List<Completion>();
            foreach (var symbol in symbols)
            {
                if (!symbol.ContainingAssembly.Name.StartsWith("System.Linq") &&
                    symbol.ContainingAssembly.Name + "." + symbol.ContainingNamespace.Name != dbType.Namespace)
                    continue;

                var result = symbol.ToDisplayString(SymbolDisplayFormat.MinimallyQualifiedFormat);
                if (symbol.Kind == SymbolKind.Method)
                {
                    var sIndex = result.IndexOf(" ", StringComparison.Ordinal);
                    result = result.Substring(sIndex); //cut return type
                }

                var dIndex = result.IndexOf(".", StringComparison.Ordinal);
                result = result.Substring(dIndex + 1); //cut containing type

                if (symbol.Kind == SymbolKind.Method)
                {
                    var prefix = result.Substring(0, result.IndexOf('(')); //cut redundant generics info
                    prefix = prefix.Substring(0, prefix.IndexOf('<') == -1 ? prefix.Length : prefix.IndexOf('<'));
                    result = prefix + result.Substring(result.IndexOf('('));
                }

                if (result.Length > 100)
                {
                    result = result.Substring(0, 100) + " ...";
                    if (symbol.Kind == SymbolKind.Method)
                        result += ")";
                }

                if (!string.IsNullOrEmpty(token) && !result.StartsWith(token))
                    continue;

                var completion = new Completion
                {
                    Text = result,
                    DisplayText = result
                };

                if (symbol.Kind == SymbolKind.Method)
                {
                    var sIndex = result.IndexOf("(", StringComparison.Ordinal);
                    completion.Text = result.Substring(0, sIndex + 1);
                }

                if (!res.Contains(completion))
                    res.Add(completion);
            }

            res.Sort(Completion.Comparer);
            return res;
        }

        private static TypeInfo GetSemanticInfo(int position, SyntaxTree syntaxTree, SemanticModel semanticModel)
        {
            var p = syntaxTree.GetRoot().FindToken(position).Parent;
            var identifier = p as ExpressionSyntax;

            if (p is MemberAccessExpressionSyntax)
            {
                identifier = p.ChildNodes().FirstOrDefault() as ExpressionSyntax;
            }

            if (identifier == null)
                identifier = p.Parent as InvocationExpressionSyntax;

            if (identifier == null)
                identifier = p.Parent as ObjectCreationExpressionSyntax;

            var semanticInfo = semanticModel.GetTypeInfo(identifier);
            return semanticInfo;
        }

        private ScriptOptions GetScriptOptions(Assembly dbModel, InteractiveAssemblyLoader interactiveLoader, Type dbType)
        {
            var referredAssmeblies = dbModel.GetReferencedAssemblies().Select(Assembly.Load);
            var references = new[] {dbModel}.Concat(referredAssmeblies).Concat(_defaultReferences).ToArray();

            foreach (var reference in references)
                interactiveLoader.RegisterDependency(reference);

            var scriptOptions = _scriptOptions.AddReferences(references)
                .AddImports(dbType.Namespace)
                .AddImports(typeof(DbContextExtensions).Namespace);

            return scriptOptions;
        }
    }
}