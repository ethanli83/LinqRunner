namespace LinqRunner.Server.Api
{
    public class LinqRunnerGlobal<T>
    {
        public T Db;

        public LinqRunnerGlobal(T db)
        {   
            Db = db;
        }
    }
}