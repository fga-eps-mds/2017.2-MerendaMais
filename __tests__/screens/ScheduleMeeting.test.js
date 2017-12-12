import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import ScheduleMeetingContainer from '../../src/Containers/scheduleMeeting/ScheduleMeetingContainer';
import ScheduleMeeting from '../../src/screens/scheduleMeeting/ScheduleMeeting';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  application: {
    isLoading: false,
  },
  counselor: {
    profile: {
      CAE: 'Distrito Federal',
    },
  },

  schedule: {
    codSchool: 0,
    meetingLatitude: null,
    meetingLongitude: null,
  },

  appToken: 'genericalToken',
  nuvemCode: 1,
  meeting: {
    date: '31-12-2017',
    time: '10:00',
    lat: 5.00,
    long: 13.00,
    meetingDescription: '',
  },


  list: {
    listOfCounselorsInAGroup: [
      {
        name: 'Lucas Penido Antunes',
        profile: {
          cpf: '11111111111',
          phone: '11111111111',
        },
      },
    ],

    meetingListOfInviteesWithCounselorInformations: {
      6122: {
        nuvemCode: 6122,
        name: 'Lucas Penido Antunes',
        cpf: '11111111111',
        phone: '11111111111',
      },
      6201: {
        nuvemCode: 6201,
        name: 'Kamilla Costa Souzaa',
        cpf: '00000000000',
        phone: '99999999999',
      },
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
  asyncGetCounselorFromGroup: jest.fn(),
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
    meetingLatitude: 0.0,
    meetingLongitude: 0.0,
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

  meetingListOfInviteesWithCounselorInformations: {
    6122: {
      nuvemCode: 6122,
      name: 'Lucas Penido Antunes',
      cpf: '11111111111',
      phone: '11111111111',
    },
    6201: {
      nuvemCode: 6201,
      name: 'Kamilla Costa Souzaa',
      cpf: '00000000000',
      phone: '99999999999',
    },
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

  asyncGetCounselorFromGroup: jest.fn(),
};

const store = mockStore(initialState);


describe('Testing ScheduleMeeting Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <ScheduleMeetingContainer />,
      { context: { store } },
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing ScheduleMeeting buttons', () => {
  it('Test if goToMeetingMaps Button is rendered', () => {
    jest.mock('react-native-router-flux');
    const wrapper = shallow(<ScheduleMeeting {...initialStateToScreen} />);
    console.log(initialStateToScreen);
    const button = wrapper.findWhere(c => c.key() === 'openMeetingMap');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test if openMeetingLocation Button is rendered', () => {
    const wrapper = shallow(<ScheduleMeeting {...initialStateToScreen} />);
    const button = wrapper.findWhere(c => c.key() === 'openMeetingLocation');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test if inviteCounselors Button is rendered', () => {
    const wrapper = shallow(<ScheduleMeeting {...initialStateToScreen} />);
    const button = wrapper.findWhere(c => c.key() === 'searchCounselorButton');
    expect(button.length).toEqual(1);
    // We are not simulating button press because
    // we faced problemns with .show from popUp
    // button.simulate('press');
  });
  it('Test if schedule button is rendered', () => {
    const asyncSchedulingMeeting = (state) => {
      expect(state.nuvemCode).toEqual(1);
      expect(state.appToken).toEqual('tokenGenerico');
      expect(state.meeting.date).toEqual('31-12-2017');
      expect(state.meeting.time).toEqual('18:30');
      expect(state.meeting.lat).toEqual(0.00);
      expect(state.meeting.long).toEqual(0.00);
    };

    const wrapper = shallow(<ScheduleMeeting
      {...initialStateToScreen}
    />);

    wrapper.setState({
      nuvemCode: 1,
      token: 'tokenGenerico',
      meeting: {
        date: '31-12-2017',
        time: '18:30',
        lat: 0.00,
        long: 0.00,
        meetingDescription: '',
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
    });

    const button = wrapper.findWhere(c => c.key() === 'scheduleMeetingButton');
    expect(button.length).toEqual(1);
  });
  it('Test if meetingDescription updates', () => {
    const wrapper = shallow(<ScheduleMeeting {...initialStateToScreen} />);
    const describeInputComponent = wrapper.find('TextInput').at(0);
    describeInputComponent.simulate('ChangeText', 'descricao');
    expect(wrapper.state().meeting.meetingDescription).toEqual('descricao');
  });
});

describe('Testing ScheduleMeeting DatePickers', () => {
  const wrapper = shallow(<ScheduleMeeting {...initialStateToScreen} />);

  it('Test if date changes when DatePicker changes', () => {
    const datePickerComponent = wrapper.find('DatePicker').at(0);
    datePickerComponent.simulate('dateChange', '31-10-2017');
    expect(wrapper.state().meeting.date).toEqual('31-10-2017');
  });
  it('Test if time changes when DatePicker changes', () => {
    const datePickerComponent = wrapper.find('DatePicker').at(1);
    datePickerComponent.simulate('dateChange', '19:50');
    expect(wrapper.state().meeting.time).toEqual('19:50');
  });
});
