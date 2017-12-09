import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MeetingInvitesContainer from '../../src/Containers/MeetingInvitesContainer';
import MeetingInvites from '../../src/screens/MeetingInvites';

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
    listOfScheduleMeetingInAGroup: [{
      content: {
        date: '13-06-2019',
        lat: -15.943174451901015,
        long: -48.08775566518306,
        meetingDescription: 2019,
        meetingListOfInvitees: {
          6117: {
            confirmed: false,
            nuvemCode: 6117,
          },
          6870: {
            confirmed: true,
            nuvemCode: 6870,
          },
        },
        time: '21:56',
      },
    }],
    listOfCounselorsInAGroup: [{ nome: 'Mito' }],
  },
  // codConteudoPost: 5721,
  // codPostagem: 7330,
  meetingLat: '',
  meetingLong: '',
  asyncGetScheduleMeeting: 12312321,
  asyncGetCounselorFromGroup: 12312321,
};

const initialStateToScreen = {
  counselor: {
    token: 'genericalToken',

    profile: {
      CAE: 'DF',
    },
  },

  scheduleMeeting: {
    codSchool: 0,
    meetingLatitude: null,
    meetingLongitude: null,
  },
  appToken: 'genericalToken',
  nuvemCode: 1,

  meeting: {
    lat: 5.00,
    long: 13.00,
    date: '31-10-2017',
    time: '19:50',
    meetingDescription: '',
  },

  listOfCounselorsInAGroup: [
    {
      name: 'Lucas Penido Antunes',
      profile: {
        cpf: '11111111111',
        phone: '11111111111',
      },
    },
  ],
  listOfScheduleMeetingInAGroup: [{
    content: {
      date: '13-06-2019',
      lat: -15.943174451901015,
      long: -48.08775566518306,
      meetingDescription: 2019,
      meetingListOfInvitees: {
        6117: {
          confirmed: false,
          nuvemCode: 6117,
        },
        6870: {
          confirmed: true,
          nuvemCode: 6870,
        },
      },
      time: '21:56',
    },
  }],

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
  meetingLat: -15.943174451901015,
  meetingLong: -48.08775566518306,
  arrayScheduleMeetingList: jest.fn(),
  asyncGetScheduleMeeting: jest.fn(),
  asyncGetCounselorFromGroup: jest.fn(),
};

const store = mockStore(initialState);

describe('Testing MeetingInvites', () => {
  it('renders meeting as expected', () => {
    const wrapper = shallow(
      <MeetingInvitesContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing Meeting buttons', () => {
  it('Test if getMeetingLocalization is called', async () => {
    const wrapper = shallow(<MeetingInvites {...initialStateToScreen} />);
    const spy = jest.spyOn(MeetingInvites.prototype, 'getMeetingLocalization');

    await wrapper.setState({ meetingLat: -15.943174451901015 });
    wrapper.instance().getMeetingLocalization();

    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });

  it('Test if getInfo is called', async () => {
    const wrapper = shallow(<MeetingInvites {...initialStateToScreen} />);
    const spy = jest.spyOn(MeetingInvites.prototype, 'getInfo');

    await wrapper.setState({ date: '13-06-2019', time: '21:56' });
    wrapper.instance().getInfo();

    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });

  it('Test if mountListOfInvitees is called', async () => {
    const wrapper = shallow(<MeetingInvites {...initialStateToScreen} />);
    const spy = jest.spyOn(MeetingInvites.prototype, 'mountListOfInvitees');

    await wrapper.setState({ invitees: [] });
    wrapper.instance().mountListOfInvitees();

    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });

  it('Test if mountListOfInvitees is called', async () => {
    const wrapper = shallow(<MeetingInvites {...initialStateToScreen} />);
    const spy = jest.spyOn(MeetingInvites.prototype, 'arrayScheduleMeetingList');

    await wrapper.setState({ invitees: [] });
    wrapper.instance().arrayScheduleMeetingList();

    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });
  it('Test onPress +InfoButton', () => {
    const wrapper = shallow(<MeetingInvites {...initialStateToScreen} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === '+MeetingInfo');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });
});
