import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import MainReportsContainer from '../../src/Containers/reports/MainReportsContainer';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  report: {
  },
  application: {
    isLoading: false,
  },
};

const store = mockStore(initialState);

describe('Testing MainReports Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <MainReportsContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
