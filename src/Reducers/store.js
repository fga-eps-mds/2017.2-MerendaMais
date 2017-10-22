import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';
// Reducers imports.
import counselorReducer from './counselorReducer';
import applicationReducer from './applicationReducer';

const reducers = combineReducers({
  counselor: counselorReducer,
  application: applicationReducer,
});


const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
