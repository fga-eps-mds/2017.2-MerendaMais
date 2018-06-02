import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';
// Reducers imports.
import counselorReducer from './counselorReducer';
import reportReducer from './reportReducer';
import applicationReducer from './applicationReducer';
import schoolReducer from './schoolReducer';
import listReducer from './listReducer';
import scheduleMeetingReducer from './scheduleMeetingReducer';
import scheduleVisitReducer from './scheduleVisitReducer';
import reportResultReducer from './reportResultReducer';


const reducers = combineReducers({
  counselor: counselorReducer,
  report: reportReducer,
  application: applicationReducer,
  school: schoolReducer,
  list: listReducer,
  scheduleMeeting: scheduleMeetingReducer,
  scheduleVisit: scheduleVisitReducer,
  reportResult: reportResultReducer,
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
