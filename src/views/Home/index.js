import React, { useState } from 'react';
import { home, main } from './index.css';
import {
  User, SearchBar, PromoBanner, TopLists,
} from '../../components';

export default function Home() {
  const [topLists, setTopLists] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  return (
    <div className={home}>
      <header>
        <h1>网易云音乐</h1>
      </header>
      <main className={main}>
        <User userProfile={userProfile} setUserProfile={setUserProfile} />
        <SearchBar />
        <PromoBanner />
        <TopLists topLists={topLists.slice(0, 4)} setTopLists={setTopLists} />
      </main>
    </div>
  );
}
