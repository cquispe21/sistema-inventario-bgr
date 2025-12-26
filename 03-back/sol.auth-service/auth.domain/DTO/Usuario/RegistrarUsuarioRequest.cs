

namespace auth.domain.DTO.Usuario
{
    public class RegistrarUsuarioRequest
    {

        public string NombreUsuario { get; set; } = null!;

        public string CorreoElectronico { get; set; } = null!;

        public string HashContrasena { get; set; } = null!;

        public string SaltContrasena { get; set; } = null!;


    }
}
