

namespace transaction_service.domain.Entidades;

public partial class TransaccionesInventario
{
    public Guid IdTransaccion { get; set; }

    public DateTime FechaTransaccion { get; set; }

    public string TipoTransaccion { get; set; } = null!;

    public Guid IdProducto { get; set; }

    public int Cantidad { get; set; }

    public decimal PrecioUnitario { get; set; }

    public string? Detalle { get; set; }

    public DateTime FechaCreacion { get; set; }

    public virtual Producto IdProductoNavigation { get; set; } = null!;
}
