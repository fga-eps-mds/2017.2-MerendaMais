import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import KitchenCheckoutContainer from '../../src/Containers/reports/KitchenCheckoutContainer';
import kitchen from '../../src/constants/reports/kitchen';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  report: {
    kitchen,
    kitchenObservation: '',
  },
};

const store = mockStore(initialState);

describe('Testing KitchenCheckoutScreen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <KitchenCheckoutContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
