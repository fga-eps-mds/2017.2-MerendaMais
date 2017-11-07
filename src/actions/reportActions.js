import { SET_STOCKFOODREPORT_NEGATIVE,
  SET_STOCKFOODOBSERVATION,
  SET_STOCKFOODREPORT_POSITIVE,
  SET_REFECTORYREPORT_POSITIVE,
  SET_REFECTORYREPORT_NEGATIVE,
  SET_REFECTORYOBSERVATION,
  SET_KITCHENREPORT_POSITIVE,
  SET_KITCHENREPORT_NEGATIVE,
  SET_KITCHENOBSERVATION,
  SET_FOODQUALITYOBSERVATION,
  SET_FOODQUALITYREPORT_NEGATIVE,
  SET_FOODQUALITYREPORT_POSITIVE,
} from './types';

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

export const setRefectoryReportPositive = key => ({
  type: SET_REFECTORYREPORT_POSITIVE,
  payload: {
    key,
  },
});
export const setRefectoryReportNegative = key => ({
  type: SET_REFECTORYREPORT_NEGATIVE,
  payload: {
    key,
  },
});
export const setRefectoryObservation = observation => ({
  type: SET_REFECTORYOBSERVATION,
  payload: observation,
});

export const setFoodQualityReportPositive = key => ({
  type: SET_FOODQUALITYREPORT_POSITIVE,
  payload: {
    key,
  },
});
export const setFoodQualityReportNegative = key => ({
  type: SET_FOODQUALITYREPORT_NEGATIVE,
  payload: {
    key,
  },
});
export const setFoodQualityObservation = observation => ({
  type: SET_FOODQUALITYOBSERVATION,
  payload: observation,
});
