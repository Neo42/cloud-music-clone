import React from 'react';
import { Link } from 'dva/router';
import style from './index.css';

export default function TopBrief({ list }) {
  const {
    coverImgUrl, updateFrequency, tracks, name, id,
  } = list;

  return (
    <Link
      to={`/playlist/${id}`}
      key={name}
    >
      <div className={style['top-brief']}>
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
    </Link>
  );
}
