// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../src/actions/schedulingMeetingActions';
import * as types from '../../src/actions/types';
// import { POSTS_LINK_NUVEM_CIVICA } from '../../src/constants';

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

  // Need promise to work
  /* it('Test SchedulingMeeting', () => {
    const parameter = {
      appToken: 1,
      nuvemCode: 2,
      meeting: {
        lat: 0.9,
        long: 0.5,
        date: '31-12-12',
        time: '20:20',
        meetingListOfInvitees: {
          6122: {
            nuvemCode: 6122,
            confirmed: false,
          },
        },
        meetingDescription: 'descricao',
      },
    };
    const mock = new MockAdapter(axios);
    mock.onPost(POSTS_LINK_NUVEM_CIVICA).reply(200);

    const dispatchMock = jest.fn();
    const functionReturn = actions.schedulingMeeting(parameter, dispatchMock);
    console.log(dispatchMock.mock.calls.length);
    expect(dispatchMock.mock.calls.length).toBe(1);
  }); */
});
