import type { ProductDto } from "../../domain/ProductDto/ProductDto";
import ProductServices from "../../infrastructure/ProductoServices";

export default function useProduct() {

  const { createProductAsync, getProductAsync, getProductIdAsync, updateProductAsync } = ProductServices();

  const createProductService = async (product: FormData) => {
    await createProductAsync(product);
  };

  const updateProductService = async (product: FormData) => {
    await updateProductAsync(product);
  }

  const getProductsService = async (): Promise<ProductDto[]> => {
    return await getProductAsync();
  };

  const getProductIdService = async (IdProducto: string): Promise<ProductDto> => {
    return await getProductIdAsync(IdProducto);
  }

  return { createProductService, getProductsService, getProductIdService,updateProductService };
}
