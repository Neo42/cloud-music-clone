export default {
  namespace: 'playlist',

  state: {
    playlistDetail: null,
  },

  reducers: {
    setPlaylistDetail: (state, { payload: { playlistDetail } }) => ({
      ...state,
      ...{ playlistDetail },
    }),
  },
};
