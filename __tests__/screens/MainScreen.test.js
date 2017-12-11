import React from 'react';
import { TouchableOpacity } from 'react-native';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MainScreenContainer from '../../src/Containers/MainScreenContainer';
import { Actions } from '../../__mocks__/react-native-router-flux';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-native-router-flux');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState = {
  application: {
    isLoading: false,
  },
  resetStore: jest.fn(),
};

const store = mockStore(initialState);

describe('Test MainScreen screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <MainScreenContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Test MainScreen buttons', () => {
  it('Test drawer button', () => {
    const wrapper = shallow(<MainScreenContainer />, { context: { store } }).dive();
    const drawer = wrapper.find(TouchableOpacity).at(0);
    drawer.simulate('press');
    expect(Actions.drawerOpen.mock.calls.length).toBe(1);
  });

  it('Test fiscalize button', () => {
    const wrapper = shallow(<MainScreenContainer />, { context: { store } }).dive();
    const drawer = wrapper.find(TouchableOpacity).at(1);
    drawer.simulate('press');
    expect(Actions.StartPendingInspection.mock.calls.length).toBe(1);
  });
});
