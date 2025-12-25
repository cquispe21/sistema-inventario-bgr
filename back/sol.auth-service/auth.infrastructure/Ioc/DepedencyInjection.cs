using auth.application.Application.Interface;
using auth.application.Interface;
using auth.infrastructure.Repository;
using auth.infrastructure.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace auth.infrastructure.Ioc
{
    public static class DepedencyInjection
    {
        public static void SetInjection(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddScoped<IAuthService, AuthRepository>();
            services.AddScoped<IUsuarioService, UsuarioRepository>();
            services.AddScoped<IJwTokenGenerator, JwTokenGenerator>();


        }
    }
}