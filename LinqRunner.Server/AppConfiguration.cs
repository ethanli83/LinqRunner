namespace LinqRunner.Server
{
    public class AppConfiguration
    {
        public ConnectionStrings ConnectionStrings { get; set; }

        public string GithubTokenName { get; set; }

        public string GithubApiToken { get; set; }

        public string GithubIssueApi { get; set; }
    }

    public class ConnectionStrings
    {
        public string MySqlConnectionString { get; set; }
    }
}