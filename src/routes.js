import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import ListUsers from './pages/ListUsers';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/list-users" component={ListUsers} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
