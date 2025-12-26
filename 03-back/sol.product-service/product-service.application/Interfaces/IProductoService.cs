
using product_service.domain.DTO.Exceptions;
using product_service.domain.DTO.Productos;
using product_service.domain.Entidades;

namespace product_service.application.Interfaces
{
    public interface IProductoService
    {
        Task<DtoResponse> InsertAsync(CreateProductoDto request);
        Task<DtoResponse<List<ProductoDto>>> GetAsync();
        Task<DtoResponse<ProductoIdDto>> GetAsyncId(Guid IdProducto);

        Task<DtoResponse> UpdateAsync (UpdateProductoDto request);
        Task<DtoResponse> DeleteAsync(Guid IdProduct);
    }
}
