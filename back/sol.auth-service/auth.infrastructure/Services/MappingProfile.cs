using auth.domain.DTO.Usuario;
using auth.domain.Models;
using AutoMapper;




namespace product_service.infrastructure.Services
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<RegistrarUsuarioRequest, Usuario>()
           .ForMember(d => d.IdUsuario, o => o.MapFrom(_ => Guid.NewGuid()))
           .ForMember(d => d.Activo, o => o.MapFrom(_ => true))
           .ForMember(d => d.FechaCreacion, o => o.MapFrom(_ => DateTime.Now))
           .ForMember(d => d.FechaActualizacion, o => o.MapFrom(_ => DateTime.Now));

        }
    }
}
