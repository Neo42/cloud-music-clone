import React from 'react';
import style from './index.css';

export default function TopBrief({ coverImgUrl, updateFrequency, tracks }) {
  return coverImgUrl ? (
    <div className={style['top-brief']}>
      <div className={style['top-cover']}>
        <img src={coverImgUrl} alt="" />
        <span>{updateFrequency}</span>
      </div>
      <ol className={style['top-tracks']}>
        {tracks.map(({ first, second }) => (
          <li className={style['top-track']}>
            {first}
            {' '}
            -
            {' '}
            {second}
          </li>
        ))}
      </ol>
    </div>
  ) : null;
}
