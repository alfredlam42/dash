import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, applyRouterMiddleware, IndexRoute } from 'react-router';
import useScroll from 'react-router-scroll/lib/useScroll';

// Components
import App from './App';
import Home from './home/Home';

// Helpers
import registerServiceWorker from './registerServiceWorker';

// Style
import './index.css';

ReactDOM.render(
  <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
