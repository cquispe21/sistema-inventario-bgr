
namespace transaction_service.application.Interfaces
{
    public interface ITransaccionServices
    {
        Task<DtoResponse> InsertAsync(CreateProductoDto request);
        Task<DtoResponse<List<ProductoDto>>> GetAsync();
        Task<DtoResponse> UpdateAsync(UpdateProductoDto request);
        Task<DtoResponse> DeleteAsync(Guid IdProduct)
    }
}
