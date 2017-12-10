import React from 'react';
// imported as a connected component!
import { TouchableHighlight } from 'react-native';

import Enzyme, { shallow } from 'enzyme';
import Accordion from 'react-native-collapsible/Accordion';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import LawNumber11947Screen from '../../src/screens/legislation/LawNumber11947Screen';

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

describe('Testing LawNumber11947Screen prototype functions', () => {
  it('Testing setSection', () => {
    const spy = jest.spyOn(LawNumber11947Screen.prototype, 'setSection');
    const wrapper = shallow(<LawNumber11947Screen />);
    wrapper.instance().setSection(true);
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.activeSection).toBeTruthy();
  });
  it('Testing toggleExpanded', () => {
    const spy = jest.spyOn(LawNumber11947Screen.prototype, 'toggleExpanded');
    const wrapper = shallow(<LawNumber11947Screen />);
    wrapper.instance().toggleExpanded();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().state.collapsed).toBeFalsy();
  });
});

describe('Testing LawNumber11947Screen map', () => {
  it('Testing selectors map onPress', () => {
    const spy = jest.spyOn(LawNumber11947Screen.prototype, 'setSection');
    const wrapper = shallow(<LawNumber11947Screen />);
    const selector = wrapper.find(TouchableHighlight).at(0);
    selector.simulate('press');
    expect(spy).toHaveBeenCalled();
  });
});

describe('Testing LawNumber11947Screen Accordion', () => {
  it('Testing onChange', () => {
    const spy = jest.spyOn(LawNumber11947Screen.prototype, 'toggleExpanded');
    const wrapper = shallow(<LawNumber11947Screen />).dive();
    const accordion = wrapper.find(Accordion).at(0);
    accordion.props().onChange();
    expect(spy).toHaveBeenCalled();
  });
});
