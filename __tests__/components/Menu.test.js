import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '../../src/components/Menu';
import MENU_ITENS from '../../src/constants/menuItens';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  counselor: {
    profile: {
      isPresident: true,
    },
  },
};

const store = mockStore(initialState);

describe('Testing Menu Side Bar', () => {
  it('Test Menu Rendering', () => {
    const wrapper = shallow(<Menu {...initialState} />, { context: { store } });
    expect(wrapper).toMatchSnapshot();
  });

  it('Test onPress searchSchool', () => {
    const wrapper = shallow(<Menu {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'searchSchool');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test onPress profileInfoScreen', () => {
    const wrapper = shallow(<Menu {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'profileInfoScreen');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test onPress schedulingVisit', () => {
    const wrapper = shallow(<Menu {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'schedulingVisit');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test onPress seeLegislation', () => {
    const wrapper = shallow(<Menu {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'seeLegislation');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test onPress scheduleMeeting', () => {
    const wrapper = shallow(<Menu {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'scheduleMeeting');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test onPress notifications', () => {
    const wrapper = shallow(<Menu {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'notifications');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test onPress doComplaint', () => {
    const wrapper = shallow(<Menu {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'doComplaint');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test onPress logout', () => {
    const wrapper = shallow(<Menu {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'logout');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test onPress manageRegisters', () => {
    const initialStateWithPresident = {
      counselor: {
        profile: {
          isPresident: true,
        },
      },
    };

    const wrapper = shallow(<Menu {...initialStateWithPresident} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'manageRegisters');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });
});
