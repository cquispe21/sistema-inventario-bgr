
using product_service.domain.DTO.Productos;
using transaction_service.domain.DTO.Exceptions;
using transaction_service.domain.Entidades;

namespace transaction_service.application.Interfaces
{
    public interface ITransaccionServices
    {
        Task<DtoResponse> InsertAsync(CreateTransactionDto request);
        Task<DtoResponse<List<TransaccionDto>>> GetAsync(Guid? idProducto,
     string? tipoTransaccion,
    DateTime? fechaDesde,
    DateTime? fechaHasta);
        Task<DtoResponse> UpdateAsync(UpdateTransaccionDto request);
        //Task<DtoResponse> DeleteAsync(Guid IdTransaccion);
    }
}
