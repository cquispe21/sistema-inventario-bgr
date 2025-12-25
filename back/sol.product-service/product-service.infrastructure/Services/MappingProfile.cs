using AutoMapper;
using product_service.domain.DTO.Productos;
using product_service.domain.Entidades;



namespace product_service.infrastructure.Services
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<CreateProductoDto, Producto>()
           .ForMember(d => d.IdProducto, o => o.MapFrom(_ => Guid.NewGuid()))
           .ForMember(d => d.Activo, o => o.MapFrom(_ => true))
           .ForMember(d => d.FechaCreacion, o => o.MapFrom(_ => DateTime.Now))
           .ForMember(d => d.FechaActualizacion, o => o.MapFrom(_ => DateTime.Now));

            CreateMap<Producto, ProductoDto>()
                .ForMember(dest => dest.UrlImagenProducto, opt => opt.Ignore());

            CreateMap<Producto, ProductoIdDto>();

            CreateMap<UpdateProductoDto, Producto>();

        }
    }
}
