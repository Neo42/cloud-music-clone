import React, { useEffect, useState } from 'react';
import { home, main } from './index.css';
import {
  SearchBar, PromoBanner, Tops, User,
} from '../../components';
import api from '../../services/api';

export default function Home() {
  const [tops, setTops] = useState([]);
  useEffect(() => {
    (async () => {
      const { data: { list } } = await api.getTopLists({ limit: 4 });
      setTops(list.slice(0, 4));
    })();
  }, []);
  return (
    <div className={home}>
      <header>
        <h1>网易云音乐</h1>
      </header>
      <main className={main}>
        <User />
        <SearchBar />
        <PromoBanner />
        <Tops tops={tops} />
      </main>
    </div>
  );
}
