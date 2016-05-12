import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers';
import routes from './routes';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router routes={routes} history={history}/>
  </Provider>,
  document.getElementById('root')
);
