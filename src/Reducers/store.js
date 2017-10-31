import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';
// Reducers imports.
import counselorReducer from './counselorReducer';
import reportReducer from './reportReducer';
import applicationReducer from './applicationReducer';
import listReducer from './listReducer';

const reducers = combineReducers({
  counselor: counselorReducer,
  report: reportReducer,
  application: applicationReducer,
  list: listReducer,
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
