import React from 'react';
import { history } from '../components/history';
import { Router, Switch, Route } from 'react-router-dom';
import App from '../App.js';
import DetailPage from '../pages/DetailPage/DetailPage';

const Routes = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/:id" component={DetailPage} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
