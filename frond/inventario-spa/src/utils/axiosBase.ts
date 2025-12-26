import axios from "axios";

export const createAxiosClient = (baseURL: string) => {
  const instance = axios.create({ baseURL });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token_taxflash");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        alert("No Autorizado");
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );

  return instance;
};
