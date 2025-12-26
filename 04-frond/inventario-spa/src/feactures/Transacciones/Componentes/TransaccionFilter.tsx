import { useContext } from "react";
import type { ProductDto } from "../../../domain/ProductDto/ProductDto";
import InputSelectContext from "../../../shared/Components/InputForm/InputSelectContext";
import ProductoContext, {
  type IProductContext,
} from "../../Productos/Context/ProductoContext";
import { FormProvider, useForm } from "react-hook-form";
import { InputFormContext } from "../../../shared/Components/InputForm/InputFormContext";
import Button from "../../../shared/Components/Button/Button";
import type { ITransaccionContext } from "../Context/TransaccionContext";
import TransaccionContext from "../Context/TransaccionContext";
import type { TransaccionFilterDto } from "../../../domain/Transaccion/TransaccionDto";
import { getFirstDayOfCurrentMonth, getLastDayOfCurrentMonth } from "../../../utils/Formater/DateFormatter";

export default function TransaccionFilter() {
  const {getTransacciones} = useContext(TransaccionContext) as ITransaccionContext;
  const { products } = useContext(ProductoContext) as IProductContext;

 

  const InitialTask: TransaccionFilterDto = {
    idProducto: "TODOS",
    tipoTransaccion: "TODOS",
    fechaDesde: getFirstDayOfCurrentMonth(),
    fechaHasta: getLastDayOfCurrentMonth(),
  };



  const methods = useForm<TransaccionFilterDto>({ defaultValues: InitialTask });

  return (
    <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(getTransacciones)} className="space-y-6">

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-4">
          <div className="md:col-span-2">
            <InputSelectContext
              classNameI="col-span-2"
              name="idProducto"
              title="Producto"
              options={[
                { value: "TODOS", title: "TODOS" },
                ...(products ?? []).map((p: ProductDto) => ({
                  value: p.idProducto,
                  title: p.nombreProducto,
                })),
              ]}
              validations={{
                required: "Seleccione un producto",
              }}
            />
          </div>

          <InputSelectContext
            name="tipoTransaccion"
            title="Tipo de transacción"
            options={[
              { value: "TODOS", title: "Todos" },
              { value: "COMPRA", title: "Compra" },
              { value: "VENTA", title: "Venta" },
            ]}
            validations={{
              required: "Seleccione un tipo de transacción",
            }}
          />

          <InputFormContext
            type="date"
            name="fechaDesde"
            title="Desde"
            validations={{
              required: "Este campo es requerido",
              min: { value: 1, message: "Debe ser mayor a 0" },
            }}
          />

          <InputFormContext
            type="date"
            name="fechaHasta"
            title="Hasta"
            validations={{
              required: "Este campo es requerido",
              min: { value: 1, message: "Debe ser mayor a 0" },
            }}
          />

                         
        </div>
         <Button type="submit"
                          style="my-4"
                          text="Buscar" />
          
      </div>
      </form>
    </FormProvider>
  );
}
