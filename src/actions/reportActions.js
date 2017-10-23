import { SET_STOCKFOODREPORT } from './types';

const setStockFoodReport = key => ({
  type: SET_STOCKFOODREPORT,
  payload: {
    key,
  },
});

export default setStockFoodReport;
