import { connect } from 'dva';
import React, { useEffect } from 'react';
import api from '../../services/api';
import { ListInfo, ListTracks } from '../../components/Playlist';

function Playlist({ playlistDetail, dispatch, match: { params: { id } } }) {
  useEffect(() => {
    (async () => {
      const { data: { playlist } } = await api.getPlaylistDetail({ id });
      dispatch({
        type: 'playlist/setPlaylistDetail',
        payload: { playlistDetail: playlist },
      });
    })();
  }, []);
  return playlistDetail
    ? (
      <div className="playlist-page">
        <header><h1>歌单</h1></header>
        <ListInfo />
        <ListTracks />
      </div>
    )
    : null;
}

export default connect(({ playlist: { playlistDetail } }) => ({ playlistDetail }))(Playlist);
