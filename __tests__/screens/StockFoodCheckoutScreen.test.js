import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
// import StockFoodCheckoutScreen from '../../src/screens/StockFoodCheckoutScreen'
import StockFoodCheckoutContainer from '../../src/Containers/StockFoodCheckoutContainer';
import foodStock from '../../src/Reducers/Reports/foodStock';
import StockFoodCheckoutScreen from '../../src/screens/StockFoodCheckoutScreen';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  report: {
    foodStock,
    foodStockObservation: '',
  },
};

const store = mockStore(initialState);

describe('Testing StockFoodCheckoutScreen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <StockFoodCheckoutContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
