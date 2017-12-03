import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import MainReportsScreen from '../../src/screens/reports/MainReportsScreen';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  report: {
  },
};

const store = mockStore(initialState);

describe('Testing DocCheckout Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <MainReportsScreen />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
