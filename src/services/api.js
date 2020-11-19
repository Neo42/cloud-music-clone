import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://8.210.66.180:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

export default {
  instance,
  getTopLists(params) {
    return instance.get('/toplist/detail', { params });
  },
};
