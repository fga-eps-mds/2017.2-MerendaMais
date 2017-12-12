import React from 'react';
// imported as a connected component!
import { TouchableHighlight } from 'react-native';

import Enzyme, { shallow } from 'enzyme';
import Accordion from 'react-native-collapsible/Accordion';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Resolution26Screen from '../../src/screens/legislation/Resolution26Screen';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  state: {
    activeSection: false,
    collapsed: true,
  },
};

const mockStore = configureStore();

const store = mockStore(initialState);

describe('Testing Resolution26Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Resolution26Screen />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing Resolution26Screen prototype functions', () => {
  it('Testing setSection', () => {
    const spy = jest.spyOn(Resolution26Screen.prototype, 'setSection');
    const wrapper = shallow(<Resolution26Screen />);
    wrapper.instance().setSection(true);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.activeSection).toBeTruthy();
  });
  it('Testing toggleExpanded', () => {
    const spy = jest.spyOn(Resolution26Screen.prototype, 'toggleExpanded');
    const wrapper = shallow(<Resolution26Screen />);
    wrapper.instance().toggleExpanded();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.collapsed).toBeFalsy();
  });
});

describe('Testing Resolution1Screen map', () => {
  it('Testing selectors map onPress', () => {
    const spy = jest.spyOn(Resolution26Screen.prototype, 'setSection');
    const wrapper = shallow(<Resolution26Screen />);
    const selector = wrapper.find(TouchableHighlight).at(0);
    selector.simulate('press');
    expect(spy).toHaveBeenCalled();
  });
  it('Testing openLink onPress', () => {
    const wrapper = shallow(<Resolution26Screen {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'openLink');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });
});

describe('Testing LawNumber12982Screen Accordion', () => {
  it('Testing onChange', () => {
    const spy = jest.spyOn(Resolution26Screen.prototype, 'toggleExpanded');
    const wrapper = shallow(<Resolution26Screen />).dive();
    const accordion = wrapper.find(Accordion).at(0);
    accordion.props().onChange();
    expect(spy).toHaveBeenCalled();
  });
});
