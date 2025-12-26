import { useContext, useEffect } from "react";
import TransaccionContext, { type ITransaccionContext } from "../Context/TransaccionContext";
import type { TransaccionDto } from "../../../domain/Transaccion/TransaccionDto";
import { FormProvider, useForm } from "react-hook-form";
import { ModalGeneral } from "../../../shared/Components/Modal/ModalDefault";
import { InputFormContext } from "../../../shared/Components/InputForm/InputFormContext";
import { TextTareaFormContext } from "../../../shared/Components/InputForm/TextTareaFormContext";
import InputSelectContext from "../../../shared/Components/InputForm/InputSelectContext";
import Button from "../../../shared/Components/Button/Button";
import ProductoContext, { type IProductContext } from "../../Productos/Context/ProductoContext";
import type { ProductDto } from "../../../domain/ProductDto/ProductDto";

interface ModalTransaccionProps {
  isOpen: boolean;
  onClose: () => void;
  stateEdit?: boolean;
}

export default function ModalTransaccion({ isOpen, onClose }: ModalTransaccionProps) {
  const { createTransaccion, setTransaccionSelected, transaccionSelected} =
    useContext(TransaccionContext) as ITransaccionContext;


      const { products } =
    useContext(ProductoContext) as IProductContext;

  const InitialTask: TransaccionDto = {
    tipoTransaccion: "",
    idProducto: "",
    cantidad: 0,
    precioUnitario: 0,
    detalle: "",
  fechaCreacion: new Date(),  
  };

  const methods = useForm<TransaccionDto>({ defaultValues: InitialTask });

  useEffect(() => {
    if (!isOpen) {
      methods.reset(InitialTask);
      setTransaccionSelected(undefined);
    }
  }, [isOpen, methods, setTransaccionSelected]);

  useEffect(() => {
    if (transaccionSelected) {
      methods.reset(transaccionSelected);
    }
  }, [transaccionSelected]);

  return (
    <ModalGeneral isOpen={isOpen} onClose={onClose} title="Nueva transacción">
      <>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(createTransaccion)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Producto */}
              <InputSelectContext
                classNameI="col-span-2"
                name="idProducto"
                title="Producto"
                options={[
                  { value: "", title: "Seleccione un producto" },
                  ...(products ?? []).map((p: ProductDto) => ({
                    value: p.idProducto,
                    title: p.nombreProducto,
                  })),
                ]}
                validations={{
                  required: "Seleccione un producto",
                }}
              />

              <InputSelectContext
                name="tipoTransaccion"
                title="Tipo de transacción"
                options={[
                  { value: "", title: "Seleccione un tipo" },
                  { value: "COMPRA", title: "Compra" },
                  { value: "VENTA", title: "Venta" },
                ]}
                validations={{
                  required: "Seleccione un tipo de transacción",
                }}
              />

              

              <InputFormContext
                type="number"
                name="cantidad"
                title="Cantidad"
                validations={{
                  required: "Este campo es requerido",
                  min: { value: 1, message: "Debe ser mayor a 0" },
                }}
              />

              <InputFormContext
                type="number"
                name="precioUnitario"
                title="Precio unitario"
                validations={{
                  required: "Este campo es requerido",
                  min: { value: 0, message: "No puede ser negativo" },
                }}
              />

              <TextTareaFormContext
                classNameI="col-span-2"
                name="detalle"
                title="Detalle (opcional)"
                validations={{
                  required: false,
                }}
              />

              

              <div className="col-span-2 flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
                >
                  Cancelar
                </button>
                <Button type="submit" style="" text="Guardar" />
              </div>
            </div>
          </form>
        </FormProvider>
      </>
    </ModalGeneral>
  );
}
