import React from 'react';
import { TouchableOpacity } from 'react-native';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainScreen from '../../src/screens/MainScreen';
import { Actions } from '../../__mocks__/react-native-router-flux';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-native-router-flux');

describe('Test MainScreen screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <MainScreen />,
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test MainScreen buttons', () => {
  it('Test drawer button', () => {
    const wrapper = shallow(<MainScreen />).dive();
    const drawer = wrapper.find(TouchableOpacity).at(0);
    drawer.simulate('press');
    expect(Actions.drawerOpen.mock.calls.length).toBe(1);
  });

  it('Test fiscalize button', () => {
    const wrapper = shallow(<MainScreen />).dive();
    const drawer = wrapper.find(TouchableOpacity).at(1);
    drawer.simulate('press');
    expect(Actions.mainReportsScreen.mock.calls.length).toBe(1);
  });
});
