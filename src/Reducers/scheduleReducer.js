import { Actions } from 'react-native-router-flux';
import initialState from './initialState';
import { SET_MEETING_LOCATION_LATITUDE, SET_MEETING_LOCATION_LONGITUDE } from '../actions/types';
// import { logInfo } from '../../logConfig/loggers';

// const FILE_NAME = 'schoolReducer.js';

const scheduleReducer = (state = initialState.schedule, action) => {
  if (action === undefined) {
    // logWarn(FILE_NAME, 'schoolReducer',
    //   `ERROR: Action is undefined: ${JSON.stringify(action, null, 2)}`);

    return state;
  }

  switch (action.type) {
    case SET_MEETING_LOCATION_LATITUDE:
      return {
        ...state,
        meetingLatitude: action.payload.latitude,
      };
    case SET_MEETING_LOCATION_LONGITUDE:
      Actions.ScheduleMeeting();
      return {
        ...state,
        meetingLongitude: action.payload.longitude,
      };
    default:
      return state;
  }
};

export default scheduleReducer;
