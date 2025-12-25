export interface ProductDto {
 idProducto: string;
    nombreProducto: string;
    descripcionProducto?: string | null;
    categoriaProducto: string;
    urlImagenProducto?: string | null;
    precioProducto: number;
    stockProducto: number;
    activo: boolean;
    fechaCreacion: Date;
    fechaActualizacion: Date;
}

export type ProductForm = ProductDto & {
  imagen?: FileList | null;
};


export interface CreateProductDto {
    nombreProducto: string; // Nombre del producto
    descripcionProducto?: string; // Descripción del producto
    categoriaProducto: string; // Categoría del producto
    urlImagenProducto?: string; // URL de la imagen del producto
    precioProducto: number; // Precio del producto
    stockProducto: number; // Stock del producto
}