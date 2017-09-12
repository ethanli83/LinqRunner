using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Dapper;
using EFSqlTranslator.EFModels;
using EFSqlTranslator.Translation;
using EFSqlTranslator.Translation.DbObjects;
using EFSqlTranslator.Translation.DbObjects.MySqlObjects;
using EFSqlTranslator.Translation.Extensions;
using EFSqlTranslator.Translation.MethodTranslators;
using Microsoft.EntityFrameworkCore;

namespace LinqRunner.Server.Api
{
    public static class DbContextExtensions
    {
        public static Dictionary<string, IEnumerable<object>> Query(this DbContext db, IQueryable query, out string sql)
        {
            var results = new Dictionary<string, IEnumerable<object>>();
            using (var connection = db.Database.GetDbConnection())
            {
                connection.Open();
                
                sql = string.Empty;

                try
                {
                    IncludeGraph graph;
                    var script = QueryTranslator.Translate(
                        query.Expression, new EFModelInfoProvider(db), new MySqlObjectFactory(), out graph);

                    foreach (var statement in script.Scripts)
                    {
                        var cSql = statement.ToString();
                        sql += cSql + Environment.NewLine;

                        if (statement is IDbSelect)
                        {
                            var node = graph.ScriptToNodes[statement];
                            var entityType = node.Expression.GetReturnBaseType();

                            if (entityType.Name.StartsWith("<>") || entityType.Name.StartsWith("VB$"))
                            {
                                var result = connection.Query(cSql);
                                results[entityType.Name] = new DynamicDataConvertor(entityType).Convert(result);
                            }
                            else
                            {
                                results[entityType.Name] = connection.Query(entityType, cSql);
                            }
                        }
                        else
                        {
                            connection.Execute(cSql);
                        }
                    }

                    return results;
                }
                catch (Exception e)
                {
                    Console.WriteLine("NOT WORKING!!");
                    Console.WriteLine(sql);
                    Console.WriteLine(e);

                    throw;
                }
            }
        }

        public static Dictionary<string, IEnumerable<object>> Load<T>(this DbContext db, IQueryable<T> query, out string sql)
        {
            var results = new Dictionary<string, IEnumerable<object>>();
            sql = string.Empty;

            try
            {
                var data = db.Query(query, new EFModelInfoProvider(db), new MySqlObjectFactory(), out sql);
                return results;
            }
            catch (Exception e)
            {
                Console.WriteLine("NOT WORKING!!");
                Console.WriteLine(sql);
                Console.WriteLine(e);

                throw;
            }
        }
    }
}