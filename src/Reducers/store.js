import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';

import counselorReducer from './counselorReducer';
import schoolReducer from './schoolReducer';

const reducers = combineReducers({
  counselor: counselorReducer,
  school: schoolReducer,
});


const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
