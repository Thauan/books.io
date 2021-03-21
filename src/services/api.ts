import axios from 'axios';
import { getToken } from '../utils/storage';

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1/',
  headers: { 'content-type': 'application/json' },
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
