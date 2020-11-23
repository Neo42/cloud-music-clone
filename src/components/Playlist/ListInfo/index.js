import React from 'react';
import chinaUnitNum from 'china-unit-num';
import style from './index.css';

export default function ListInfo({ playlistDetail }) {
  const {
    coverImgUrl, playCount, name, description, creator: { avatarUrl, nickname },
  } = playlistDetail;
  return (
    <div className={style['list-detail']}>
      <div className={style['list-detail-bg']} style={{ background: `url(${coverImgUrl})` }} />
      <div className={style['list-cover']}>
        <img src={coverImgUrl} alt={name} />
        <span className={style['list-play-count']}>
          {chinaUnitNum(playCount, { decimal: 1 })}
        </span>
      </div>
      <div className={style['list-info']}>
        <span className={style['list-name']}>{name}</span>
        <div className={style['creator-info']}>
          <img src={avatarUrl} alt={nickname} className={style['creator-avatar']} />
          <span className={style['creator-nickname']}>{nickname}</span>
        </div>
        <div className={style['list-description']}>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}
