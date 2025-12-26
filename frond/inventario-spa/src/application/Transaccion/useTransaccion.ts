import type { TransaccionDto, TransaccionFilterDto, TransaccionResponseList } from "../../domain/Transaccion/TransaccionDto";
import TransaccionServices from "../../infrastructure/TransaccionServices";

export default function useTransaccion() {

  const { createTransaccionAsync,getTransaccionASync } = TransaccionServices();

  const createTransaccionService = async (transaccion: TransaccionDto) => {
    await createTransaccionAsync(transaccion);
  };
  const getTransaccionesService = async (transaccionFilter?: TransaccionFilterDto) : Promise<TransaccionResponseList[]> => {
    const response = await getTransaccionASync(transaccionFilter);
    return response.data;
  };

  return { createTransaccionService, getTransaccionesService };
}
