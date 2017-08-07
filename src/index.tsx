import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import * as reducers from './reducers'

const history = createHistory();
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to="/about">About</Link>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <Link to="/">Home</Link>
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('example')
);
