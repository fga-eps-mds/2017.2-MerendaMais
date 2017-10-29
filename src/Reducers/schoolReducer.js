import initialState from './initialState';
import { SET_SCHOOL_INFO } from '../actions/types';
// import { logInfo } from '../../logConfig/loggers';

// const FILE_NAME = 'schoolReducer.js';

const schoolReducer = (state = initialState.school, action) => {

  if (action === undefined) {
    // logWarn(FILE_NAME, 'schoolReducer',
    //   `ERROR: Action is undefined: ${JSON.stringify(action, null, 2)}`);

    return state;
  }

  switch (action.type) {
    case SET_SCHOOL_INFO:
      return {
        schoolCode: action.payload.schoolCode,
        schoolName: action.payload.schoolName,
        schoolPhone: action.payload.schoolPhone,
        schoolEmail: action.payload.schoolEmail,
      };
    default:
      return state;
  }
};

export default schoolReducer;
