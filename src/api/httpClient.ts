import axios from 'axios';

import { ROUTES } from '../shared/constants/routes.constants';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized! Redirecting to login...');
      window.location.href = ROUTES.auth.login;
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
