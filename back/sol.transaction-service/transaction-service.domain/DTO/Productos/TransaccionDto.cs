
using transaction_service.domain.Entidades;

namespace product_service.domain.DTO.Productos
{
    public class TransaccionDto
    {
        public Guid IdTransaccion { get; set; }

        public DateTime FechaTransaccion { get; set; }

        public string TipoTransaccion { get; set; } = null!; 

        public string NombreProducto { get; set; } = null!; 

        public int Cantidad { get; set; }

        public decimal PrecioUnitario { get; set; }

        public decimal Total => Cantidad * PrecioUnitario;

        public string? Detalle { get; set; }

    }
}
