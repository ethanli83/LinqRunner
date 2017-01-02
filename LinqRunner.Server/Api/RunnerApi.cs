using System;
using System.Threading.Tasks;
using LinqRunner.Server.DataModel;
using Nancy;

namespace LinqRunner.Server.Api
{
    public sealed class RunnerApi : NancyModule
    {
        private readonly AppConfiguration _appConfig;

        public RunnerApi(LinqRunner linqRunner, LinqCompleter linqCompleter, AppConfiguration config) :
            base("api/query")
        {
            _appConfig = config;

            Get("/", args => "ok");

            Get("/db", async args =>
                await RunLinq(linqRunner, Request.Query.linq));

            Get("/autocomplete", async args =>
                await GetLinqCompletions(
                    linqCompleter, Request.Query.linq, Request.Query.start, Request.Query.end, Request.Query.line));
        }

        private async Task<object> RunLinq(LinqRunner linqRunner, string linq)
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
                throw;
            }
        }

        private static async Task<object> GetLinqCompletions(
            LinqCompleter linqCompleter, string linq, int start, int end, int line)
        {
            try
            {
                return await linqCompleter.GetSuggestions<NorthwindContext>(linq, start, end, line);
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
}