import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { Main, Entry, Report } from 'Components';

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!AppStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Entry} />
      <Route path="report" component={Report} />
    </Route>
  </Router>,
  document.getElementById('app')
);
