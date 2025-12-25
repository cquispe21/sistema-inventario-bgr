


using auth.domain.DTO.Exceptions;
using auth.domain.DTO.Usuario;

namespace auth.application.Interface
{
    public interface IUsuarioService
    {
        Task<DtoResponse> InsertAsync(RegistrarUsuarioRequest request);
        Task<DtoResponse<List<UsuarioList>>> GetAsync();
    }
}
