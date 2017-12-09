import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { FlatList } from 'react-native';
import axios from 'axios';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import VisitInvitesContainer from '../../src/Containers/VisitInvitesContainer';
import VisitInvites from '../../src/screens/VisitInvites';

const middlewares = [thunk];

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore(middlewares);

const initialState = {
  currentSchedule: {
    codConteudoPost: 0,
    codPostagem: 10,
    content: {
      agentEmail: 'email@email.com',
      codSchool: 0,
      date: '0-0-0000',
      invitedAgent: false,
      schoolName: 'Nome da escola',
      time: '00:00',
      visitListOfInvitees: {},
    },
  },
  counselor: {
    name: 'testCounselor',
    email: 'test@test.com',
    token: 'abc',
    nuvemCode: 123,
  },
  application: false,
  list: {
    listOfPendingInvitedScheduleList: [{
      codSchool: 53007654,
      schoolName: 'EC 02 DE CEILANDIA',
      date: '30-12-2017',
      time: '20:36',
      invitedAgent: false,
      agentEmail: '',
      visitListOfInvitees: {
        123: {
          nuvemCode: 123,
          confirmed: false,
          realizedVisit: false,
        },
        6407: {
          nuvemCode: 6407,
          confirmed: true,
          realizedVisit: false,
        },
      },
    }],
  },
  scheduleVisit: {
    currentVisit: {},
  },

  asyncGetSchedule: () => ({}),
};


const store = mockStore(initialState);

describe('Testing VisitInvites', () => {
  it('it renders correctly', async () => {
    const wrapper = shallow(
      <VisitInvitesContainer {...initialState} />,
      { context: { store } },
    ).dive();

    expect(wrapper).toMatchSnapshot();
  });
});
