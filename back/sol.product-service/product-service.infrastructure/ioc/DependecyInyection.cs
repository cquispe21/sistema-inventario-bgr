
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using product_service.application.Interfaces;
using product_service.infrastructure.Context;
using product_service.infrastructure.Repository;
using System.Reflection;

namespace product_service.infrastructure.ioc
{
    public static class DependecyInyection
    {
        public static IServiceCollection AddInfractructure(this IServiceCollection services, IConfiguration configuration)
        {
          
            services.AddScoped<IProductoService, ProductoRepository>();
          
            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            var builderConnection = new SqlConnectionStringBuilder(configuration.GetConnectionString("InventarioBGR"));
            services.AddDbContext<productoContext>(options =>
            {
                options.UseSqlServer(builderConnection.ConnectionString);
            }, ServiceLifetime.Transient
           );

            return services;
        }
    }
}
