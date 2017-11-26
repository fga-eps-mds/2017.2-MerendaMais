import initialState from './initialState';
// import { logTrace, logWarn } from '../../logConfig/loggers';

// const FILE_NAME = 'counselorReducer.js';

const manageRegisterReducer = (state = initialState.counselor, action) => {
  // logTrace(FILE_NAME, 'counselorReducer',
  //   `Action Type received: ${action.type}`);

  if (action === undefined) {
    // logWarn(FILE_NAME, 'counselorReducer',
    //   `ERROR: Action is undefined: ${JSON.stringify(action, null, 2)}`);

    return state;
  }

  switch (action.type) {
    default:
      return state;
  }
};

export default manageRegisterReducer;
