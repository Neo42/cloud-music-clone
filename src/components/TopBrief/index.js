import React from 'react';
import style from './index.scss';

export default function TopBrief({ list }) {
  const {
    coverImgUrl, updateFrequency, tracks, name,
  } = list;
  return (
    <div className={style['top-brief']} key={name}>
      <div className={style['top-cover']}>
        <img src={coverImgUrl} alt={name} />
        <span>{updateFrequency}</span>
      </div>
      <ol className={style['top-tracks']}>
        {tracks
          && tracks.length
          && tracks.map(({ first, second }) => (
            <li className={style['top-track']} key={first}>
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
