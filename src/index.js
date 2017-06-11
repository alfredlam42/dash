import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, applyRouterMiddleware, IndexRoute } from 'react-router';
import useScroll from 'react-router-scroll/lib/useScroll';

// Components
import App from './App';
import Home from './components/home/Home';
import SchoolList from './components/schoolList/SchoolList';
import ReviewPage from './components/reviewPage/ReviewPage';

// Helpers
import registerServiceWorker from './registerServiceWorker';

// Style
import './index.css';

ReactDOM.render(
  <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/schools" component={SchoolList} />
      <Route path="/schools/review" component={ReviewPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
