import initialState from './initialState';
import { SET_CURRENT_INSPECTION, RESET_SCHEDULE_VISIT } from '../actions/types';
// import { logInfo } from '../../logConfig/loggers';

// const FILE_NAME = 'schoolReducer.js';

const scheduleVisitReducer = (state = initialState.scheduleVisit, action) => {
  if (action === undefined) {
    // logWarn(FILE_NAME, 'schoolReducer',
    //   `ERROR: Action is undefined: ${JSON.stringify(action, null, 2)}`);

    return state;
  }

  switch (action.type) {
    case SET_CURRENT_INSPECTION:
      return {
        ...state,
        currentVisit: action.payload,
      };
    case RESET_SCHEDULE_VISIT:
      return {
        currentVisit: {},
      };
    default:
      return state;
  }
};

export default scheduleVisitReducer;
