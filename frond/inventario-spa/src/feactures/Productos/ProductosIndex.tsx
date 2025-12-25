import { useContext } from "react";
import ModalProductos from "./Components/ModalProductos/ModalProductos";
import ProductLayout from "./Components/ProductLayout";
import ProductoContext, { ProductoProvider, type IProductContext } from "./Context/ProductoContext";

export default function ProductosIndex() {

       

  return <ProductoProvider>
   
    <ProductLayout />
  </ProductoProvider>;
}
