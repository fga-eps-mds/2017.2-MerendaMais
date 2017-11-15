import initialState from './initialState';
import { SET_SCHEDULE_INFO } from '../actions/types';
// import { logInfo } from '../../logConfig/loggers';

// const FILE_NAME = 'schoolReducer.js';

const scheduleReducer = (state = initialState.schedule, action) => {
  if (action === undefined) {
    // logWarn(FILE_NAME, 'schoolReducer',
    //   `ERROR: Action is undefined: ${JSON.stringify(action, null, 2)}`);

    return state;
  }

  switch (action.type) {
    case SET_SCHEDULE_INFO:
      return {
        ...state,
        date: '',
        time: '',
      };
    default:
      return state;
  }
};

export default scheduleReducer;
