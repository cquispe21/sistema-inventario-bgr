
import type { IProductServices } from "../application/Product/IProductServices";
import type { ProductDto } from "../domain/ProductDto/ProductDto";
import type { PagedResult, ResponseDto } from "../domain/ResponseDto/ResponseDto";
import ProductClient from "../utils/Clients/ProductClient";
export default function ProductServices(): IProductServices {


 const createProductAsync = async (product: FormData) => {
  const response = await ProductClient.post("/Producto/insertAsync", product, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

  const updateProductAsync = async (product: FormData) => {
    const response = await ProductClient.put("/Producto/updateAsync", product, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  }

  const getProductAsync = async (

    pageNumber: number = 1,
    pageSize: number = 10
  ): Promise<ResponseDto<PagedResult<ProductDto[]>>> => {
    const response = await ProductClient.get("/Producto/getAsync",{ params: { pageNumber, pageSize } });
    
    return response.data.data;

  };

  const getProductIdAsync = async (IdProducto: string): Promise<ResponseDto<ProductDto>> => {
    const response = await ProductClient.get(`/Producto/getAsyncId?IdProducto=${IdProducto}`);
    return response.data.data;
  }


  return { createProductAsync, getProductAsync, getProductIdAsync, updateProductAsync };
}
