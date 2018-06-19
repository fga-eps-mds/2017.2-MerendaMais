import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// import configureStore from 'redux-mock-store';
import StartAlreadyInspectionedInspectionContainer from '../../src/Containers/startInspection/StartAlreadyInspectionedInspectionContainer';

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

  reportResult: {
    isLoadingResult: false,
  },
};

const store = mockStore(initialState);

describe('Testing StartPendingInspection Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <StartAlreadyInspectionedInspectionContainer />,
      { context: { store } },
    );
    expect(wrapper).toMatchSnapshot();
  });
});
