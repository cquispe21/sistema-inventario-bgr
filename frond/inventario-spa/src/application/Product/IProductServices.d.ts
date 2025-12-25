export interface IProductServices {
    createProductAsync: (product:  FormData) => Promise<void>;
    updateProductAsync: (product: FormData) => Promise<void>;
    getProductAsync: () => Promise<ResponseDto<ProductDto[]>>;
    getProductIdAsync: (IdProducto: string) => Promise<ResponseDto<ProductDto>>;
}