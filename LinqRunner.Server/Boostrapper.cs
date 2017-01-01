using Autofac;
using Nancy.Bootstrappers.Autofac;
using Nancy.Configuration;

namespace LinqRunner.Server
{
    public class Bootstrapper : AutofacNancyBootstrapper
    {
        protected override void ConfigureApplicationContainer(ILifetimeScope container)
        {
            container.Update(builder => builder.RegisterType<Api.LinqRunner>().SingleInstance());        
        }

        public override void Configure(INancyEnvironment environment)
        {
            var config = new Nancy.TraceConfiguration(enabled: false, displayErrorTraces: true);
            environment.AddValue(config);
        }
    }
}