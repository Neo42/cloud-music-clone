import React, { useEffect } from 'react';
import axios from '../../services/axios';
import TopBrief from '../TopBrief';
import style from './index.css';

export default function TopList({ topLists, setTopLists }) {
  useEffect(() => {
    (async () => {
      const {
        data: { list },
      } = await axios.getTopLists({ limit: 4 });
      setTopLists(list.slice(0, 4));
    })();
  }, []);
  return (
    <div className={style.tops}>
      {topLists.map(({
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
