import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import LawNumber11947Screen from '../../src/screens/legislation/LawNumber11947Screen';
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

describe('Testing LawNumber11947Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <LawNumber11947Screen />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
