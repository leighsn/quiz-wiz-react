import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import './index.css';
import routes from './routes';
import rootReducer from './reducers/root-reducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// store holds the functions that can access state
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,

  document.getElementById('root')
);
