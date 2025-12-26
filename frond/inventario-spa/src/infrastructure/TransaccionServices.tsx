import { toast } from "sonner";
import type { ITransaccionServices } from "../application/Transaccion/ITrasanccionServices";
import type { ResponseDto } from "../domain/ResponseDto/ResponseDto";
import type {
  TransaccionDto,
  TransaccionFilterDto,
  TransaccionResponseList,
} from "../domain/Transaccion/TransaccionDto";
import TransaccionClient from "../utils/Clients/TransaccionClient";

export default function TransaccionServices(): ITransaccionServices {



  const createTransaccionAsync = async (transaccion: TransaccionDto) => {
    try {
      const response = await TransaccionClient.post(
        "/Transaccion/insertAsync",
        transaccion
      );
      toast.success(response.data.message || "Transaction created successfully");
      return response.data;
    } catch (error) {
      const errorMessage = (error as any).response?.data?.message || "Error creating transaction";
      toast.error(errorMessage);
      throw error;
    }
  };

 const getTransaccionASync = async (
  filter?: TransaccionFilterDto
): Promise<ResponseDto<TransaccionResponseList[]>> => {

  const params: Record<string, string> = {};

 if (filter?.idProducto && filter.idProducto !== "TODOS") params.idProducto = filter.idProducto;
if (filter?.tipoTransaccion && filter.tipoTransaccion !== "TODOS") params.tipoTransaccion = filter.tipoTransaccion;
if (filter?.fechaDesde) params.fechaDesde = filter.fechaDesde;
if (filter?.fechaHasta) params.fechaHasta = filter.fechaHasta;

  const response = await TransaccionClient.get(
    "/Transaccion/getAsync",
    { params }
  );

  return response.data;
};


  return { createTransaccionAsync, getTransaccionASync };
}
