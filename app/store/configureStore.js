import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import promiseMiddleware from '../middleware/promiseMiddleware';

const middleware = [
  thunk,
  promiseMiddleware,
]

const finalCreateStore = applyMiddleware(...middleware)(createStore);

const store = finalCreateStore(rootReducer);

export default store;
