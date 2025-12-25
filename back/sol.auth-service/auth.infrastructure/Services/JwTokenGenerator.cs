
using auth.application.Application.Interface;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace auth.infrastructure.Services
{
    public class JwTokenGenerator : IJwTokenGenerator
    {
        private readonly IConfiguration _configuration;


        public JwTokenGenerator(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateTokenSignIn(Guid idUsuarioGuid, string Nombre, string Correo)
        {
            byte[] secretKey = Encoding.UTF8.GetBytes(_configuration.GetValue<string>("JWSettings:SecretKey") ?? string.Empty);

            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(secretKey),
                SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim("idUsuario", idUsuarioGuid.ToString()),
                new Claim("Nombre", Nombre),
                new Claim("Correo", Correo)
            };
            var securityToken = new JwtSecurityToken(
            issuer: _configuration.GetValue<string>("JWSettings:Issuer"),
                audience: _configuration.GetValue<string>("JWSettings:Audience"),
                expires: DateTime.Now.AddHours(_configuration.GetValue<int>("JWSettings:ExpiryHours")),
                claims: claims,
                signingCredentials: signingCredentials);

            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }
    }
}
