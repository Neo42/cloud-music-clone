import React, { useEffect } from 'react';
import { connect } from 'dva';
import { home, main } from './index.css';
import {
  User, SearchBar, PromoBanner, TopLists,
} from '../../components';
import api from '../../services/api';
import getData from '../../utils/getData';

function Home(props) {
  const {
    topLists, userProfile, dispatch,
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
  }, []);

  return (
    <div className={home}>
      <header>
        <h1>
          网易云音乐
        </h1>
      </header>
      <main className={main}>
        <User userProfile={userProfile} />
        <SearchBar />
        <PromoBanner />
        <TopLists topLists={topLists.slice(0, 4)} />
      </main>
    </div>
  );
}
const mapStateToProps = ({ home: { topLists, userProfile } }) => ({
  topLists,
  userProfile,
});
export default connect(mapStateToProps)(Home);
