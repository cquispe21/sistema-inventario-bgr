using System;
using System.Collections.Generic;
using auth.domain.Models;
using Microsoft.EntityFrameworkCore;

namespace auth.infrastructure.Data;

public partial class usuarioContext : DbContext
{
    public usuarioContext()
    {
    }

    public usuarioContext(DbContextOptions<usuarioContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Usuario> Usuarios { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
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
