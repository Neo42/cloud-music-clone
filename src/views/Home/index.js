import React, { useEffect } from 'react';
import { connect } from 'dva';
import style, { main } from './index.css';
import {
  User, SearchBar, PromoBanner, TopLists,
} from '../../components';
import api from '../../services/api';
import getData from '../../utils/getData';

function Home(props) {
  const {
    topLists, userProfile, dispatch, blocks,
  } = props;
  useEffect(() => {
    getData(
      'list',
      api.getTopLists,
      { limit: 4 },
      'topLists',
      'setTopLists',
      dispatch,
    );
    getData(
      'profile',
      api.getUserProfile,
      { uid: 102283467 },
      'userProfile',
      'setUserProfile',
      dispatch,
    );
    (async () => {
      const { data: { data } } = await api.getHomeRecomm();
      console.log(data);
      dispatch({
        type: 'home/setBlocks',
        data: { blocks: data.blocks },
      });
    })();
  }, []);

  return (
    <div className={style['home-page']}>
      <header>
        <h1>网易云音乐</h1>
      </header>
      <main className={main}>
        <User userProfile={userProfile} />
        <SearchBar />
        {/* <PromoBanner block={blocks[0]} /> */}
        {console.log(blocks[0])}
        <TopLists topLists={topLists.slice(0, 4)} />
      </main>
    </div>
  );
}
const mapStateToProps = ({
  home: { topLists, userProfile, blocks },
}) => ({
  topLists,
  userProfile,
  blocks,
});
export default connect(mapStateToProps)(Home);
