import React, { useEffect } from 'react';
import axios from '../../services/axios';
import style, { user, avatar, name } from './index.css';

export default function User({ userProfile, setUserProfile }) {
  useEffect(() => {
    (async () => {
      const {
        data: { profile },
      } = await axios.getUserInfo({ uid: 32953014 });
      setUserProfile(profile);
    })();
  }, []);

  const { avatarUrl, nickname, authStatus } = userProfile === null
    ? { avatarUrl: '', nickname: '', authStatus: false }
    : userProfile;

  return (
    <div className={user}>
      <div className={style['user-info']}>
        <img
          // src={url}
          src={avatarUrl}
          alt="Avatar"
          className={avatar}
        />
        <div className={name}>
          {nickname}
        </div>
      </div>
      <button type="button">
        <span>{authStatus ? '退出登录' : '立即登录'}</span>
      </button>
    </div>
  );
}
