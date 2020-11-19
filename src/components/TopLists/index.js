import React from 'react';
import TopBrief from '../TopBrief';
import style from './index.css';

export default function TopLists({ topLists }) {
  return (
    <div className={style.tops}>
      {topLists.map((list) => (
        <TopBrief list={list} />
      ))}
    </div>
  );
}
