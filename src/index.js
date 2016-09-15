import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import './index.css';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/root-reducer'

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,

  document.getElementById('root')
);
