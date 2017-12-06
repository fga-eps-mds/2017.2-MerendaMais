import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MeetingInvitesContainer from '../../src/Containers/MeetingInvitesContainer';

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
  list: {
    listOfScheduleMeetingInAGroup: [{ meeting: 'Reunião1' }],
    listOfCounselorsInAGroup: [{ nome: 'Mito' }],
  },
  asyncGetScheduleMeeting: 12312321,
  asyncGetCounselorFromGroup: 12312321,
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
