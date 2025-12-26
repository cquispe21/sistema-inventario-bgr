

using Microsoft.AspNetCore.Http;

namespace product_service.domain.DTO.Productos
{
    public class UpdateProductoDto
    {
        public Guid IdProducto { get; set; }

        public string NombreProducto { get; set; } = null!;

        public string? DescripcionProducto { get; set; }

        public string CategoriaProducto { get; set; } = null!;

        public string? UrlImagenProducto { get; set; }

        public decimal PrecioProducto { get; set; }

        public int StockProducto { get; set; }

        public bool Activo { get; set; }
        public IFormFile? Imagen { get; set; }


    }
}
