import { useContext, useEffect, useState } from "react";
import ProductoContext, { type IProductContext } from "../Context/ProductoContext";
import type { ProductDto } from "../../../domain/ProductDto/ProductDto";

export default function ProductList() {
  const { products, meta, getProducts, getProductId } = useContext(ProductoContext) as IProductContext;

  const [pageSize, setPageSize] = useState<number>(meta?.pageSize ?? 3);

  useEffect(() => {
    // carga inicial
    getProducts(1, pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function formatMoney(n: number) {
    return new Intl.NumberFormat("es-EC", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(n);
  }

  function classNames(...xs: Array<string | false | null | undefined>) {
    return xs.filter(Boolean).join(" ");
  }

  const pageSafe = meta?.pageNumber ?? 1;
  const totalPages = meta?.totalPages ?? 1;
  const canPrev = meta?.hasPrevious ?? pageSafe > 1;
  const canNext = meta?.hasNext ?? pageSafe < totalPages;

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div className="text-sm font-medium text-slate-900">Listado</div>

        <div className="flex items-center gap-3">
          <div className="text-xs text-slate-500">
            Página {pageSafe} de {totalPages}
            {meta ? ` • Total ${meta.totalItems}` : ""}
          </div>

          <select
            className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs text-slate-800"
            value={pageSize}
            onChange={(e) => {
              const newSize = Number(e.target.value);
              setPageSize(newSize);
              getProducts(1, newSize); // reset a página 1 al cambiar tamaño
            }}
          >
            {[3, 5, 10, 25].map((s) => (
              <option key={s} value={s}>
                {s} / pág
              </option>
            ))}
          </select>

          <button
            onClick={() => getProducts(pageSafe - 1, pageSize)}
            disabled={!canPrev}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Anterior
          </button>

          <button
            onClick={() => getProducts(pageSafe + 1, pageSize)}
            disabled={!canNext}
            className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-600">
            <tr>
              <th className="px-4 py-3">Producto</th>
              <th className="px-4 py-3">Descripcion</th>
              <th className="px-4 py-3">Categoría</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3 text-right">Acciones</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {products!.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-slate-600">
                  No hay resultados con los filtros actuales.
                </td>
              </tr>
            ) : (
              products!.map((p: ProductDto) => (
                <tr key={p.idProducto} className="hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-900">{p.nombreProducto}</div>
                  </td>
                  <td className="px-4 py-3 text-slate-800">{p.descripcionProducto}</td>
                  <td className="px-4 py-3 text-slate-800">{p.categoriaProducto}</td>
                  <td className="px-4 py-3 text-slate-800">{formatMoney(p.precioProducto)}</td>
                  <td className="px-4 py-3 text-slate-800">{p.stockProducto}</td>
                  <td className="px-4 py-3">
                    <span
                      className={classNames(
                        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
                        p.activo
                          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                          : "bg-slate-100 text-slate-700 ring-1 ring-slate-200"
                      )}
                    >
                      {p.activo ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => getProductId(p.idProducto)}
                        className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-50"
                      >
                        Editar
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
