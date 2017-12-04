import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import FoodPreparationCheckoutContainer from '../../src/Containers/reports/FoodPreparationCheckoutContainer';
import foodPreparation from '../../src/constants/reports/foodPreparation';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  report: {
    foodPreparation,
    foodPreparationObservation: '',
  },
};

const store = mockStore(initialState);

describe('Testing FoodQualityCheckout Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <FoodPreparationCheckoutContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
