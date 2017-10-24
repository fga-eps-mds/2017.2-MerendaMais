import initialState from './initialState';
import { SET_STOCKFOODREPORT, SET_STOCKFOODOBSERVATION } from '../actions/types';

const reportReducer = (state = initialState.report, action) => {
  console.log(action);
  if (action === undefined) return state;
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
