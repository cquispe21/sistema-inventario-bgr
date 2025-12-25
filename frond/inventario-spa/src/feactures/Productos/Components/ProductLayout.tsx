import { useContext, } from "react";
import ProductList from "./ProductList";
import ProductoContext, {
  type IProductContext,
} from "../Context/ProductoContext";
import ModalProductos from "./ModalProductos/ModalProductos";
import Button from "../../../shared/Components/Button/Button";

export default function ProductLayout() {
  const { isOpen, toggleModal } = useContext(
    ProductoContext
  ) as IProductContext;

  return (
    <>
      <ModalProductos isOpen={isOpen} onClose={toggleModal} />

      <div className=" bg-slate-50">

        <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-xl font-semibold text-slate-900">
                  Productos
                </h1>
                <p className="text-sm text-slate-600">
                  Administra tu catálogo: busca, filtra, crea, edita y elimina
                  productos.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button text="Crear Ticket" onClick={toggleModal} />
                {/* <button
                  onClick={resetFilters}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  Limpiar filtros
                </button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-6">
          <ProductList />
        </div>
      </div>
    </>
  );
}
