using Autofac;
using Nancy;
using Nancy.Bootstrapper;
using Nancy.Bootstrappers.Autofac;
using Nancy.Configuration;
using Nancy.Session;
using Nancy.TinyIoc;

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
            container.Update(builder => builder.RegisterType<Api.LinqCompleter>().SingleInstance());
            container.Update(builder => builder.RegisterInstance(_appConfig));
        }

        public override void Configure(INancyEnvironment environment)
        {
            var config = new Nancy.TraceConfiguration(enabled: false, displayErrorTraces: true);
            environment.AddValue(config);
        }
    }

    public class CustomBootstrapper : DefaultNancyBootstrapper
    {
        protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
        {
            CookieBasedSessions.Enable(pipelines);
        }
    }
}