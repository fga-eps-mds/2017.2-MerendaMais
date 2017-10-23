import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';

import counselorReducer from './counselorReducer';
import reportReducer from './reportReducer';

const reducers = combineReducers({
  counselor: counselorReducer,
  report: reportReducer,
});


const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
