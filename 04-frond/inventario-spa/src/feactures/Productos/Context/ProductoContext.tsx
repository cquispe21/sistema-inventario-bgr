import { createContext,  useEffect, useState, type ReactNode } from "react";
import type { CreateProductDto, ProductDto, ProductForm } from "../../../domain/ProductDto/ProductDto";
import useProduct from "../../../application/Product/useProduct";
import type { PaginationMeta } from "../../../domain/ResponseDto/ResponseDto";


export interface IProductContext {
  isOpen: boolean;
  toggleModal: () => void;
  setProducts?: React.Dispatch<React.SetStateAction<ProductDto[]>>;
  products?:ProductDto[];
  createProduct: (product: ProductDto) => Promise<void>;
  updateProduct: (product: ProductDto) => Promise<void>;
  getProducts: (
    pageNumber?: number,
    pageSize?: number
  ) => Promise<void>;
  productSelected:ProductDto|undefined;
  setProductSelected:React.Dispatch<React.SetStateAction<ProductDto|undefined>>;
  getProductId: (IdProducto:string) => Promise<void>;
  meta ?: PaginationMeta | null;

}

const ProductoContext = createContext({});

export const ProductoProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [products,setProducts]=useState<ProductDto[]>([]); 

  const [productSelected,setProductSelected]=useState<ProductDto|undefined>(undefined);

  const [meta, setMeta] = useState<PaginationMeta | null>(null);


  const { createProductService, getProductsService, getProductIdService,updateProductService } = useProduct();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const createProduct = async (product: ProductForm) => {
    
  
     const fd = new FormData();

  fd.append("nombreProducto", product.nombreProducto);
  fd.append("descripcionProducto", product.descripcionProducto ?? "");
  fd.append("categoriaProducto", product.categoriaProducto);
  fd.append("precioProducto", String(product.precioProducto));
  fd.append("stockProducto", String(product.stockProducto));
  fd.append("activo", String(product.activo));

  const file = product.imagen?.[0];
  if (file) fd.append("imagen", file);
    await createProductService(fd);
    await getProducts();
    toggleModal();
  };

  const updateProduct = async (product: ProductForm) => {
      const fd = new FormData();

  fd.append("nombreProducto", product.nombreProducto);
  fd.append("idProducto", product.idProducto);
  fd.append("descripcionProducto", product.descripcionProducto ?? "");
  fd.append("categoriaProducto", product.categoriaProducto);
  fd.append("precioProducto", String(product.precioProducto));
  fd.append("stockProducto", String(product.stockProducto));
  fd.append("activo", String(product.activo));

  const file = product.imagen?.[0];
  if (file) fd.append("imagen", file);
    await updateProductService(fd);
    await getProducts();
    toggleModal();
  }

  const getProducts = async (
    pageNumber: number = 1,
    pageSize: number = 10
  ) => {
    const res = await getProductsService(
      pageNumber,
      pageSize
    );
    setProducts(res.items);
    setMeta(res.meta);
  };
  const getProductId = async (IdProducto:string) => {
    toggleModal();
    const res = await getProductIdService(IdProducto);
    setProductSelected(res);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const storage: IProductContext = {
    isOpen,
    toggleModal,
    setProducts,
    products,
    createProduct,
    getProducts,
    productSelected,
    setProductSelected,
    getProductId,
    updateProduct,
    meta
  };

  return (
    <ProductoContext.Provider value={storage}>{children}</ProductoContext.Provider>
  );
};

export default ProductoContext;