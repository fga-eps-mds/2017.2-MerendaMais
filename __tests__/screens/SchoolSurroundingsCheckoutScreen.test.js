import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import SchoolSurroundingsCheckoutContainer from '../../src/Containers/reports/SchoolSurroundingsCheckoutContainer';
import schoolSurroundings from '../../src/constants/reports/schoolSurroundings';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  report: {
    schoolSurroundings,
    foodQualityObservation: '',
  },
};

const store = mockStore(initialState);

describe('Testing SchoolSurroundingCheckout Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <SchoolSurroundingsCheckoutContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
