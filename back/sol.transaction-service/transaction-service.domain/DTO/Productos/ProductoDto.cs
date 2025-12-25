
namespace product_service.domain.DTO.Productos
{
    public class ProductoDto
    {
        public Guid IdProduct { get; set; }

        public string NameProduct { get; set; } = null!;

        public string? DescriptionProduct { get; set; }

        public string CategoryProduct { get; set; } = null!;

        public string? ImageUrlProduct { get; set; }

        public decimal PriceProduct { get; set; }

        public int StockProduct { get; set; }

        public bool IsActive { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}
