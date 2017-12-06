import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// import configureStore from 'redux-mock-store';
import StartPendingInspectionContainer from '../../src/Containers/startInspection/StartPendingInspectionContainer';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  application: {
    isLoading: false,
  },

  list: {
    listOfPendingScheduleInAGroup: {
      codSchool: '',
      date: '',
      time: '',
    },
    listOfCounselorsInAGroup: {

    },
  },

  counselor: {

  },

  asyncGetSchedule: jest.fn(),
  asyncGetCounselorFromGroup: jest.fn(),
};

const store = mockStore(initialState);

describe('Testing StartPendingInspection Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <StartPendingInspectionContainer />,
      { context: { store } },
    );
    expect(wrapper).toMatchSnapshot();
  });
});
