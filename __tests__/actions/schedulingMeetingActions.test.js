import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/schedulingMeetingActions';
import * as types from '../../src/actions/types';

const LATITUDE = 0.9;
const LONGITUDE = 0.8;

describe('Testing scheduleMeetingActions', () => {
  it('Test if we can set Meeting Latitude', () => {
    let actionReturn = actions.setMeetingLocationLatitude(LATITUDE);

    expect(actionReturn.payload).not.toBe(0.50);
    expect(actionReturn.type).toBe(types.SET_MEETING_LOCATION_LATITUDE);

    actionReturn = actions.setMeetingLocationLatitude(0.50);

    expect(actionReturn.payload).toEqual({ latitude: 0.50 });
    expect(actionReturn.type).toBe(types.SET_MEETING_LOCATION_LATITUDE);
  });

  it('Test if we can set meeting Longitude', () => {
    let actionReturn = actions.setMeetingLocationLongitude(LONGITUDE);

    expect(actionReturn.payload).not.toBe(0.50);
    expect(actionReturn.type).toBe(types.SET_MEETING_LOCATION_LONGITUDE);

    actionReturn = actions.setMeetingLocationLongitude(0.50);

    expect(actionReturn.payload).toEqual({ longitude: 0.50 });
    expect(actionReturn.type).toBe(types.SET_MEETING_LOCATION_LONGITUDE);
  });
});
