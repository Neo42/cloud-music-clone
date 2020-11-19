export default {
  namespace: 'home',
  state: {
    topLists: [],
    userProfile: null,
    blocks: [],
  },
  reducers: {
    setTopLists(state, { data: { topLists } }) {
      return { ...state, ...{ topLists } };
    },
    setUserProfile(state, { data: { userProfile } }) {
      return { ...state, ...{ userProfile } };
    },
    setBlocks(state, { data: { blocks } }) {
      return { ...state, ...{ blocks } };
    },
  },
};
