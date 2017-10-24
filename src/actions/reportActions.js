import { SET_STOCKFOODREPORT, SET_STOCKFOODOBSERVATION } from './types';

export const setStockFoodReport = key => ({
  type: SET_STOCKFOODREPORT,
  payload: {
    key,
  },
});

export const setFoodStockObservation = observation => ({
  type: SET_STOCKFOODOBSERVATION,
  payload: {
    observation,
  },
});
