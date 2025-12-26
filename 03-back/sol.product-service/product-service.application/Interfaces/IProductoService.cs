
using product_service.domain.DTO.Exceptions;
using product_service.domain.DTO.Pagination;
using product_service.domain.DTO.Productos;

namespace product_service.application.Interfaces
{
    public interface IProductoService
    {
        Task<DtoResponse> InsertAsync(CreateProductoDto request);
        Task<DtoResponse<PagedResult<ProductoDto>>> GetAsync(int pageNumber = 1, int pageSize = 10);
        Task<DtoResponse<ProductoIdDto>> GetAsyncId(Guid IdProducto);

        Task<DtoResponse> UpdateAsync (UpdateProductoDto request);
        Task<DtoResponse> DeleteAsync(Guid IdProduct);
    }
}
