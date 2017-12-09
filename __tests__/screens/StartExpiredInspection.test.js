import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// import configureStore from 'redux-mock-store';
import StartExpiredInspectionContainer from '../../src/Containers/startInspection/StartExpiredInspectionContainer';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {

  application: {
    isLoading: false,
  },

  list: {
    listOfExpiredScheduleInAGroup: {
      codSchool: '',
      date: '',
      time: '',
    },
  },
};

const store = mockStore(initialState);

describe('Testing StartPendingInspection Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <StartExpiredInspectionContainer />,
      { context: { store } },
    );
    expect(wrapper).toMatchSnapshot();
  });
});
