using auth.application.Application.Interface;
using auth.application.Interface;
using auth.domain.DTO.Exceptions;
using auth.domain.DTO.Helpers;
using auth.domain.DTO.Usuario;
using Microsoft.Extensions.Logging;


namespace auth.infrastructure.Repository
{
    public class UsuarioRepository : IUsuarioService
    {
        private readonly ILogger<AuthRepository> _logger;
        private readonly IJwTokenGenerator _jwTokenGenerator;
        public UsuarioRepository(ILogger<AuthRepository> logger, IJwTokenGenerator jwTokenGenerator)
        {
            _logger = logger;
            _jwTokenGenerator = jwTokenGenerator;
        }

        public async Task<DtoResponse<List<UsuarioList>>> GetAsync()
        {
            var list = ListaUsuarios();
            return CreateResponse.Success(list, "Lista de usuarios correctamente");
        }

        public async Task<DtoResponse> InsertAsync(RegistrarUsuarioRequest request)
        {
            try
            {
                _logger.LogInformation("Insertando usuario: {Email}", request.Correo);
                
                _logger.LogInformation("Usuario insertado correctamente: {Email}", request.Correo);
               
                return CreateResponse.Success("Usuario registrado correctamente");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error al insertar usuario: {Email}", request.Correo);
                throw new Exception("Error al registrar el usuario");
            }
        }


        private List<UsuarioList> ListaUsuarios()
        {
            var listaUsuarios = new List<UsuarioList>
            {
                new UsuarioList { IdUsuarioGuid = Guid.NewGuid(), Nombre = "Juan Pérez", Correo = "juan@correo.com" },
                new UsuarioList { IdUsuarioGuid = Guid.NewGuid(), Nombre = "María López", Correo = "maria@correo.com" },
                new UsuarioList { IdUsuarioGuid = Guid.NewGuid(), Nombre = "Carlos Sánchez", Correo = "carlos@correo.com" }
            };

            return listaUsuarios;
        }
    }
}
