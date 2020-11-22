import { Link } from 'dva/router';
import React from 'react';
import api from '../../../services/api';
import style, { user, avatar, name } from './index.css';

export default function User({ userProfile, history }) {
  const logout = () => {
    (async () => {
      const response = await api.logout();
      console.log(response);
    })();
    history.go(0);
  };

  return (
    <div className={user}>
      <div className={style['user-info']}>
        {userProfile
          ? <img src={userProfile.avatarUrl} alt="Avatar" className={avatar} />
          : <Avatar />}
        <div className={name}>{userProfile ? userProfile.nickname : '未登录'}</div>
      </div>
      {userProfile ? (
        <button type="button" onClick={logout}>
          <span>退出登录</span>
        </button>
      )
        : (
          <Link to="/login">
            <button type="button">
              <span>立即登录</span>
            </button>
          </Link>
        )}
    </div>
  );
}

function Avatar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#edd" className={avatar}>
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
    </svg>
  );
}
