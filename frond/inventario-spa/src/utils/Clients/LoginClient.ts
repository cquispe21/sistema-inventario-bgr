import { createAxiosClient } from "../axiosBase";

const LoginClient = createAxiosClient(import.meta.env.VITE_APILOGIN_URL);

export default LoginClient;