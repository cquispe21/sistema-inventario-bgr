using auth.application.Application.Interface;
using auth.application.Interface;
using auth.domain.DTO.Auth;
using auth.domain.DTO.Exceptions;
using auth.domain.DTO.Helpers;
using Microsoft.Extensions.Logging;


namespace auth.infrastructure.Repository
{
    public class AuthRepository : IAuthService
    {

        private readonly ILogger<AuthRepository> _logger;
        public readonly IJwTokenGenerator _jwTokenGenerator;

        public AuthRepository(ILogger<AuthRepository> logger, IJwTokenGenerator jwTokenGenerator)
        {
            _logger = logger;
            _jwTokenGenerator = jwTokenGenerator;
        }
        public async Task<DtoResponse<LoginResponse>> IniciaSesionAsync(LoginRequest request)
        {
            try
            {
                _logger.LogInformation("Iniciando sesión para el usuario: {Email}", request.Email);
                string session =  _jwTokenGenerator.GenerateTokenSignIn(Guid.NewGuid(),"CristhianDavid","jair8381@gmail.com");
                if (session == null || string.IsNullOrEmpty(session)) throw new Exception();

                var objetSession = new LoginResponse
                {
                    Token = session,
                    
                };
                _logger.LogInformation("Sesión iniciada correctamente para el usuario: {Email}", request.Email);

                return CreateResponse.Success(objetSession, "Credenciales correctas");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error al iniciar sesión para el usuario: {Email}", request.Email);
                throw CreateResponse.Error("Credenciales incorrectas", 404);

            }

        }
    }
}
