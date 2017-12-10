import scheduleMeetingReducer from '../../src/Reducers/scheduleMeetingReducer';
import initialState from '../../src/Reducers/initialState';
import { SET_MEETING_LOCATION_LATITUDE, SET_MEETING_LOCATION_LONGITUDE } from '../../src/actions/types';

describe('Testing scheduleMeetingReducer', () => {
  it('sets Meeting Latitude', () => {
    let meeting = { ...initialState.schedule };

    expect(meeting.meetingLatitude).not.toEqual(-150000);

    const receivedMeeting = {
      latitude: -150000,
    };

    meeting = scheduleMeetingReducer(meeting, {
      type: SET_MEETING_LOCATION_LATITUDE,
      payload: receivedMeeting,
    });

    expect(meeting.meetingLatitude).toEqual(-150000);
  });
  it('sets Meeting Longitude', () => {
    let meeting = { ...initialState.schedule };

    expect(meeting.meetingLongitude).not.toEqual(-150000);

    const receivedMeeting = {
      longitude: -150000,
    };

    meeting = scheduleMeetingReducer(meeting, {
      type: SET_MEETING_LOCATION_LONGITUDE,
      payload: receivedMeeting,
    });

    expect(meeting.meetingLongitude).toEqual(-150000);
  });
  it('Undefined action sended', () => {
    let meeting = initialState.scheduleMeeting;

    expect(meeting.codSchool).toBe(0);
    expect(meeting.meetingLatitude).toBe(null);
    expect(meeting.meetingLongitude).toBe(null);

    const sendedSchedule = meeting;

    const action = undefined;

    expect(action).toBeUndefined();

    meeting = scheduleMeetingReducer(meeting, action);

    expect(meeting).toEqual(sendedSchedule);
  });
});
