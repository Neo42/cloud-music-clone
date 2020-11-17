import React from 'react';
import style from './index.css';

export default function PromoBanner() {
  return (
    <div className={style['promo-banner']}>
      <a
        className={style['banner-link']}
        href="https://music.163.com/store/newalbum/detail?id=98368946"
      >
        <img
          src="https://p1.music.126.net/6rTXBZcPTukna4d669xfLg==/109951165476174341.jpg"
          alt="数字专辑"
        />
      </a>
    </div>
  );
}
