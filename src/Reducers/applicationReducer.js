import initialState from './initialState';
import { IS_LOADING,
  IS_NOT_LOADING,
} from '../actions/types';
import { logInfo, logError } from '../../logConfig/loggers';

const FILE_NAME = 'applicationReducer.js';

const applicationReducer = (state = initialState.application, action) => {
  logInfo(FILE_NAME, 'applicationReducer',
    `State received in Application Reducer: ${JSON.stringify(state)}`);

  logInfo(FILE_NAME, 'applicationReducer',
    `Action received in Application Reducer: ${JSON.stringify(action)}`);

  if (action === undefined) {
    logError(FILE_NAME, 'applicationReducer',
      `Action is undefined: ${JSON.stringify(action)}`);

    return state;
  }

  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case IS_NOT_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default applicationReducer;
