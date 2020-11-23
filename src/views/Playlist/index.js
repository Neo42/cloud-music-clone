import { connect } from 'dva';
import React, { useEffect } from 'react';
import api from '../../services/api';
import { ListInfo, ListTracks } from '../../components/Playlist';
import style from './index.css';

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
      <div className={style['playlist-page']}>
        <header className={style['playlist-header']}>
          <div className={style['header-bg']} style={{ background: `url(${playlistDetail.coverImgUrl})` }} />
          <h1>歌单</h1>
        </header>
        <ListInfo playlistDetail={playlistDetail} />
        <ListTracks />
      </div>
    )
    : null;
}

export default connect(({ playlist: { playlistDetail } }) => ({ playlistDetail }))(Playlist);
