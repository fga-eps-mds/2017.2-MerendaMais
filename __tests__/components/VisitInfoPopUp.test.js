import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import VisitInfoPopUp from '../../src/components/VisitInfoPopUp';

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
      visitListOfInvitees: {},
      schoolName: 'testSchool',
      time: '00:00',
    },
    visitLat: 0,
    visitLong: 0,
  },
  text: 'Agendamento',

};

const store = mockStore(initialState);

describe('Testing VisitInfoPopUp Component', () => {
  it('Test VisitInfoPopUp Rendering', () => {
    const wrapper = shallow(<VisitInfoPopUp {...initialState} />, { context: { store } });
    expect(wrapper).toMatchSnapshot();
  });

  it('Test if LocalizationButton is rendered', () => {
    const wrapper = shallow(<VisitInfoPopUp {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'VisitLocalizationButtonOnPopUp');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });
});

