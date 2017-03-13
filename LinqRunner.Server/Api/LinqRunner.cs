using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.CSharp.Scripting;
using Microsoft.CodeAnalysis.Scripting;
using Microsoft.CodeAnalysis.Scripting.Hosting;
using Microsoft.EntityFrameworkCore;

namespace LinqRunner.Server.Api
{
    public class LinqRunner
    {
        private readonly ScriptOptions _scriptOptions;

        private readonly Assembly[] _defaultReferences;

        public LinqRunner()
        {
            _scriptOptions = ScriptOptions.Default;

            //Add reference to mscorlib
            var mscorlib = typeof(object).GetTypeInfo().Assembly;
            var linqlib = typeof(Queryable).GetTypeInfo().Assembly;
            var dapperlib = typeof(Dapper.CommandDefinition).GetTypeInfo().Assembly;
            var extlib = typeof(DbContextExtensions).GetTypeInfo().Assembly;
            var eftlib = typeof(EntityFrameworkQueryableExtensions).GetTypeInfo().Assembly;

            _defaultReferences = new [] { mscorlib, linqlib, dapperlib, extlib, eftlib };

            //Add namespaces
            _scriptOptions = _scriptOptions.AddImports("System");
            _scriptOptions = _scriptOptions.AddImports("System.Linq");
            _scriptOptions = _scriptOptions.AddImports("System.Collections.Generic");
            _scriptOptions = _scriptOptions.AddImports("Dapper");
            _scriptOptions = _scriptOptions.AddImports("Microsoft.EntityFrameworkCore");
        }

        public async Task<dynamic> RunAsync<T>(string linq, T db) where T : DbContext
        {
            var query = CompileQuery<T>(linq);

            var script = query.ContinueWith("string sql;");
            script = script.ContinueWith($"var result = DbContextExtensions.Query(Db, (IQueryable)query, out sql);");
            script = script.ContinueWith("return new { sql = sql, result = result };");

            var result = await script.RunAsync(new LinqRunnerGlobal<T>(db));
            return result.ReturnValue;
        }

        public Script<IQueryable> CompileQuery<T>(string linq) where T : DbContext
        {
            var dbType = typeof(T);
            var dbModel = typeof(T).GetTypeInfo().Assembly;
            
            using(var interactiveLoader = new InteractiveAssemblyLoader())
            {
                var referredAssmeblies = dbModel.GetReferencedAssemblies().Select(Assembly.Load);
                var references = new [] { dbModel }.Concat(referredAssmeblies).Concat(_defaultReferences).ToArray();

                foreach (var reference in references)
                    interactiveLoader.RegisterDependency(reference);

                var scriptOptions = _scriptOptions.
                    AddReferences(references).
                    AddImports(dbType.Namespace).
                    AddImports(typeof(DbContextExtensions).Namespace);

                linq = Regex.Replace(linq, "^db.", "Db.");
                return CSharpScript.Create<IQueryable>(
                    $"var query = {linq};", scriptOptions, typeof(LinqRunnerGlobal<T>), interactiveLoader);
            }
        }
    }
}