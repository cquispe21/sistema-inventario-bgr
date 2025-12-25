using auth.application.Application.Interface;
using auth.application.Interface;
using auth.domain.DTO.Auth;
using auth.domain.DTO.Exceptions;
using auth.domain.DTO.Helpers;
using auth.infrastructure.Data;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;


namespace auth.infrastructure.Repository
{
    public class AuthRepository : IAuthService
    {

        private readonly ILogger<AuthRepository> _logger;
        public readonly IJwTokenGenerator _jwTokenGenerator;
        private readonly usuarioContext _usuarioContext;
        private readonly IEncriptService _enscriptService;


        public AuthRepository(ILogger<AuthRepository> logger, IJwTokenGenerator jwTokenGenerator,usuarioContext usuarioContext, IEncriptService enscriptService)
        {
            _logger = logger;
            _jwTokenGenerator = jwTokenGenerator;
            _usuarioContext = usuarioContext;
            _enscriptService = enscriptService;
        }
        public async Task<DtoResponse<LoginResponse>> IniciaSesionAsync(LoginRequest request)
        {
            try
            {
                var usuario = await _usuarioContext.Usuarios
                .FirstOrDefaultAsync(x => x.CorreoElectronico == request.CorreoElectronico);

                if (usuario == null)
                {
                    throw new Exception("El correo no existe");
                }

                var generatePasswoord = _enscriptService.CreateHashPassword(request.HashContrasena, usuario.SaltContrasena);

                if(generatePasswoord == usuario.HashContrasena)
                {
                    string session = _jwTokenGenerator.GenerateTokenSignIn(
                                   usuario.IdUsuario,
                                   usuario.NombreUsuario,
                                   usuario.CorreoElectronico
                   );

                    var objetSession = new LoginResponse
                    {
                        Token = session,

                    };

                    return CreateResponse.Success(objetSession, "Credenciales correctas");
                }
                else
                {
                    throw CreateResponse.Error("Credenciales incorrectas", 404);

                }

            }
            catch (Exception ex)
            {
                throw CreateResponse.Error("Credenciales incorrectas", 404);

            }

        }
    }
}
