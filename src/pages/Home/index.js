import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { home, main } from './index.css';
import {
  SearchBar, PromoBanner, Tops, User,
} from '../../components';

export default function Home() {
  const [tops, setTops] = useState([]);
  useEffect(() => {
    (async () => {
      const { data: { list } } = await Axios({
        url: 'https://8.210.66.180:3000/toplist/detail',
        method: 'GET',
      });
      setTops(list.slice(0, 4));
    })();
  }, []);
  return (
    <div className={home}>
      <header>
        <h1>网易云音乐</h1>
      </header>
      <div className={main}>
        <User />
        <SearchBar />
        <PromoBanner />
        <Tops tops={tops} />
      </div>
    </div>
  );
}
