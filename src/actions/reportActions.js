import { SET_STOCKFOODREPORT_NEGATIVE, SET_STOCKFOODOBSERVATION,
  SET_STOCKFOODREPORT_POSITIVE, SET_KITCHENREPORT_POSITIVE,
  SET_KITCHENREPORT_NEGATIVE, SET_KITCHENOBSERVATION } from './types';

export const setStockFoodReportPositive = key => ({
  type: SET_STOCKFOODREPORT_POSITIVE,
  payload: {
    key,
  },
});

export const setStockFoodReportNegative = key => ({
  type: SET_STOCKFOODREPORT_NEGATIVE,
  payload: {
    key,
  },
});

export const setFoodStockObservation = observation => ({
  type: SET_STOCKFOODOBSERVATION,
  payload: observation,
});

export const setKitchenReportPositive = key => ({
  type: SET_KITCHENREPORT_POSITIVE,
  payload: {
    key,
  },
});

export const setKitchenReportNegative = key => ({
  type: SET_KITCHENREPORT_NEGATIVE,
  payload: {
    key,
  },
});

export const setKitchenObservation = observation => ({
  type: SET_KITCHENOBSERVATION,
  payload: observation,
});
