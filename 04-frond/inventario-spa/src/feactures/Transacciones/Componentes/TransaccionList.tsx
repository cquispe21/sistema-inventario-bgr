import { useContext } from "react";
import TransaccionContext, {
  type ITransaccionContext,
} from "../Context/TransaccionContext";
import type { TransaccionResponseList } from "../../../domain/Transaccion/TransaccionDto";

export default function TransaccionList() {
  const { transacciones } = useContext(
    TransaccionContext
  ) as ITransaccionContext;

 const formatDate = (iso: string): string => {
  if (!iso) return "-";

  const date = new Date(iso);

  return date.toLocaleDateString("es-EC", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};
const formatMoney = (value: number): string => {
  if (value === null || value === undefined) return "-";

  return new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
const classNames = (
  ...classes: Array<string | undefined | null | false>
): string => classes.filter(Boolean).join(" ");

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[950px] text-left text-sm">
        <thead className="bg-slate-50 text-xs uppercase text-slate-600">
          <tr>
            <th className="px-4 py-3">Fecha</th>
            <th className="px-4 py-3">Producto</th>
            <th className="px-4 py-3">Tipo</th>
            <th className="px-4 py-3">Cantidad</th>
            <th className="px-4 py-3">P. Unitario</th>
            <th className="px-4 py-3">Total</th>
            <th className="px-4 py-3">Detalle</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {transacciones!.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-10 text-center text-slate-600">
                No hay transacciones con los filtros actuales.
              </td>
            </tr>
          ) : (
            transacciones!.map((t: TransaccionResponseList) => (
              <tr key={t.idTransaccion} className="hover:bg-slate-50">
                <td className="px-4 py-3 text-slate-800">
                  {formatDate(t.fechaTransaccion)}
                </td>

                
                <td className="px-4 py-3">
                  <div className="font-medium text-slate-900">
                    {t.nombreProducto}
                  </div>
                
                </td>

                <td className="px-4 py-3">
                  <span
                    className={classNames(
                      "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1",
                      t.tipoTransaccion === "ENTRADA"
                        ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                        : "bg-rose-50 text-rose-700 ring-rose-200"
                    )}
                  >
                    {t.tipoTransaccion}
                  </span>
                </td>

                <td className="px-4 py-3 text-slate-800">{t.cantidad}</td>

                <td className="px-4 py-3 text-slate-800">
                  {formatMoney(t.precioUnitario)}
                </td>

                <td className="px-4 py-3 font-medium text-slate-900">
                  {formatMoney(t.total)}
                </td>

                <td className="px-4 py-3 text-slate-700">{t.detalle ?? "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
