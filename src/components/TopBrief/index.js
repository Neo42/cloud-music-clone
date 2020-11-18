import React from 'react';
import style from './index.css';

export default function TopBrief({
  coverImgUrl, updateFrequency, tracks, name,
}) {
  return (
    <div className={style['top-brief']} key={name}>
      <div className={style['top-cover']}>
        <img src={coverImgUrl} alt={name} />
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
  );
}
