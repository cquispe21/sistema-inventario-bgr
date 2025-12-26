
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using System.Reflection;
using transaction_service.application.Interfaces;
using transaction_service.infrastructure.Context;
using transaction_service.infrastructure.Repository;

namespace transaction_service.infrastructure.ioc
{
    public static class DependecyInyection
    {
        public static IServiceCollection AddInfractructure(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddScoped<ITransaccionServices, TransaccionRepository>();

            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            var builderConnection = new SqlConnectionStringBuilder(configuration.GetConnectionString("InventarioBGR"));
            services.AddDbContext<transaccionesContext>(options =>
            {
                options.UseSqlServer(builderConnection.ConnectionString);
            }, ServiceLifetime.Transient
           );

            return services;
        }
    }
}
