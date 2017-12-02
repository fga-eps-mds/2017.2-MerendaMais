import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import ScheduleMeetingMapContainer from '../../src/Containers/scheduleMeeting/ScheduleMeetingMapContainer';
import ScheduleMeetingMap from '../../src/screens/scheduleMeeting/ScheduleMeetingMap';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  meetingLocation: {
    latitude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  region: {
    latitude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  error: null,
  setMeetingLocationLatitude: jest.fn(),
  setMeetingLocationLongitude: jest.fn(),

};

const store = mockStore(initialState);

describe('Testing SchoolInfoScreen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <ScheduleMeetingMapContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing ScheduleMeetingMap button', () => {
  it('Test if setMeetingLocation Button is rendered', () => {
    jest.mock('react-native-router-flux');
    const wrapper = shallow(<ScheduleMeetingMap {...initialState} />);
    const button = wrapper.findWhere(c => c.key() === 'setMeetingLocationButton');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });
});
