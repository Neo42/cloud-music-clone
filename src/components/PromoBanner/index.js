import React from 'react';
import style from './index.css';

export default function PromoBanner({ block }) {
  const { pic, url, typeTitle } = block;
  return block ? (
    <div className={style['promo-banner']}>
      <a className={style['banner-link']} href={url}>
        <img src={pic} alt={typeTitle} />
      </a>
    </div>
  ) : null;
}
