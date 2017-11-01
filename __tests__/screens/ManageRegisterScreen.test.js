import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
// import ManageRegistersScreen from '../../src/screens/ManageRegistersScreen'
import ManageRegistersScreenContainer from '../../src/Containers/ManageRegistersScreenContainer';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  list: {
    listOfCounselorsInAGroup: [{ nome: 'Joao' }],
  },
  counselor: {
    profile: {
      CAE: 'RO',
    },
  },
};

const store = mockStore(initialState);

describe('Testing ManageRegistersScreen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <ManageRegistersScreenContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
