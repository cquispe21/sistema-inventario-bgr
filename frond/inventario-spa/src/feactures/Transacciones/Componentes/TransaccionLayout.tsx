import { useContext } from "react";
import ModalTransaccion from "../ModalTransacciones/ModalTransaccion";
import TransaccionList from "./TransaccionList";
import TransaccionContext, { type ITransaccionContext } from "../Context/TransaccionContext";
import ProductoContext, { type IProductContext } from "../../Productos/Context/ProductoContext";
import TransaccionFilter from "./TransaccionFilter";


export default function TransaccionLayout() {

      const {isOpen,toggleModal} = useContext(TransaccionContext) as ITransaccionContext;


  return (

    <>
      <ModalTransaccion isOpen={isOpen} onClose={toggleModal} />

     <div className="min-h-screen bg-slate-50">
      <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-xl font-semibold text-slate-900">Transacciones</h1>
              <p className="text-sm text-slate-600">
                Registra entradas/salidas y consulta el historial con filtros.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={toggleModal}
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                + Nueva transacción
              </button>
         
            </div>
          </div>
        </div>
      </div>

  
      <div className="mx-auto max-w-6xl px-4 py-6">
    
  
<TransaccionFilter />
     
     
       
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
            <div className="text-sm font-medium text-slate-900">Historial</div>
            
          </div>





          

    <TransaccionList />

       
        </div>
      </div>

     
    </div>
    </>

  );
}