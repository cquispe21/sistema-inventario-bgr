

namespace auth.application.Application.Interface
{
    public interface IJwTokenGenerator
    {
        string GenerateTokenSignIn(Guid idUsuarioGuid, string Nombre, string Correo);

    }
}
