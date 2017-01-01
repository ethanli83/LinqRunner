using System.Threading.Tasks;
using LinqRunner.Server.DataModel;
using Nancy;

namespace LinqRunner.Server.Api
{
    public sealed class RunnerApi : NancyModule
    {
        public RunnerApi(LinqRunner linqRunner) : base("api/query")
        {
            Get("/", args => "ok");
            Get("/db", async args => await Execute(linqRunner, this.Request.Query.linq));
        }

        // GET api/values
        public async Task<object> Execute(LinqRunner linqRunner, string linq)
        {
            return await linqRunner.RunAsync(linq, new NorthwindContext(), NorthwindContext.ConnectionString);
        }
    }
}