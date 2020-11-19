import React, { Component } from 'react';
import { home, main } from './index.css';
import {
  User, SearchBar, PromoBanner, Tops,
} from '../../components';

export default class Home extends Component {
    state = {
      tops: [],
    };

getTops = (list) => this.setState({ tops: list })

render() {
  const { tops, user } = this.state;
  return (
    <div className={home}>
      <header>
        <h1>网易云音乐</h1>
      </header>
      <main className={main}>
        <User user={user} />
        <SearchBar />
        <PromoBanner />
        <Tops tops={tops} getTops={this.getTops} />
      </main>
    </div>
  );
}
}
