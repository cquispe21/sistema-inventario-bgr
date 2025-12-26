

namespace product_service.domain.DTO.Productos
{
    public class CreateTransactionDto
    {
        public string TipoTransaccion { get; set; } = null!;

        public Guid IdProducto { get; set; }

        public int Cantidad { get; set; }

        public decimal PrecioUnitario { get; set; }

        public string? Detalle { get; set; }

        public DateTime FechaCreacion { get; set; }
    }
}
