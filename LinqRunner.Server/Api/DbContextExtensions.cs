using System;
using System.Collections.Generic;
using System.Linq;
using Dapper;
using EFSqlTranslator.EFModels;
using EFSqlTranslator.Translation;
using EFSqlTranslator.Translation.DbObjects.SqlObjects;
using Microsoft.EntityFrameworkCore;

namespace LinqRunner.Server.Api
{
    public static class DbContextExtensions
    {
        public static IEnumerable<dynamic> Query(this DbContext db, IQueryable query, out string sql)
        {
            using (var connection = db.Database.GetDbConnection())
            {
                sql = string.Empty;

                try
                {
                    var script = LinqTranslator.Translate(query.Expression, new EFModelInfoProvider(db), new SqlObjectFactory());
                    sql = script.ToString();
                    Console.WriteLine(sql);

                    var results = connection.Query(sql);
                    return results;
                }
                catch (Exception e)
                {
                    Console.WriteLine("NOT WORKING!!");
                    Console.WriteLine(e);

                    throw;
                }
            }
        }
    }
}