import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// import { TouchableHighlight } from 'react-native';
import Resolution1Screen from '../../src/screens/Resolution1Screen';
// imported as a connected component!


Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  state: {
    activeSection: false,
    collapsed: true,
  },
};

const mockStore = configureStore();

const store = mockStore(initialState);

describe('Testing Resolution1Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Resolution1Screen />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
