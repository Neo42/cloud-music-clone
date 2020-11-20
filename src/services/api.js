import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://8.210.66.180:3000',
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
  (response) => {
    console.info('Response received.');
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.error(`Unauthorized: ${error}`);
    }
    return Promise.reject(error.response);
  },
);

export default {
  instance,

  loginViaPhoneNumber({ phone, password }) {
    return instance.get('/login/cellphone', { params: { phone, password } });
  },

  logout() {
    return instance.get('/logout');
  },

  getUserProfile({ uid }) {
    return instance.get('/user/detail', { params: { uid } });
  },

  getTopLists({ limit }) {
    return instance.get('/toplist/detail', { params: { limit } });
  },

  getPlaylistDetail({ id }) {
    return instance.get('/playlist/detail', { params: { id } });
  },

  getHomeRecomm() {
    return instance.get('/homepage/block/page');
  },
};
