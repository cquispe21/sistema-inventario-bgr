

namespace product_service.domain.DTO.Productos
{
    public class CreateProductoDto
    {
      
        public string NombreProducto { get; set; } = null!;

        public string? DescripcionProducto { get; set; }

        public string CategoriaProducto { get; set; } = null!;

        public string? UrlImagenProducto { get; set; }

        public decimal PrecioProducto { get; set; }

        public int StockProducto { get; set; }


    }
}
