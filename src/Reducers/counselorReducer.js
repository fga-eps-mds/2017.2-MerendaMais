import initialState from './initialState';
import { SET_COUNSELOR, SET_TOKEN, SET_COUNSELOR_EDITED } from '../actions/types';
// import { logTrace, logError } from '../../logConfig/loggers';

// const FILE_NAME = 'counselorReducer.js';

const counselorReducer = (state = initialState.counselor, action) => {
  // logTrace(FILE_NAME, 'counselorReducer',
  //   `Action Type received: ${action.type}`);

  if (action === undefined) {
    // logWarn(FILE_NAME, 'counselorReducer',
    //   `ERROR: Action is undefined: ${JSON.stringify(action)}`);

    return state;
  }

  switch (action.type) {
    case SET_COUNSELOR:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        nuvemCode: action.payload.nuvemCode,
        password: action.payload.password,
        profile: action.payload.profile,
        token: action.payload.token,
        userName: action.payload.userName,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_COUNSELOR_EDITED:
      return {
        ...state,
        name: action.payload.name,
        profile: action.payload.profile,
      };
    default:
      return state;
  }
};

export default counselorReducer;
