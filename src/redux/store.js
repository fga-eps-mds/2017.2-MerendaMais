import{createStore, combineReducers} from 'redux';
import initialState from './initialState';


import counselorReducer from './reducers/counselorReducer';


const reducers = combineReducers({
    counselor : counselorReducer
});

const store = createStore(reducers, initialState);

export default store;
