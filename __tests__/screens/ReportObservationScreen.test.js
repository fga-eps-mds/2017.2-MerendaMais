import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import ReportObservationContainer from '../../src/Containers/reports/ReportObservationContainer';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  report: {
    reportObservation: '',
  },
};

const store = mockStore(initialState);

describe('Testing ReportObservation Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <ReportObservationContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
