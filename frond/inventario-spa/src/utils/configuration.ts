import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    const actualToken: string = localStorage.getItem("token_taxflash") || "";
    config.headers.Authorization = `Bearer ${actualToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    if (error.response) {
      console.error('Error response status:', error.response.status);
      console.error('Error response data:', error.response.data);
      if (error.response.status === 401) {
        alert("No Autorizado");
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = '/login';
      }
    } else {
      console.error('Network error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;