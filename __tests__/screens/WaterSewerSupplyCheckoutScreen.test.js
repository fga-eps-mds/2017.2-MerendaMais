import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import WaterSewerSupplyCheckoutContainer from '../../src/Containers/reports/WaterSewerSupplyCheckoutContainer';
import waterSewerSupply from '../../src/constants/reports/waterSewerSupply';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  report: {
    waterSewerSupply,
    waterSewerSupplyObservation: '',
  },
};

const store = mockStore(initialState);

describe('Testing FoodQualityCheckout Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <WaterSewerSupplyCheckoutContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
