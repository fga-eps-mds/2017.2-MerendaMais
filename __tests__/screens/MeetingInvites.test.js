import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MeetingInvitesContainer from '../../src/Containers/MeetingInvitesContainer';
// import MeetingInvites from '../../src/screens/MeetingInvites';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  counselor: {
    token: 1,
    profile: {
      cpf: '11111111111',
      codGroup: '0',
      CAE: 'RO',
    },
  },
  application: {
    isLoading: false,
  },
  list: {
    listOfScheduleMeetingInAGroup: [{ meeting: 'Reunião1' }],
    listOfCounselorsInAGroup: [{ nome: 'Mito' }],
  },
  meetingSchedule: {
    content: {
      date: '31-12-2017',
      time: '18:30',
    },
    meetingListOfInvitees: {
      6122: {
        nuvemCode: 6122,
        confirmed: false,
      },
      6201: {
        nuvemCode: 6201,
        confirmed: false,
      },
    },
  },
  meetingLat: '',
  meetingLong: '',
  asyncGetScheduleMeeting: 12312321,
  asyncGetCounselorFromGroup: 12312321,
};

const store = mockStore(initialState);

// describe('Testing MeetingInvites', () => {
//   it('renders meeting as expected', () => {
//     const wrapper = shallow(
//       <MeetingInvitesContainer />,
//       { context: { store } },
//     ).dive();
//     expect(wrapper).toMatchSnapshot();
//   });
// });

describe('Testing Meeting buttons', () => {
  it('Test if goToMaps Button is rendered', () => {
  });
});

// describe('Testing Meeting buttons', () => {
//   it('Test if goToMaps Button is rendered', () => {
//     const wrapper = shallow(<MeetingInvites {...initialState} />, { context: { store } });
//     const button = wrapper.findWhere(c => c.key() === 'renderMeetingButton');
//     expect(button.length).toEqual(1);
//     button.simulate('press');
//   });
// });
