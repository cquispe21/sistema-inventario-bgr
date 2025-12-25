

namespace product_service.domain.DTO.Productos
{
    public class CreateProductoDto
    {
        public string NameProduct { get; set; } = null!;

        public string? DescriptionProduct { get; set; }

        public string CategoryProduct { get; set; } = null!;

        public string? ImageUrlProduct { get; set; }

        public decimal PriceProduct { get; set; }

        public int StockProduct { get; set; }
    }
}
