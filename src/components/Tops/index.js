import React from 'react';
import TopBrief from '../TopBrief';
import style from './index.css';

export default function Tops({ tops }) {
  return (
    <div className={style.tops}>
      {tops.map(({
        coverImgUrl, updateFrequency, tracks, name,
      }) => (

        <TopBrief
          key={name}
          coverImgUrl={coverImgUrl}
          updateFrequency={updateFrequency}
          tracks={tracks}
          name={name}
        />

      ))}
    </div>
  );
}
