using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using product_service.application.Interfaces;
using product_service.domain.DTO.Helpers;
using product_service.domain.DTO.Productos;
using Swashbuckle.AspNetCore.Annotations;

namespace product_service.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProductoController : ControllerBase
    {
        public readonly IProductoService _productoService;

        public ProductoController(IProductoService productoService)
        {
            _productoService = productoService;
        }


        [SwaggerOperation(
       Summary = "Servicio que registra un nuevo Producto",
       OperationId = "InsertAsync")]
        [SwaggerResponse(202, "Nuevo usuario registrado")]
        [SwaggerResponse(500, "Error interno en el servidor")]
        [AllowAnonymous]
        [HttpPost("insertAsync")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> InsertAsync([FromForm] CreateProductoDto request)
        {
            return Ok(await _productoService.InsertAsync(request));
        }

        [SwaggerOperation(
      Summary = "Servicio que enlista los Productos disponibles (paginado)",
      OperationId = "getAsync")]
        [SwaggerResponse(200, "Lista paginada de Productos disponibles")]
        [SwaggerResponse(400, "Parámetros de paginación inválidos")]
        [SwaggerResponse(500, "Error interno en el servidor")]
        [AllowAnonymous]
        [HttpGet("getAsync")]
        public async Task<IActionResult> GetAsync(
      [FromQuery] int pageNumber = 1,
      [FromQuery] int pageSize = 10)
        {
            

            var result = await _productoService.GetAsync(pageNumber, pageSize);
            return Ok(result);
        }

        [SwaggerOperation(
  Summary = "Servicio que enlista los Producto disponibles",
  OperationId = "getAsync")]
        [SwaggerResponse(200, "Lista de Producto disponibles")]
        [SwaggerResponse(500, "Error interno en el servidor")]
        [AllowAnonymous]
        [HttpGet("getAsyncId")]
        public async Task<IActionResult> GetAsyncId([FromQuery]Guid IdProducto)
        {
            return Ok(await _productoService.GetAsyncId(IdProducto));
        }


        [SwaggerOperation(
    Summary = "Servicio que enlista los Producto disponibles",
    OperationId = "UpdateAsync")]
        [SwaggerResponse(200, "Lista de Producto disponibles")]
        [SwaggerResponse(500, "Error interno en el servidor")]
        [AllowAnonymous]
        [HttpPut("UpdateAsync")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> UpdateAsync([FromForm] UpdateProductoDto request)
        {
            return Ok(await _productoService.UpdateAsync(request));
        }

        [SwaggerOperation(
   Summary = "Servicio que enlista los Producto disponibles",
   OperationId = "DeleteAsync")]
        [SwaggerResponse(200, "Lista de Producto disponibles")]
        [SwaggerResponse(500, "Error interno en el servidor")]
        [AllowAnonymous]
        [HttpPut("DeleteAsync")]
        public async Task<IActionResult> DeleteAsync(Guid IdProduct)
        {
            return Ok(await _productoService.DeleteAsync(IdProduct));
        }


    }
}
