import { Link } from 'dva/router';
import React from 'react';
import style, { user, avatar, name } from './index.css';

export default function User({ userProfile }) {
  return userProfile && (
    <div className={user}>
      <div className={style['user-info']}>
        <img src={userProfile.avatarUrl} alt="Avatar" className={avatar} />
        <div className={name}>{userProfile.nickname}</div>
      </div>
      <Link to="/login">
        <button type="button">
          <span>{userProfile.authStatus ? '退出登录' : '立即登录'}</span>
        </button>
      </Link>
    </div>
  );
}
