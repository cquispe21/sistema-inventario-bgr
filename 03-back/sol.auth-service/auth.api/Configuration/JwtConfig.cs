
using auth.domain.DTO.Token;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace auth.api.Configuration
{
    public static class JwtConfig
    {
        public static void SetJwtConfig(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<JWSettings>(configuration.GetSection("JWSettings"));
            var key = configuration.GetValue<string>("JWSettings:SecretKey") ?? "";
            var keyBytes = Encoding.ASCII.GetBytes(key);

            services.AddAuthentication(config =>
            {
                config.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                config.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(config =>
            {
                config.RequireHttpsMetadata = true;
                config.SaveToken = true;
                config.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(keyBytes),
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero,
                };
                config.TokenValidationParameters.ValidateIssuer = true;
                config.TokenValidationParameters.ValidateAudience = true;
                config.TokenValidationParameters.ValidIssuer = "https://xxxxxxxx.com";
                config.TokenValidationParameters.ValidAudience = "https://xxxxxxxx.com";

            });

        }
    }
}
