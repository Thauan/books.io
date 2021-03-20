/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../store/history';
import Login from '../pages/Login';

const Routes = () => {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default Routes;
