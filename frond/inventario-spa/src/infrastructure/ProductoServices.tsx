
import type { IProductServices } from "../application/Product/IProductServices";
import type { ProductDto } from "../domain/ProductDto/ProductDto";
import type { ResponseDto } from "../domain/ResponseDto/ResponseDto";
import ProductoClient from "../utils/configuration";
export default function ProductServices(): IProductServices {


 const createProductAsync = async (product: FormData) => {
  const response = await ProductoClient.post("/Producto/insertAsync", product, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

  const updateProductAsync = async (product: FormData) => {
    const response = await ProductoClient.put("/Producto/updateAsync", product, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  }

  const getProductAsync = async (): Promise<ResponseDto<ProductDto[]>> => {
    const response = await ProductoClient.get("/Producto/getAsync");
    
    return response.data.data;

  };

  const getProductIdAsync = async (IdProducto: string): Promise<ResponseDto<ProductDto>> => {
    const response = await ProductoClient.get(`/Producto/getAsyncId?IdProducto=${IdProducto}`);
    return response.data.data;
  }


  return { createProductAsync, getProductAsync, getProductIdAsync, updateProductAsync };
}
