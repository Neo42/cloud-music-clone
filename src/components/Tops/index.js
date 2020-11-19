import React, { useEffect } from 'react';
import api from '../../services/api';
import TopBrief from '../TopBrief';
import style from './index.css';

export default function Tops({ tops, getTops }) {
  useEffect(() => {
    (async () => {
      const { data: { list } } = await api.getTopLists({ limit: 4 });
      getTops(list.slice(0, 4));
    })();
  }, []);
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
