import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainLegislationScreen from '../../src/screens/MainLegislationScreen';


jest.mock('react-native-router-flux');
Enzyme.configure({ adapter: new Adapter() });


describe('Testing MainLegislationScreen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <MainLegislationScreen />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
