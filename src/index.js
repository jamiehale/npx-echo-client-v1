import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import theme from './theme';

// core components
import Admin from './layouts/Admin/Admin';

import './assets/css/material-dashboard-react.css?v=1.8.0';

const history = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
