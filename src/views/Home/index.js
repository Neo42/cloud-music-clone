import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import style, { main } from './index.css';
import {
  User, SearchBar, PromoBanner, TopLists,
} from '../../components/Home';
import api from '../../services/api';

function Home({ userProfile, history }) {
  const [block, setBlock] = useState(null);
  const [topLists, setTopLists] = useState([]);

  useEffect(() => {
    (async () => {
      const { data: { data: { blocks } } } = await api.getHomeRecomm();
      const { data: { list } } = await api.getTopLists({ limit: 4 });
      setBlock(blocks[0]);
      setTopLists(list.slice(0, 4));
    })();
  }, []);

  return (
    <div className={style['home-page']}>
      <header>
        <h1>网易云音乐</h1>
      </header>
      <main className={main}>
        <User userProfile={userProfile} history={history} />
        <SearchBar />
        <PromoBanner block={block && block.extInfo.banners[0]} />
        <TopLists topLists={topLists.slice(0, 4)} />
      </main>
    </div>
  );
}

export default connect(({ user: { userProfile } }) => ({ userProfile }))(Home);
