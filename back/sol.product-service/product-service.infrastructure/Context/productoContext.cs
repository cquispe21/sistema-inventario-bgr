
using Microsoft.EntityFrameworkCore;
using product_service.domain.Entidades;

namespace product_service.infrastructure.Context;

public partial class productoContext : DbContext
{
    public productoContext()
    {
    }

    public productoContext(DbContextOptions<productoContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Producto> Productos { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.IdProducto);

            entity.Property(e => e.IdProducto).ValueGeneratedNever();
            entity.Property(e => e.Activo).HasDefaultValue(true);
            entity.Property(e => e.CategoriaProducto).HasMaxLength(100);
            entity.Property(e => e.DescripcionProducto).HasMaxLength(1000);
            entity.Property(e => e.FechaActualizacion).HasPrecision(0);
            entity.Property(e => e.FechaCreacion).HasPrecision(0);
            entity.Property(e => e.NombreProducto).HasMaxLength(150);
            entity.Property(e => e.PrecioProducto).HasColumnType("decimal(18, 2)");
            entity.Property(e => e.UrlImagenProducto).HasMaxLength(500);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
