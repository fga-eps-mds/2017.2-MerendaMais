import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ManageAcceptedRegistersScreenContainer from '../../src/Containers/manageCounselors/ManageAcceptedRegistersScreenContainer';

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
    listOfCounselorsInAGroup: [{ nome: 'Joao' }],
  },
  asyncGetCounselorFromGroup: 12312321,
  application: {
    isLoading: false,
  },
};

const store = mockStore(initialState);

describe('Testing ManageAcceptedRegistersScreen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <ManageAcceptedRegistersScreenContainer />,
      { context: { store } },
    );
    expect(wrapper).toMatchSnapshot();
  });
});
