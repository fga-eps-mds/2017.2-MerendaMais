import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import SchedulingVisit from '../../src/screens/SchedulingVisit';
import SchedulingVisitContainer from '../../src/Containers/SchedulingVisitContainer';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialStateToScreen = {
  application: {
    isLoading: false,
  },
  counselor: {
    token: 'genericalToken',

    profile: {
      CAE: 'DF',
    },
  },

  school: {
    schoolSelected: false,
  },

  listOfCounselorsInAGroup: [
    {
      name: 'Teste',
      profile: {
        cpf: '11111111111',
        phone: '11111111111',
      },
    },
  ],

  visitListOfInviteesWithCounselorInformations: {
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

  visitListOfInvitees: {
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

const initialState = {
  application: {
    isLoading: false,
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

    visitListOfInviteesWithCounselorInformations: {
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

    visitListOfInvitees: {
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
  counselor: {
    nuvemCode: 1,
    token: 'tokenGenerico',
    profile: {
      CAE: 'DF',
      cpf: '99999999999',
    },
  },
  visit: {
    codSchool: 32,
    date: '31-12-2017',
    time: '18:30',
    visitListOfInvitees: {
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

  school: {
    schoolSelected: true,
  },
  asyncGetCounselorFromGroup: jest.fn(),
};

const store = mockStore(initialState);

jest.mock('react-native-router-flux');

describe('Testing SchedulingVisit', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <SchedulingVisitContainer />,
      { context: { store } },
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing SchedulingVisit buttons', () => {
  it('Test if search school button is rendered', () => {
    const wrapper = shallow(<SchedulingVisit {...initialStateToScreen} />);
    const button = wrapper.findWhere(c => c.key() === 'searchSchoolButton');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test if search counselor button is rendered', () => {
    const wrapper = shallow(<SchedulingVisit {...initialStateToScreen} />);
    const button = wrapper.findWhere(c => c.key() === 'searchCounselorButton').dive();
    button.setProps({ onPress: jest.fn() });
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test if search agent button is rendered', () => {
    const wrapper = shallow(<SchedulingVisit {...initialStateToScreen} />);
    const button = wrapper.findWhere(c => c.key() === 'searchAgentButton');
    expect(button.length).toEqual(1);
    // button.simulate('press');
  });

  it('Test if schedule button is rendered', () => {
    const asyncSchedulingVisit = (state) => {
      expect(state.nuvemCode).toEqual(1);
      expect(state.token).toEqual('tokenGenerico');
      expect(state.visit.codSchool).toEqual(32);
      expect(state.visit.date).toEqual('31-12-2017');
      expect(state.visit.time).toEqual('18:30');
    };

    const wrapper = shallow(<SchedulingVisit
      {...initialStateToScreen}
    />);

    wrapper.setState({
      nuvemCode: 1,
      token: 'tokenGenerico',
      visit: {
        codSchool: 32,
        date: '31-12-2017',
        time: '18:30',
        visitListOfInvitees: {
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

    const button = wrapper.findWhere(c => c.key() === 'scheduleButton');
    expect(button.length).toEqual(1);
  });
});

describe('Testing SchedulingVisit DatePickers', () => {
  const wrapper = shallow(<SchedulingVisit {...initialStateToScreen} />);

  it('Test if date changes when DatePicker changes', () => {
    const datePickerComponent = wrapper.find('DatePicker').at(0);
    datePickerComponent.simulate('dateChange', '31-10-2017');
    expect(wrapper.state().visit.date).toEqual('31-10-2017');
  });
  it('Test if time changes when DatePicker changes', () => {
    const datePickerComponent = wrapper.find('DatePicker').at(1);
    datePickerComponent.simulate('dateChange', '19:50');
    expect(wrapper.state().visit.time).toEqual('19:50');
  });
});
