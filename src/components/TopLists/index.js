import React from 'react';
import axios from '../../services/api';
import getData from '../../utils/getData';
import TopBrief from '../TopBrief';
import style from './index.css';

export default function TopLists({ topLists, setTopLists }) {
  getData(
    'list',
    axios.getTopLists,
    { limit: 4 },
    setTopLists,
  );
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
