

using AutoMapper;
using Humanizer;
using Microsoft.EntityFrameworkCore;
using product_service.domain.DTO.Helpers;
using product_service.domain.DTO.Productos;
using transaction_service.application.Interfaces;
using transaction_service.domain.DTO.Exceptions;
using transaction_service.domain.Entidades;
using transaction_service.infrastructure.Context;

namespace transaction_service.infrastructure.Repository
{
    public class TransaccionRepository : ITransaccionServices
    {
        private readonly transaccionesContext _context;
        private readonly IMapper _mapper;

        public TransaccionRepository(transaccionesContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public async Task<DtoResponse> InsertAsync(CreateTransactionDto request)
        {
            using var db = await _context.Database.BeginTransactionAsync();

            try
            {
                if (request.Cantidad <= 0)
                    throw CreateResponse.Error("Cantidad inválida", 400);

                if (request.PrecioUnitario < 0)
                    throw CreateResponse.Error("PrecioUnitario inválido", 400);

                var tipo = request.TipoTransaccion?.Trim().ToUpperInvariant();
                if (tipo != "COMPRA" && tipo != "VENTA")
                    throw CreateResponse.Error("TipoTransaccion inválido. Use COMPRA o VENTA.", 400);

                var producto = await _context.Productos
                    .FirstOrDefaultAsync(p => p.IdProducto == request.IdProducto);

                if (producto == null)
                    throw CreateResponse.Error("Producto no existe", 404);

                if (tipo == "VENTA" && producto.StockProducto < request.Cantidad)
                    //throw CreateResponse.Error("Stock insuficiente", 409);

                    throw new ResponseError("Stock insuficinete", 409);

                var trans = _mapper.Map<TransaccionesInventario>(request);

                

                _context.TransaccionesInventarios.Add(trans);

                producto.StockProducto = tipo == "COMPRA"
                    ? producto.StockProducto + request.Cantidad
                    : producto.StockProducto - request.Cantidad;

                producto.FechaActualizacion = DateTime.UtcNow;

                await _context.SaveChangesAsync();
                await db.CommitAsync();

                return CreateResponse.Success("Transacción registrada correctamente");
            }
            catch (ResponseError error)
            {
                await db.RollbackAsync();

                throw CreateResponse.Error(error.Message, 404);

            }
            catch
            {
                await db.RollbackAsync();
                throw;
            }
        }

        public async Task<DtoResponse<List<TransaccionDto>>> GetAsync(Guid? idProducto,
     string? tipoTransaccion,
    DateTime? fechaDesde,
    DateTime? fechaHasta)
        {
            try
            {
                var query = _context.TransaccionesInventarios
            .Include(t => t.IdProductoNavigation)
            .AsNoTracking()
            .AsQueryable();

                
                if (idProducto.HasValue)
                    query = query.Where(t => t.IdProducto == idProducto.Value);

   
                if (!string.IsNullOrWhiteSpace(tipoTransaccion))
                {
                    var tipoNorm = tipoTransaccion.Trim().ToUpperInvariant();
                    query = query.Where(t => t.TipoTransaccion.ToUpper() == tipoNorm);
                }

              
                if (fechaDesde.HasValue)
                    query = query.Where(t => t.FechaTransaccion >= fechaDesde.Value);

                if (fechaHasta.HasValue)
                    query = query.Where(t => t.FechaTransaccion <= fechaHasta.Value);

               
                var transacciones = await query
                    .OrderByDescending(t => t.FechaTransaccion)
                    .ToListAsync();

                var dto = _mapper.Map<List<TransaccionDto>>(transacciones);

                return CreateResponse.Success(dto, "Listado obtenido correctamente");
            }
            catch
            {
                throw CreateResponse.Error("Ocurrió un error", 500);
            }
        }

        public async Task<DtoResponse> UpdateAsync(UpdateTransaccionDto request)
        {
            try
            {
                var response = await _context.TransaccionesInventarios
                    .FirstOrDefaultAsync(x => x.IdTransaccion == request.IdTransaccion);

                if (response == null)
                    throw CreateResponse.Error("Producto no existe", 404);

                _mapper.Map(request, request);

                response.FechaTransaccion = DateTime.UtcNow;

                await _context.SaveChangesAsync();

                return CreateResponse.Success("Producto actualizado correctamente");
            }
            catch
            {
                throw;
            }
        }

        //public async Task<DtoResponse> DeleteAsync(Guid idTransaccion)
        //{
        //    try
        //    {
        //        var response = await _context.TransaccionesInventarios
        //            .FirstOrDefaultAsync(x => x.IdTransaccion == idTransaccion);

        //        if (response == null) throw CreateResponse.Error("Producto no existe", 404);

        //        response.Activo = false;
        //        response.FechaActualizacion = DateTime.Now;

        //        await _context.SaveChangesAsync();

        //        return CreateResponse.Success("Producto eliminado correctamente");
        //    }
        //    catch
        //    {
        //        throw;
        //    }
        //}
    }
}
