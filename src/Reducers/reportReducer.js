import initialState from './initialState';
import { SET_STOCKFOODREPORT, SET_STOCKFOODOBSERVATION } from '../actions/types';
// import { logTrace, logWarn } from '../../logConfig/loggers';

// const FILE_NAME = 'reportReducer.js';

const reportReducer = (state = initialState.report, action) => {
  // logTrace(FILE_NAME, 'reportReducer',
  //   `Action Type received: ${action.type}`);

  if (action === undefined) {
    // logWarn(FILE_NAME, 'reportReducer',
    //   `ERROR: Action is undefined: ${JSON.stringify(action, null, 2)}`);

    return state;
  }

  switch (action.type) {
    case SET_STOCKFOODREPORT:
      return {
        ...state,
        foodStock: state.foodStock.map((item) => {
          if (item.key === action.payload.key) {
            return { ...item, marked: !item.marked };
          }
          return item;
        }),
      };
    case SET_STOCKFOODOBSERVATION:
      return {
        ...state,
        foodStockObservation: action.payload,
      };
    default:
      return state;
  }
};

export default reportReducer;
