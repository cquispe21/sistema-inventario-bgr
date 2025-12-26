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
           .ForMember(d => d.FechaTransaccion, o => o.MapFrom(_ => DateTime.Now))

           .ForMember(d => d.FechaCreacion, o => o.MapFrom(_ => DateTime.Now));
            CreateMap<TransaccionesInventario, TransaccionDto>()
            .ForMember(
                dest => dest.NombreProducto,
                opt => opt.MapFrom(src => src.IdProductoNavigation.NombreProducto)
            );

        }
    }
}
