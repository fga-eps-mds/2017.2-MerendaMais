import Enzyme, { shallow } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import PrincipalNotifications from '../../src/screens/PrincipalNotifications';
import { Actions } from '../../__mocks__/react-native-router-flux';

Enzyme.configure({ adapter: new Adapter() });


describe('Testing PrincipalNotification rendering', () => {
  it('PrincipalNotification renders correctly', () => {
    const wrapper = shallow(<PrincipalNotifications />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing PrincipalNotification buttons', () => {
  it('Testing VisitInvites button', () => {
    const wrapper = shallow(<PrincipalNotifications />).dive();
    const button = wrapper.find(TouchableOpacity).at(0);
    button.simulate('press');
    expect(Actions.VisitInvites.mock.calls.length).toBe(1);
  });
});
