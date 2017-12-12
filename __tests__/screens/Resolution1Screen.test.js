import React from 'react';
// imported as a connected component!
import { TouchableHighlight } from 'react-native';

import Enzyme, { shallow } from 'enzyme';
import Accordion from 'react-native-collapsible/Accordion';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Resolution1Screen from '../../src/screens/legislation/Resolution1Screen';

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

describe('Testing Resolution1Screen prototype functions', () => {
  it('Testing setSection', () => {
    const spy = jest.spyOn(Resolution1Screen.prototype, 'setSection');
    const wrapper = shallow(<Resolution1Screen />);
    wrapper.instance().setSection(true);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.activeSection).toBeTruthy();
  });
  it('Testing toggleExpanded', () => {
    const spy = jest.spyOn(Resolution1Screen.prototype, 'toggleExpanded');
    const wrapper = shallow(<Resolution1Screen />);
    wrapper.instance().toggleExpanded();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.collapsed).toBeFalsy();
  });
});

describe('Testing Resolution1Screen map', () => {
  it('Testing selectors map onPress', () => {
    const spy = jest.spyOn(Resolution1Screen.prototype, 'setSection');
    const wrapper = shallow(<Resolution1Screen />);
    const selector = wrapper.find(TouchableHighlight).at(0);
    selector.simulate('press');
    expect(spy).toHaveBeenCalled();
  });
});

describe('Testing LawNumber12982Screen Accordion', () => {
  it('Testing onChange', () => {
    const spy = jest.spyOn(Resolution1Screen.prototype, 'toggleExpanded');
    const wrapper = shallow(<Resolution1Screen />).dive();
    const accordion = wrapper.find(Accordion).at(0);
    accordion.props().onChange();
    expect(spy).toHaveBeenCalled();
  });
});
