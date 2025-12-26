import { createAxiosClient } from "../axiosBase";

const TransaccionClient = createAxiosClient(import.meta.env.VITE_APITRANSACCION_URL);

export default TransaccionClient;