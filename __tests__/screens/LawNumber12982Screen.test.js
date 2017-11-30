import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import configureStore from 'redux-mock-store';
// import { TouchableHighlight } from 'react-native';
import LawNumber12982Screen from '../../src/screens/LawNumber12982Screen';
// imported as a connected component!


Enzyme.configure({ adapter: new Adapter() });

describe('Testing LawNumber12982Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <LawNumber12982Screen />,
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
