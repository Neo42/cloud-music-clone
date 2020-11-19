import React, { Component } from 'react';
import { home, main } from './index.css';
import {
  User, SearchBar, PromoBanner, TopList,
} from '../../components';

export default class Home extends Component {
  state = {
    topLists: [],
    userProfile: null,
  };

  setTopLists = (topLists) => this.setState({ topLists });

  setUserProfile = (userProfile) => this.setState({ userProfile });

  render() {
    const { topLists, userProfile } = this.state;
    const { setTopLists, setUserProfile } = this;
    return (
      <div className={home}>
        <header>
          <h1>网易云音乐</h1>
        </header>
        <main className={main}>
          <User userProfile={userProfile} setUserProfile={setUserProfile} />
          <SearchBar />
          <PromoBanner />
          <TopList topLists={topLists} setTopLists={setTopLists} />
        </main>
      </div>
    );
  }
}
