import axios from 'axios';
import Cookies from 'js-cookie';
import { authToken } from '../constants';

const auth = Cookies.get(authToken);

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${auth}`,
  },
});

export default axiosInstance;
