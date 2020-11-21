import instance from '../utils/axios';

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
