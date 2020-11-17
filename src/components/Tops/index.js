import React from 'react';
import TopBrief from '../TopBrief';
import './index.css';

export default function Tops({ tops }) {
  return (
    <div className="tops">
      {tops.map(({ coverImgUrl, updateFrequency, tracks }) => (
        <TopBrief
          coverUrl={coverImgUrl}
          updateFreq={updateFrequency}
          songs={tracks}
        />
      ))}
    </div>
  );
}
