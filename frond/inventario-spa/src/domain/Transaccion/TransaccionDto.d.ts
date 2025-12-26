export interface TransaccionDto {
    tipoTransaccion: string;
    idProducto: string;
    cantidad: number;
    precioUnitario: number;
    detalle?: string;
    fechaCreacion: Date;
}

export interface TransaccionResponseList {
    idTransaccion: string;
    fechaTransaccion: string;
    tipoTransaccion: string;
    nombreProducto: string;
    cantidad: number;
    precioUnitario: number;
    total: number;
    detalle: string;
}

 export interface TransaccionFilterDto {
    idProducto: string;
    tipoTransaccion: string;
    fechaDesde: string;
    fechaHasta: string;
  }
