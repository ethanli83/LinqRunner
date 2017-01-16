using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Nancy;

namespace LinqRunner.Server.Api
{
    public class IssueApi : NancyModule
    {
        // c1e5b9fd11081e5deba883f71465ff330b4a4ec0

        private static readonly HttpClient HttpClient = new HttpClient();

        // private readonly string _id = "ad14b9fc01935d8fa1be";

        // private readonly string _secret = "cc74c1fa4ea9321e3f9313b3a86b3b13752be9db";

        public IssueApi() : base("api/issue")
        {
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
            var req = new HttpRequestMessage(HttpMethod.Post, "https://api.github.com/repos/ethanli83/EFSqlTranslator/issues");
            req.Headers.Authorization = new AuthenticationHeaderValue("token", "445f3184b9259cdfcf52e20029882ccc79be9fe0");
            req.Content = new StringContent(issue, Encoding.UTF8, "application/json");
            req.Headers.Add("User-Agent", "TestingToken");

            var res = await HttpClient.SendAsync(req);

            var data = await res.Content.ReadAsStringAsync();

            Negotiate.WithStatusCode((int) res.StatusCode);
            return res;
        }
    }
}