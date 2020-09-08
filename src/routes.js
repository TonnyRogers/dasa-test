import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import ListUsers from './pages/ListUsers';
import UserDetail from './pages/UserDetail';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/list-users" component={ListUsers} />
        <Route path="/user/:username" component={UserDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
