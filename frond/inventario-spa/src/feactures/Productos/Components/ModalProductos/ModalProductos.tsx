import { useContext, useEffect, useMemo, useState } from "react";
import ProductoContext, {
  type IProductContext,
} from "../../Context/ProductoContext";
import type { ProductDto, ProductForm } from "../../../../domain/ProductDto/ProductDto";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { ModalGeneral } from "../../../../shared/Components/Modal/ModalDefault";
import { InputFormContext } from "../../../../shared/Components/InputForm/InputFormContext";
import { TextTareaFormContext } from "../../../../shared/Components/InputForm/TextTareaFormContext";
import Button from "../../../../shared/Components/Button/Button";
import InputSelectContext from "../../../../shared/Components/InputForm/InputSelectContext";
import { ProductCategoria } from "../../../../domain/ProductDto/productCategoria";

interface ModalProductosIPropsItems {
  isOpen: boolean;
  onClose: () => void;
  stateEdit?: boolean;
}
export default function ModalProductos({
  isOpen,
  onClose,
}: ModalProductosIPropsItems) {
  const { createProduct, productSelected, setProductSelected, updateProduct } = useContext(
    ProductoContext
  ) as IProductContext;

  const InitialTask: ProductForm = {
    idProducto: "",
    nombreProducto: "",
    descripcionProducto: "",
    categoriaProducto: "",
    urlImagenProducto: undefined,
    precioProducto: 0,
    stockProducto: 0,
    imagen: null,
    activo: true,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date(),
  };

const methods = useForm<ProductForm>({ defaultValues: InitialTask });

const imagen = useWatch({ control: methods.control, name: "imagen" });
const file = imagen?.[0];

const previewUrl = useMemo(() => {
  if (!file) return null;
  return URL.createObjectURL(file);
}, [file]);

useEffect(() => {
  return () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
  };
}, [previewUrl]);

const serverPreviewUrl = useMemo(() => {
  const b64 = productSelected?.urlImagenProducto;
  if (!b64) return null;

  // Si ya viene como data:image/... úsalo
  if (typeof b64 === "string" && b64.startsWith("data:image")) return b64;

  // Si viene como base64 crudo, le ponemos un mime por defecto
  return `data:image/png;base64,${b64}`;
}, [productSelected?.urlImagenProducto]);




  useEffect(() => {
    if (!isOpen) {
      methods.reset(InitialTask);
      setProductSelected(undefined);
    }
  }, [isOpen, methods, setProductSelected]);

  useEffect(() => {
    if (productSelected) {
      methods.reset(productSelected);
    }
  }, [productSelected]);

const finalPreview = previewUrl ?? serverPreviewUrl;
  
  return (
    <ModalGeneral isOpen={isOpen} onClose={onClose}>
      <>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(productSelected ? updateProduct : createProduct)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <InputFormContext
                classNameI="col-span-2"
                name="nombreProducto"
                title="Nombre del producto"
                validations={{ required: "Este campo es requerido" }}
              />

              <TextTareaFormContext
                classNameI="col-span-2"
                name="descripcionProducto"
                title="Descripción del producto"
                validations={{ required: false }}
              />
              {finalPreview && (
  <div className="col-span-2 mt-3 rounded-xl border border-slate-200 bg-slate-50 p-2">
    <img
      src={finalPreview}
      alt="Vista previa"
      className="h-48 w-full rounded-lg object-contain"
    />
  </div>
)}
              <div className="col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Imagen del producto
                </label>

                <input
                  type="file"
                  accept="image/*"
                  className="mt-1 block w-full cursor-pointer rounded-lg border border-slate-300 bg-white text-sm
               file:mr-4 file:rounded-md file:border-0 file:bg-slate-900 file:px-4 file:py-2
               file:text-sm file:font-medium file:text-white hover:file:bg-slate-800"
                {...methods.register("imagen")}
                />

                <p className="mt-1 text-xs text-slate-500">
                  PNG/JPG recomendado. Máx 2–5MB (según backend).
                </p>
              </div>
              <InputSelectContext
                name="categoriaProducto"
                title="Categoría"
                options={[
                  { value: "", title: "Seleccione una Categoria" },

                  { value: ProductCategoria.OFICINA, title: "Oficina" },
                  { value: ProductCategoria.ACCESORIOS, title: "Accesorios" },
                  { value: ProductCategoria.MUEBLES, title: "Muebles" },
                  { value: ProductCategoria.TECNOLOGIA, title: "Tecnología" },
                  {
                    value: ProductCategoria.ALMACANAMIENTO,
                    title: "Almacenamiento",
                  },
                  { value: ProductCategoria.AUDIO, title: "Audio" },
                  { value: ProductCategoria.REDES, title: "Redes" },
                ]}
                validations={{
                  required: "Este campo es requerido",
                }}
              />


              {productSelected && (
               <InputSelectContext
                name="activo"
                title="Estado"
                options={[

                  { value: "true", title: "Activo" },
                  { value: "false", title: "Inactivo" },
                ]}
                validations={{
                  required: "Este campo es requerido",
                }}
              />

              )}

              <InputFormContext
                type="number"
                name="precioProducto"
                title="Precio"
                validations={{
                  required: "Este campo es requerido",
                  min: { value: 0.01, message: "Debe ser mayor a 0" },
                }}
              />

              <InputFormContext
                type="number"
                name="stockProducto"
                title="Stock"
                validations={{
                  required: "Este campo es requerido",
                  min: { value: 0, message: "No puede ser negativo" },
                }}
              />

              <Button type="submit" style="col-span-2" text="Guardar" />
            </div>
          </form>
        </FormProvider>
      </>
    </ModalGeneral>
  );
}
