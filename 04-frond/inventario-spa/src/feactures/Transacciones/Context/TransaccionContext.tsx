import { createContext,  useEffect, useState, type ReactNode } from "react";
import type { TransaccionDto, TransaccionFilterDto, TransaccionResponseList } from "../../../domain/Transaccion/TransaccionDto";
import useTransaccion from "../../../application/Transaccion/useTransaccion";
import { getFirstDayOfCurrentMonth, getLastDayOfCurrentMonth } from "../../../utils/Formater/DateFormatter";

export interface ITransaccionContext {
  isOpen: boolean;
  toggleModal: () => void;
  createTransaccion: (transaccion: TransaccionDto) => Promise<void>;
  setTransaccionSelected: React.Dispatch<React.SetStateAction<TransaccionDto | undefined>>;
  transaccionSelected: TransaccionDto | undefined;
  setTransacciones: React.Dispatch<React.SetStateAction<TransaccionResponseList[]>>;
  transacciones: TransaccionResponseList[];
  getTransacciones: (transaccion?: TransaccionFilterDto) => Promise<void>;
}

const TransaccionContext = createContext({});

export const TransaccionProvider = ({ children }: { children: ReactNode }) => {
  const { createTransaccionService,getTransaccionesService } = useTransaccion();

  const [isOpen, setIsOpen] = useState(false);

  const [transaccionSelected, setTransaccionSelected] = useState<TransaccionDto | undefined>(undefined);
  const [transacciones, setTransacciones] = useState<TransaccionResponseList[]>([]);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const createTransaccion = async (transaccion: TransaccionDto) => {
    await createTransaccionService(transaccion);
    await getTransacciones();
    toggleModal();
     
  };
    
const defaultFilter: TransaccionFilterDto = {
  idProducto: "TODOS",
  tipoTransaccion: "TODOS",
  fechaDesde: getFirstDayOfCurrentMonth(),
  fechaHasta: getLastDayOfCurrentMonth(),
};
  const getTransacciones = async (transaccion?: TransaccionFilterDto) => {

    const transacciones = await getTransaccionesService(transaccion!);
    setTransacciones(transacciones);
  };

  useEffect(() => {
    getTransacciones(defaultFilter);
  }, []);

  const storage: ITransaccionContext = {
    isOpen,
    toggleModal,
    createTransaccion,
    transaccionSelected,
    setTransaccionSelected,
    transacciones,
    setTransacciones,
    getTransacciones
  };

  return (
    <TransaccionContext.Provider value={storage}>
      {children}
    </TransaccionContext.Provider>
  );
};

export default TransaccionContext;
