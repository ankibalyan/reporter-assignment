import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { Main, Entry, Report } from 'Components';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Entry} />
      <Route path="report" component={Report} />
    </Route>
  </Router>,
  document.getElementById('app')
);
