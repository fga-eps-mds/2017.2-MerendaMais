import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import configureStore from 'redux-mock-store';
import ManageRegistersScreen from '../../src/screens/ManageRegistersScreen';

Enzyme.configure({ adapter: new Adapter() });

// const mockStore = configureStore();

const props = {
  listOfCounselorsInAGroup: [{ nome: 'Joao' }],
  CAE: 'RO',
  asyncGetCounselorFromGroup: jest.fn(),
};

describe('Testing ManagerRegistersScreen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <ManageRegistersScreen {...props} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
