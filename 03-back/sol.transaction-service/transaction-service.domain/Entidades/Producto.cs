

namespace transaction_service.domain.Entidades;

public partial class Producto
{
    public Guid IdProducto { get; set; }

    public string NombreProducto { get; set; } = null!;

    public string? DescripcionProducto { get; set; }

    public string CategoriaProducto { get; set; } = null!;

    public string? UrlImagenProducto { get; set; }

    public decimal PrecioProducto { get; set; }

    public int StockProducto { get; set; }

    public bool Activo { get; set; }

    public DateTime FechaCreacion { get; set; }

    public DateTime FechaActualizacion { get; set; }

    public virtual ICollection<TransaccionesInventario> TransaccionesInventarios { get; set; } = new List<TransaccionesInventario>();
}
