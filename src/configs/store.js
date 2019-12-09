import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import rootReducer from '../reducers';

const middlware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middlware);

export default store;
