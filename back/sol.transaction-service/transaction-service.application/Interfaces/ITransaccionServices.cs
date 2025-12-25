
using product_service.domain.DTO.Productos;
using transaction_service.domain.DTO.Exceptions;

namespace transaction_service.application.Interfaces
{
    public interface ITransaccionServices
    {
        Task<DtoResponse> InsertAsync(CreateTransactionDto request);
        Task<DtoResponse<List<TransaccionDto>>> GetAsync();
        Task<DtoResponse> UpdateAsync(UpdateProductoDto request);
        Task<DtoResponse> DeleteAsync(Guid IdProduct)
    }
}
