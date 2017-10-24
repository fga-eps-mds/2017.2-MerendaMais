import initialState from './initialState';
import { SET_COUNSELOR,
  LOGIN_SUCCESS,
  SET_TOKEN } from '../actions/types';
import { logTrace, logError } from '../../logConfig/loggers';

const FILE_NAME = 'counselorReducer.js';

const counselorReducer = (state = initialState.counselor, action) => {
  logTrace(FILE_NAME, 'counselorReducer',
    `Action Type received: ${action.type}`);

  if (action === undefined) {
    logError(FILE_NAME, 'counselorReducer',
      `ERROR: Action is undefined: ${JSON.stringify(action)}`);

    return state;
  }

  switch (action.type) {
    case SET_COUNSELOR:
      return {
        ...state,
        id: action.counselor.id,
        url: action.counselor.url,
        cpf: action.counselor.cpf,
        name: action.counselor.name,
        email: action.counselor.email,
        phone: action.counselor.phone,
        isPresident: action.counselor.isPresident,
        password: action.counselor.password,
        segment: action.counselor.segment,
        CAE_Type: action.counselor.CAE_Type,
        CAE: action.counselor.CAE,
      };
    case LOGIN_SUCCESS:
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
    default:
      return state;
  }
};

export default counselorReducer;
