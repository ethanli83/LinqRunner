namespace LinqRunner.Server
{
    public class AppConfiguration
    {
        public ConnectionStrings ConnectionStrings { get; set; }
    }

    public class ConnectionStrings
    {
        public string MySqlConnectionString { get; set; }
    }
}