

namespace auth.domain.Models;

public partial class Usuario
{
    public Guid IdUsuario { get; set; }

    public string NombreUsuario { get; set; } = null!;

    public string CorreoElectronico { get; set; } = null!;

    public string HashContrasena { get; set; } = null!;

    public string SaltContrasena { get; set; } = null!;

    public bool Activo { get; set; }

    public DateTime FechaCreacion { get; set; }

    public DateTime FechaActualizacion { get; set; }
}
