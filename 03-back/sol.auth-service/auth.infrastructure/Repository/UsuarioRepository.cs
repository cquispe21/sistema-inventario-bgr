using auth.application.Application.Interface;
using auth.application.Interface;
using auth.domain.DTO.Exceptions;
using auth.domain.DTO.Helpers;
using auth.domain.DTO.Usuario;
using auth.domain.Models;
using auth.infrastructure.Data;
using AutoMapper;
using Microsoft.Extensions.Logging;


namespace auth.infrastructure.Repository
{
    public class UsuarioRepository : IUsuarioService
    {
        private readonly IJwTokenGenerator _jwTokenGenerator;
        private readonly IEncriptService _enscriptService;
        private readonly IMapper _mapper;
        private readonly usuarioContext _usuarioContext;
        public UsuarioRepository( IJwTokenGenerator jwTokenGenerator, IEncriptService enscriptService,IMapper mapper
            ,usuarioContext usuarioContext
            )
        {
            _jwTokenGenerator = jwTokenGenerator;
            _enscriptService = enscriptService;
            _mapper = mapper;
            _usuarioContext = usuarioContext;
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
                var generateSalt = _enscriptService.GenerateSaltPassword();
                var generatePasswoord = _enscriptService.CreateHashPassword(request.HashContrasena,generateSalt);
                
                request.SaltContrasena = generateSalt;
                request.HashContrasena = generatePasswoord;
                
                var mapper = _mapper.Map<Usuario>(request);

                _usuarioContext.Add(mapper);
                await _usuarioContext.SaveChangesAsync();

                return CreateResponse.Success("Usuario registrado correctamente");
            }
            catch (Exception ex)
            {
                
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
