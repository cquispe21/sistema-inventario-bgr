import ProductLayout from "./Components/ProductLayout";
import { ProductoProvider } from "./Context/ProductoContext";

export default function ProductosIndex() {

       

  return <ProductoProvider>
   
    <ProductLayout />
  </ProductoProvider>;
}
