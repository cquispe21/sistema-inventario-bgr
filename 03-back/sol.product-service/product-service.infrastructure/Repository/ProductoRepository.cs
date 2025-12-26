
using AutoMapper;
using Azure.Core;
using Humanizer;
using Microsoft.EntityFrameworkCore;
using product_service.application.Interfaces;
using product_service.domain.DTO.Exceptions;
using product_service.domain.DTO.Helpers;
using product_service.domain.DTO.Pagination;
using product_service.domain.DTO.Productos;
using product_service.domain.Entidades;
using product_service.infrastructure.Context;

namespace product_service.infrastructure.Repository
{
    public class ProductoRepository : IProductoService
    {
        private readonly productoContext _context;
        private readonly IMapper _mapper;
        private readonly IBase64Service _base64Service;

        public ProductoRepository (productoContext context,IMapper mapper,IBase64Service base64Service)
        {
            _context = context;
            _mapper = mapper;
            _base64Service = base64Service;
        }


        public async Task<DtoResponse> InsertAsync(CreateProductoDto request)
        {
            try
            {
                if (request.Imagen != null)
                {
                    request.UrlImagenProducto = await _base64Service.GenerateBase64Async(request.Imagen);
                }
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

        public async Task<DtoResponse> UpdateAsync(UpdateProductoDto request)
        {
            try
            {

                var producto = await _context.Productos
         .FirstOrDefaultAsync(x => x.IdProducto == request.IdProducto);

                if (producto == null)
                    throw CreateResponse.Error("Producto no existe", 404);
                if (request.Imagen != null)
                {
                    request.UrlImagenProducto = await _base64Service.GenerateBase64Async(request.Imagen);
                }
                else
                {
                    request.UrlImagenProducto = producto.UrlImagenProducto;
                }
                _mapper.Map(request, producto);

                producto.FechaActualizacion = DateTime.UtcNow;

                await _context.SaveChangesAsync();

                return CreateResponse.Success("Producto actualizado correctamente");
            }
            catch
            {
                throw;
            }
        }

        public async Task<DtoResponse<PagedResult<ProductoDto>>> GetAsync(int pageNumber = 1, int pageSize = 10)
        {
            if (pageNumber < 1) pageNumber = 1;
            if (pageSize < 1) pageSize = 10;

            const int maxPageSize = 100;
            if (pageSize > maxPageSize) pageSize = maxPageSize;

            try
            {
                var query = _context.Productos.AsNoTracking();

                var totalItems = await query.CountAsync();

                var productos = await query
                    .OrderBy(x => x.IdProducto)
                    .Skip((pageNumber - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync();

                var items = _mapper.Map<List<ProductoDto>>(productos);

                var totalPages = (int)Math.Ceiling(totalItems / (double)pageSize);

                var paged = new PagedResult<ProductoDto>
                {
                    Items = items,
                    Meta = new PaginationMeta
                    {
                        PageNumber = pageNumber,
                        PageSize = pageSize,
                        TotalItems = totalItems,
                        TotalPages = totalPages,
                        HasPrevious = pageNumber > 1,
                        HasNext = pageNumber < totalPages
                    }
                };

                return CreateResponse.Success(paged, "Listado paginado obtenido correctamente");
            }
            catch
            {
                throw CreateResponse.Error("Ocurrió un error", 500);
            }
        }


        public async Task<DtoResponse<ProductoIdDto>> GetAsyncId(Guid IdProducto)
        {
            try
            {
                var producto = await _context.Productos
                    .FirstOrDefaultAsync(x => x.IdProducto == IdProducto);

                if (producto == null)
                    throw CreateResponse.Error("Producto no existe", 404);


                var dto = _mapper.Map<ProductoIdDto>(producto);

                return CreateResponse.Success(dto, "Listado obtenido correctamente");
            }
            catch
            {
                throw CreateResponse.Error("Ocurrió un error", 500);
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
