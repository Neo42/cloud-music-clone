export default {
  namespace: 'user',
  state: {
    userProfile: null,
  },
  reducers: {
    setUserProfile(state, { data: { userProfile } }) {
      return { ...state, ...{ userProfile } };
    },
  },
};
