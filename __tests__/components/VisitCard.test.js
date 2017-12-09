import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import VisitCard from '../../src/components/VisitCard';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  counselor: {
    name: 'testCounselor',
    email: 'test@test.com',
    token: 'abc',
    nuvemCode: 123,
  },
  visit: {
    content: {
      agentEmail: 'email@email.com',
      codSchool: 0,
      date: '0-0-0000',
      invitedAgent: false,
      visitListOfInvitees: {
        123: {
          nuvemCode: 123,
          confirmed: false,
          realized: false,
        },
      },
      schoolName: 'testSchool',
      time: '00:00',
    },
  },
  text: 'Agendamento',
  popUpCallBack: () => ({}),

};
const initialState2 = {
  counselor: {
    name: 'testCounselor',
    email: 'test@test.com',
    token: 'abc',
    nuvemCode: 123,
  },
  visit: {
    content: {
      agentEmail: 'email@email.com',
      codSchool: 0,
      date: '0-0-0000',
      invitedAgent: false,
      visitListOfInvitees: {
        123: {
          nuvemCode: 123,
          confirmed: true,
          realized: false,
        },
      },
      schoolName: 'testSchool',
      time: '00:00',
    },
  },
  text: 'Agendamento',
  popUpCallBack: () => ({}),
  buttonCallBack: () => ({}),

};

const store = mockStore(initialState);
const store2 = mockStore(initialState2);

describe('Testing VisitCard Component', () => {
  it('Test VisitCard Rendering', () => {
    const wrapper = shallow(<VisitCard {...initialState} />, { context: { store } });
    expect(wrapper).toMatchSnapshot();
  });

  it('Test onPress confirmPresenceButton', () => {
    const wrapper = shallow(<VisitCard {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'confirmPresenceButton');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test onPress CancelPresenceButton', () => {
    const wrapper = shallow(<VisitCard {...initialState2} />, { context: { store2 } });
    const button = wrapper.findWhere(c => c.key() === 'CancelPresenceButton');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test onPress +InfoButton', () => {
    const wrapper = shallow(<VisitCard {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === '+InfoButton');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });
});

