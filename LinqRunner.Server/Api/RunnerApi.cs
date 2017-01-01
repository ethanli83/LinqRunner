using System;
using System.IO;
using System.Threading.Tasks;
using LinqRunner.Server.DataModel;
using Microsoft.Extensions.Configuration;
using Nancy;

namespace LinqRunner.Server.Api
{
    public sealed class RunnerApi : NancyModule
    {
        private readonly AppConfiguration _appConfig;

        public RunnerApi(LinqRunner linqRunner, AppConfiguration config) : base("api/query")
        {
            _appConfig = config;

            Get("/", args => "ok");
            Get("/db", async args => await Execute(linqRunner, this.Request.Query.linq));
        }

        // GET api/values
        public async Task<object> Execute(LinqRunner linqRunner, string linq)
        {
            try
            {
                var connStr = _appConfig.ConnectionStrings.MySqlConnectionString;
                using (var db =  new NorthwindContext(connStr))
                {
                    return await linqRunner.RunAsync(linq, db);
                }
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }
        }
    }
}