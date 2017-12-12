import React from 'react';
// imported as a connected component!
import { TouchableHighlight } from 'react-native';

import Enzyme, { shallow } from 'enzyme';
import Accordion from 'react-native-collapsible/Accordion';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import LawNumber12982Screen from '../../src/screens/legislation/LawNumber12982Screen';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  state: {
    activeSection: false,
    collapsed: true,
  },
};

const mockStore = configureStore();

const store = mockStore(initialState);

describe('Testing LawNumber12982Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <LawNumber12982Screen />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing LawNumber12982Screen prototype functions', () => {
  it('Testing setSection', () => {
    const spy = jest.spyOn(LawNumber12982Screen.prototype, 'setSection');
    const wrapper = shallow(<LawNumber12982Screen />);
    wrapper.instance().setSection(true);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.activeSection).toBeTruthy();
  });
  it('Testing toggleExpanded', () => {
    const spy = jest.spyOn(LawNumber12982Screen.prototype, 'toggleExpanded');
    const wrapper = shallow(<LawNumber12982Screen />);
    wrapper.instance().toggleExpanded();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.collapsed).toBeFalsy();
  });
});

describe('Testing LawNumber12982Screen map', () => {
  it('Testing selectors map onPress', () => {
    const spy = jest.spyOn(LawNumber12982Screen.prototype, 'setSection');
    const wrapper = shallow(<LawNumber12982Screen />);
    const selector = wrapper.find(TouchableHighlight).at(0);
    selector.simulate('press');
    expect(spy).toHaveBeenCalled();
  });
});

describe('Testing LawNumber12982Screen Accordion', () => {
  it('Testing onChange', () => {
    const spy = jest.spyOn(LawNumber12982Screen.prototype, 'toggleExpanded');
    const wrapper = shallow(<LawNumber12982Screen />).dive();
    const accordion = wrapper.find(Accordion).at(0);
    accordion.props().onChange();
    expect(spy).toHaveBeenCalled();
  });
});
