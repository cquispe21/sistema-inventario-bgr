using auth.application.Interface;
using auth.domain.DTO.Usuario;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using Swashbuckle.AspNetCore.Annotations;

namespace auth.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UsuarioController : ControllerBase
    {
      public readonly IUsuarioService _usuarioService;

        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }


        [SwaggerOperation(
       Summary = "Servicio que registra un nuevo usuario",
       OperationId = "InsertAsync")]
        [SwaggerResponse(202, "Nuevo usuario registrado")]
        [SwaggerResponse(500, "Error interno en el servidor")]
        [AllowAnonymous]
        [HttpPost("insertAsync")]
        public async Task<IActionResult> InsertAsync([FromBody] RegistrarUsuarioRequest request)
        {
            return Ok(await _usuarioService.InsertAsync(request));
        }

        [SwaggerOperation(
    Summary = "Servicio que enlista los usuarios disponibles",
    OperationId = "getAsync")]
        [SwaggerResponse(200, "Lista de usuarios disponibles")]
        [SwaggerResponse(500, "Error interno en el servidor")]
        [AllowAnonymous]
        [HttpGet("getAsync")]
        public async Task<IActionResult> GetAsync()
        {
            return Ok(await _usuarioService.GetAsync());
        }


    }
}
