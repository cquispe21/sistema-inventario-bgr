using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using product_service.domain.DTO.Productos;
using Swashbuckle.AspNetCore.Annotations;
using transaction_service.application.Interfaces;

namespace transaction_service.api.Controllers
{
    public class TransaccionController : ControllerBase
    {
        public readonly ITransaccionServices _transaccionService;

        public TransaccionController(ITransaccionServices transaccionService)
        {
            _transaccionService = transaccionService;
        }


        [SwaggerOperation(
       Summary = "Servicio que registra un nuevo usuario",
       OperationId = "InsertAsync")]
        [SwaggerResponse(202, "Nuevo usuario registrado")]
        [SwaggerResponse(500, "Error interno en el servidor")]
        [AllowAnonymous]
        [HttpPost("insertAsync")]
        public async Task<IActionResult> InsertAsync([FromBody] CreateTransactionDto request)
        {
            return Ok(await _transaccionService.InsertAsync(request));
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
            return Ok(await _transaccionService.GetAsync());
        }


        [SwaggerOperation(
    Summary = "Servicio que enlista los usuarios disponibles",
    OperationId = "UpdateAsync")]
        [SwaggerResponse(200, "Lista de usuarios disponibles")]
        [SwaggerResponse(500, "Error interno en el servidor")]
        [AllowAnonymous]
        [HttpGet("UpdateAsync")]
        public async Task<IActionResult> UpdateAsync(UpdateTransaccionDto request)
        {
            return Ok(await _transaccionService.UpdateAsync(request));
        }

        [SwaggerOperation(
   Summary = "Servicio que enlista los usuarios disponibles",
   OperationId = "DeleteAsync")]
        [SwaggerResponse(200, "Lista de usuarios disponibles")]
        [SwaggerResponse(500, "Error interno en el servidor")]
        [AllowAnonymous]
        [HttpGet("DeleteAsync")]
        public async Task<IActionResult> DeleteAsync(Guid IdProduct)
        {
            return Ok(await _transaccionService.DeleteAsync(IdProduct));
        }


    }
}

