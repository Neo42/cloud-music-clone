import React from 'react';
import style, { user, avatar, name } from './index.css';

export default function User({ url, username, status }) {
  return (
    <div className={user}>
      <div className={style['user-info']}>
        <img
          // src={url}
          src="http://p1.music.126.net/AtHFFy7k1FH5ZqPTCAlQBg==/18587244067659181.jpg"
          alt="Avatar"
          className={avatar}
        />
        <div className={name}>
          {/* {nickname} */}
          Dickensian_
        </div>
      </div>
      <button type="button">
        <span>{!status ? '退出登录' : '立即登录'}</span>
      </button>
    </div>
  );
}
