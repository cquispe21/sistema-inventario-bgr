

namespace auth.domain.DTO.Auth
{
    /// <summary>
    /// Request de inicio de sesión del usuario
    /// </summary>
    public class LoginRequest
    {
        /// <summary>
        /// Correo electrónico del usuario
        /// </summary>
        public string Email { get; set; } = "";
        public string Password { get; set; } = "";
    }
}
