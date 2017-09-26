import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';

import counselorReducer from './counselorReducer';

const reducers = combineReducers({
    counselor: counselorReducer
});


const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
