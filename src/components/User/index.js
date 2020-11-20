import { Link } from 'dva/router';
import React from 'react';
import style, { user, avatar, name } from './index.scss';

export default function User({ userProfile }) {
  const { avatarUrl, nickname, authStatus } = userProfile === null
    ? { avatarUrl: '', nickname: '', authStatus: false }
    : userProfile;
  return userProfile && (
    <div className={user}>
      <div className={style['user-info']}>
        <img src={avatarUrl} alt="Avatar" className={avatar} />
        <div className={name}>{nickname}</div>
      </div>
      <Link to="/login">
        <button type="button">
          <span>{authStatus ? '退出登录' : '立即登录'}</span>
        </button>
      </Link>
    </div>
  );
}
