import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './views/Home';
import Login from './views/Login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
