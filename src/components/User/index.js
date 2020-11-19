import { Link } from 'dva/router';
import React from 'react';
import api from '../../services/api';
import getData from '../../utils/getData';
import style, { user, avatar, name } from './index.css';

export default function User({ userProfile, setUserProfile }) {
  getData(
    'profile',
    api.getUserProfile,
    { uid: 102283467 },
    setUserProfile,
  );

  const { avatarUrl, nickname, authStatus } = userProfile === null
    ? { avatarUrl: '', nickname: '', authStatus: false }
    : userProfile;

  return userProfile && (
    <div className={user}>
      <div className={style['user-info']}>
        <img src={avatarUrl} alt="Avatar" className={avatar} />
        <div className={name}>{nickname}</div>
      </div>
      <Link to="/user">
        <button type="button">
          <span>{authStatus ? '退出登录' : '立即登录'}</span>
        </button>
      </Link>
    </div>
  );
}
