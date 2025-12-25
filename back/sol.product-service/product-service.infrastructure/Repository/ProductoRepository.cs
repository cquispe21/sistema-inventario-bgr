
using product_service.application.Interfaces;
using product_service.domain.DTO.Exceptions;
using product_service.domain.DTO.Productos;

namespace product_service.infrastructure.Repository
{
    public class ProductoRepository : IProductoService
    {
        public Task<DtoResponse> DeleteAsync(Guid IdProduct)
        {
            throw new NotImplementedException();
        }

        public Task<DtoResponse<List<ProductoDto>>> GetAsync()
        {
            throw new NotImplementedException();
        }

        public Task<DtoResponse> InsertAsync(CreateProductoDto request)
        {
            throw new NotImplementedException();
        }

        public Task<DtoResponse> UpdateAsync(UpdateProductoDto request)
        {
            throw new NotImplementedException();
        }
    }
}
