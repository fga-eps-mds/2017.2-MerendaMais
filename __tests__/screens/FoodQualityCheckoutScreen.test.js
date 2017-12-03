import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import FoodQualityCheckoutContainer from '../../src/Containers/reports/FoodQualityCheckoutContainer';
import foodQuality from '../../src/constants/reports/foodQuality';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  report: {
    foodQuality,
    foodQualityObservation: '',
  },
};

const store = mockStore(initialState);

describe('Testing FoodQualityCheckout Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <FoodQualityCheckoutContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
