using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Nancy;

namespace LinqRunner.Server.Api
{
    public class IssueApi : NancyModule
    {
        private static readonly HttpClient HttpClient = new HttpClient();

        private readonly AppConfiguration _config;

        public IssueApi(AppConfiguration config) : base("api/issue")
        {
            _config = config;

            Post("create", async args =>
            {
                using (var sr = new StreamReader(Request.Body))
                {
                    return await CreateIssue(sr.ReadToEnd());
                }
            });
        }

        private async Task<HttpResponseMessage> CreateIssue(string issue)
        {
            var req = new HttpRequestMessage(HttpMethod.Post, _config.GithubIssueApi);
            req.Headers.Authorization = new AuthenticationHeaderValue("token", _config.GithubApiToken);
            req.Content = new StringContent(issue, Encoding.UTF8, "application/json");
            req.Headers.Add("User-Agent", _config.GithubTokenName);

            var res = await HttpClient.SendAsync(req);

            Negotiate.WithStatusCode((int) res.StatusCode);
            return res;
        }
    }
}