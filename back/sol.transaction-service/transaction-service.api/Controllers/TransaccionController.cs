//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;

//namespace transaction_service.api.Controllers
//{
//    public class TransaccionController : ControllerBase
//    {
//        public readonly IProductoService _productoService;

//        public ProductoController(IProductoService productoService)
//        {
//            _productoService = productoService;
//        }


//        [SwaggerOperation(
//       Summary = "Servicio que registra un nuevo usuario",
//       OperationId = "InsertAsync")]
//        [SwaggerResponse(202, "Nuevo usuario registrado")]
//        [SwaggerResponse(500, "Error interno en el servidor")]
//        [AllowAnonymous]
//        [HttpPost("insertAsync")]
//        public async Task<IActionResult> InsertAsync([FromBody] CreateProductoDto request)
//        {
//            return Ok(await _productoService.InsertAsync(request));
//        }

//        [SwaggerOperation(
//    Summary = "Servicio que enlista los usuarios disponibles",
//    OperationId = "getAsync")]
//        [SwaggerResponse(200, "Lista de usuarios disponibles")]
//        [SwaggerResponse(500, "Error interno en el servidor")]
//        [AllowAnonymous]
//        [HttpGet("getAsync")]
//        public async Task<IActionResult> GetAsync()
//        {
//            return Ok(await _productoService.GetAsync());
//        }


//        [SwaggerOperation(
//    Summary = "Servicio que enlista los usuarios disponibles",
//    OperationId = "UpdateAsync")]
//        [SwaggerResponse(200, "Lista de usuarios disponibles")]
//        [SwaggerResponse(500, "Error interno en el servidor")]
//        [AllowAnonymous]
//        [HttpGet("UpdateAsync")]
//        public async Task<IActionResult> UpdateAsync(UpdateProductoDto request)
//        {
//            return Ok(await _productoService.UpdateAsync(request));
//        }

//        [SwaggerOperation(
//   Summary = "Servicio que enlista los usuarios disponibles",
//   OperationId = "DeleteAsync")]
//        [SwaggerResponse(200, "Lista de usuarios disponibles")]
//        [SwaggerResponse(500, "Error interno en el servidor")]
//        [AllowAnonymous]
//        [HttpGet("DeleteAsync")]
//        public async Task<IActionResult> DeleteAsync(Guid IdProduct)
//        {
//            return Ok(await _productoService.DeleteAsync(IdProduct));
//        }


//    }
//}
//}
