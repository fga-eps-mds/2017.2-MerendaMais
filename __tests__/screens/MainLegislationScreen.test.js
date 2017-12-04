import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';
import MainLegislationScreen from '../../src/screens/legislation/MainLegislationScreen';
import { Actions } from '../../__mocks__/react-native-router-flux';


jest.mock('react-native-router-flux');

Enzyme.configure({ adapter: new Adapter() });


describe('Testing MainLegislationScreen Render', () => {
  it('renders as expected', () => {
    const wrapper = renderer.create(
      <MainLegislationScreen />,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

// describe('Testing MainLegislationScreen buttons', () => {
//   it('Test resolution1 button', () => {
//     const wrapper = shallow(<MainLegislationScreen />);
//     // console.log(wrapper.debug());
//     const law11Button = wrapper.find(TouchableOpacity);
//     // console.log(law11Button.debug());
//     law11Button.simulate('press');
//     expect(Actions.Resolution1Screen.mock.calls.length).toBe(1);
//   });
// });
