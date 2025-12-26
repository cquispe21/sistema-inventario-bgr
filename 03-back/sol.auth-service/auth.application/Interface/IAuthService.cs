

using auth.domain.DTO.Auth;
using auth.domain.DTO.Exceptions;

namespace auth.application.Interface
{
    public interface IAuthService
    {   
        Task<DtoResponse<LoginResponse>> IniciaSesionAsync(LoginRequest request);
    }
}
