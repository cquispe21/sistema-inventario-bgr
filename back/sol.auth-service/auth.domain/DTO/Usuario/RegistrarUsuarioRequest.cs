

namespace auth.domain.DTO.Usuario
{
    public class RegistrarUsuarioRequest
    {
        public Guid IdUsuarioGuid { get; set; }
        public string Nombre { get; set; }
        public string Correo { get; set; }
    }
}
