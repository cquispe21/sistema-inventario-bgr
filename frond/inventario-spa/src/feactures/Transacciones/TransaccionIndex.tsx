import { ProductoProvider } from "../Productos/Context/ProductoContext";
import TransaccionLayout from "./Componentes/TransaccionLayout";
import { TransaccionProvider } from "./Context/TransaccionContext";

export default function TransaccionIndex() {
  return (
    <ProductoProvider>

    <TransaccionProvider>
      <TransaccionLayout />
    </TransaccionProvider>
    </ProductoProvider>

  );
}
