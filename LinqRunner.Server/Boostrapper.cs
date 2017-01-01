using Autofac;
using Nancy.Bootstrappers.Autofac;

namespace LinqRunner.Server
{
    public class Bootstrapper : AutofacNancyBootstrapper
    {
        protected override void ConfigureApplicationContainer(ILifetimeScope container)
        {
            container.Update(builder => builder.RegisterType<Api.LinqRunner>().SingleInstance());        
        }
    }
}