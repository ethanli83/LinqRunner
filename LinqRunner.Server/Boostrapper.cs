using Autofac;
using Nancy.Bootstrappers.Autofac;
using Nancy.Configuration;

namespace LinqRunner.Server
{
    public class Bootstrapper : AutofacNancyBootstrapper
    {
        private readonly AppConfiguration _appConfig;

        public Bootstrapper(AppConfiguration appConfig)
        {
            _appConfig = appConfig;
        }

        protected override void ConfigureApplicationContainer(ILifetimeScope container)
        {
            container.Update(builder => builder.RegisterType<Api.LinqRunner>().SingleInstance());
            container.Update(builder => builder.RegisterInstance(_appConfig));
        }

        public override void Configure(INancyEnvironment environment)
        {
            var config = new Nancy.TraceConfiguration(enabled: false, displayErrorTraces: true);
            environment.AddValue(config);
        }
    }
}