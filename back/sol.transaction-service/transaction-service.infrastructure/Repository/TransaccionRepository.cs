

using AutoMapper;
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
            try
            {
                var mapper = _mapper.Map<TransaccionesInventario>(request);
                _context.TransaccionesInventarios.Add(mapper);
                await _context.SaveChangesAsync();
                return CreateResponse.Success("Producto agregado correctamente");

            }
            catch
            {
                throw;
            }
        }

        public async Task<DtoResponse<List<TransaccionDto>>> GetAsync()
        {
            try
            {
                var productos = await _context.TransaccionesInventarios
                    .AsNoTracking()
                    .ToListAsync();

                var dto = _mapper.Map<List<TransaccionDto>>(productos);

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
