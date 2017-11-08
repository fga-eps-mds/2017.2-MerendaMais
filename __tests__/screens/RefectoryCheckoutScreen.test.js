import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import RefectoryCheckoutContainer from '../../src/Containers/RefectoryCheckoutContainer';
import refectory from '../../src/Reducers/Reports/refectory';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  report: {
    refectory,
    foodQualityObservation: '',
  },
};

const store = mockStore(initialState);

describe('Testing ReportObservation Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <RefectoryCheckoutContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
