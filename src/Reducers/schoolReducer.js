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
        ...state,
        schoolCode: action.payload.schoolCode,
        schoolName: action.payload.schoolName,
        schoolPhone: action.payload.schoolPhone,
        schoolEmail: action.payload.schoolEmail,
        schoolLat: action.payload.schoolLat,
        schoolLong: action.payload.schoolLong,
        schoolSelected: action.payload.schoolSelected,
      };
    default:
      return state;
  }
};

export default schoolReducer;
