export default {
  namespace: 'user',
  state: {
    userProfile: JSON.parse(localStorage.getItem('user-profile')),
  },
  reducers: {
    setUserProfile(state, { payload: { userProfile } }) {
      localStorage.setItem('user-profile', JSON.stringify(userProfile));
      return { ...state, ...{ userProfile } };
    },

  },
};
