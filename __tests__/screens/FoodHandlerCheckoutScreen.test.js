import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import FoodHandlerCheckoutContainer from '../../src/Containers/reports/FoodHandlerCheckoutContainer';
import foodHandler from '../../src/constants/reports/foodHandler';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  report: {
    foodHandler,
    foodHandlerObservation: '',
  },
};

const store = mockStore(initialState);

describe('Testing FoodHandlerCheckout Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <FoodHandlerCheckoutContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
