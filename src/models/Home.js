export default {
  namespace: 'home',
  state: {
    topLists: [],
    userProfile: null,
  },
  reducers: {
    setTopLists(state, { data: { topLists } }) {
      return { ...state, ...{ topLists } };
    },
    setUserProfile(state, { data: { userProfile } }) {
      return { ...state, ...{ userProfile } };
    },
  },
};
