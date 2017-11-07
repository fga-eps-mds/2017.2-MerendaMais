import { SET_STOCKFOODREPORT_NEGATIVE,
  SET_STOCKFOODOBSERVATION,
  SET_STOCKFOODREPORT_POSITIVE,
  SET_REFECTORYREPORT_POSITIVE,
  SET_REFECTORYREPORT_NEGATIVE,
  SET_REFECTORYOBSERVATION,
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
