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

instance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      console.error(`Unauthorized: ${error}`);
    }
    return Promise.reject(error.response);
  },
);

export default {
  instance,

  logout() {
    return instance.get('/logout');
  },

  getUserInfo(params) {
    return instance.get('/user/detail', { params });
  },

  getTopLists(params) {
    return instance.get('/toplist/detail', { params });
  },
};
