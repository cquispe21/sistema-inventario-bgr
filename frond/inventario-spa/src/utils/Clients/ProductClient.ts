import { createAxiosClient } from "../axiosBase";

const ProductClient = createAxiosClient(import.meta.env.VITE_APIPRODUCT_URL);

export default ProductClient;