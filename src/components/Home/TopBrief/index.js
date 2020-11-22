import React from 'react';
import style from './index.css';

export default function TopBrief({ list }) {
  const {
    coverImgUrl, updateFrequency, tracks, name,
  } = list;
  return (
    <a className={style['top-brief']} key={name} href="#">
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
    </a>
  );
}
