
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using product_service.application.Interfaces;
using product_service.domain.DTO.Exceptions;
using product_service.domain.DTO.Helpers;
using product_service.domain.DTO.Productos;
using product_service.domain.Entidades;
using product_service.infrastructure.Context;

namespace product_service.infrastructure.Repository
{
    public class ProductoRepository : IProductoService
    {
        private readonly productoContext _context;
        private readonly IMapper _mapper;

        public ProductoRepository (productoContext context,IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public async Task<DtoResponse> InsertAsync(CreateProductoDto request)
        {
            try
            {
                var mapper = _mapper.Map<Producto>(request);
                _context.Productos.Add(mapper);
                await _context.SaveChangesAsync();
                return CreateResponse.Success("Producto agregado correctamente");

            }
            catch
            {
                throw;
            }
        }

        public async Task<DtoResponse<List<ProductoDto>>> GetAsync()
        {
            try
            {
                var productos = await _context.Productos
                    .AsNoTracking()
                    .ToListAsync();

                var dto = _mapper.Map<List<ProductoDto>>(productos);

                return CreateResponse.Success(dto, "Listado obtenido correctamente");
            }
            catch
            {
                throw CreateResponse.Error("Ocurrió un error", 500);
            }
        }

        public async Task<DtoResponse> UpdateAsync(UpdateProductoDto request)
        {
            try
            {
                var response = await _context.Productos
                    .FirstOrDefaultAsync(x => x.IdProducto == request.IdProducto);

                if (response == null)
                    throw CreateResponse.Error("Producto no existe", 404);

                _mapper.Map(request, request);

                response.FechaActualizacion = DateTime.UtcNow;

                await _context.SaveChangesAsync();

                return CreateResponse.Success("Producto actualizado correctamente");
            }
            catch
            {
                throw;
            }
        }

        public async Task<DtoResponse> DeleteAsync(Guid idProduct)
        {
            try
            {
                var response = await _context.Productos
                    .FirstOrDefaultAsync(x => x.IdProducto == idProduct);

                if (response == null) throw CreateResponse.Error("Producto no existe",404);

                response.Activo = false;
                response.FechaActualizacion = DateTime.Now;

                await _context.SaveChangesAsync();

                return CreateResponse.Success("Producto eliminado correctamente");
            }
            catch
            {
                throw;
            }
        }

    }
}
