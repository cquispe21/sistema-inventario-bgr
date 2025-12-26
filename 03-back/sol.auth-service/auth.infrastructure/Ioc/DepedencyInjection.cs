using auth.application.Application.Interface;
using auth.application.Interface;
using auth.infrastructure.Data;
using auth.infrastructure.Repository;
using auth.infrastructure.Services;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;


namespace auth.infrastructure.Ioc
{
    public static class DepedencyInjection
    {
        public static void SetInjection(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddScoped<IAuthService, AuthRepository>();
            services.AddScoped<IUsuarioService, UsuarioRepository>();
            services.AddScoped<IJwTokenGenerator, JwTokenGenerator>();
            services.AddScoped<IEncriptService, EncriptService>();

            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            var builderConnection = new SqlConnectionStringBuilder(configuration.GetConnectionString("InventarioBGR"));
            services.AddDbContext<usuarioContext>(options =>
            {
                options.UseSqlServer(builderConnection.ConnectionString);
            }, ServiceLifetime.Transient
           );

        }
    }
}