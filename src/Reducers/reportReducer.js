import initialState from './initialState';
import { SET_STOCKFOODREPORT } from '../actions/types';

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
    default:
      return state;
  }
};

export default reportReducer;
