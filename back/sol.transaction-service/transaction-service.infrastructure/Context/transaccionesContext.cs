
using Microsoft.EntityFrameworkCore;
using transaction_service.domain.Entidades;

namespace transaction_service.infrastructure.Context;

public partial class transaccionesContext : DbContext
{
    public transaccionesContext()
    {
    }

    public transaccionesContext(DbContextOptions<transaccionesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Producto> Productos { get; set; }

    public virtual DbSet<TransaccionesInventario> TransaccionesInventarios { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }


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

        modelBuilder.Entity<TransaccionesInventario>(entity =>
        {
            entity.HasKey(e => e.IdTransaccion);

            entity.ToTable("TransaccionesInventario");

            entity.Property(e => e.IdTransaccion).ValueGeneratedNever();
            entity.Property(e => e.Detalle).HasMaxLength(1000);
            entity.Property(e => e.FechaCreacion)
                .HasPrecision(0)
                .HasDefaultValueSql("(sysutcdatetime())");
            entity.Property(e => e.FechaTransaccion)
                .HasPrecision(0)
                .HasDefaultValueSql("(sysutcdatetime())");
            entity.Property(e => e.PrecioUnitario).HasColumnType("decimal(18, 2)");
            entity.Property(e => e.TipoTransaccion)
                .HasMaxLength(10)
                .IsUnicode(false);

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.TransaccionesInventarios)
                .HasForeignKey(d => d.IdProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_TransaccionesInventario_Productos");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario);

            entity.HasIndex(e => e.CorreoElectronico, "UQ_Usuarios_Correo").IsUnique();

            entity.Property(e => e.IdUsuario).HasDefaultValueSql("(newsequentialid())");
            entity.Property(e => e.Activo).HasDefaultValue(true);
            entity.Property(e => e.CorreoElectronico).HasMaxLength(150);
            entity.Property(e => e.FechaActualizacion)
                .HasPrecision(0)
                .HasDefaultValueSql("(sysutcdatetime())");
            entity.Property(e => e.FechaCreacion)
                .HasPrecision(0)
                .HasDefaultValueSql("(sysutcdatetime())");
            entity.Property(e => e.HashContrasena).HasMaxLength(255);
            entity.Property(e => e.NombreUsuario).HasMaxLength(150);
            entity.Property(e => e.SaltContrasena).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
