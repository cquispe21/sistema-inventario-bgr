using AutoMapper;
using product_service.domain.DTO.Productos;
using transaction_service.domain.Entidades;




namespace transaction_service.infrastructure.Services
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<CreateTransactionDto, TransaccionesInventario>()
           .ForMember(d => d.IdTransaccion, o => o.MapFrom(_ => Guid.NewGuid()))
           .ForMember(d => d.FechaCreacion, o => o.MapFrom(_ => DateTime.Now));

        }
    }
}
