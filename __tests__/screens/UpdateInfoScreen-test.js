import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import UpdateInfoScreen from '../../src/screens/UpdateInfoScreen';
import UpdateInfoScreenContainer from '../../src/Containers/UpdateInfoScreenContainer';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  counselor: {
    name: 'test',
    email: 'test5@test.com',
    phone: '555555555',
  },
};

const store = mockStore(initialState);

describe('Testing UpdateInfoScreen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <UpdateInfoScreenContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing UpdateInfoScreen Input', () => {
  const wrapper = shallow(<UpdateInfoScreen />);

  it('should change state when the text of name input component changes', () => {
    const nameInputComponent = wrapper.find('TextInput').at(0);
    nameInputComponent.simulate('ChangeText', 'Maria');
    expect(wrapper.state('name')).toEqual('Maria');
  });

  it('should change state when the text of email input component changes', () => {
    const emailInputComponent = wrapper.find('TextInput').at(1);
    emailInputComponent.simulate('ChangeText', 'Maria@test.com');
    expect(wrapper.state('email')).toEqual('Maria@test.com');
  });

  it('should change state when the text of phone input component changes', () => {
    const phoneInputComponent = wrapper.find('TextInput').at(2);
    phoneInputComponent.simulate('ChangeText', '9999999999');
    expect(wrapper.state('phone')).toEqual('9999999999');
  });
});

describe('Testing UpdateInfoScreen button', () => {
  it('Test if updateInfo Button is rendered', () => {
    const wrapper = shallow(<UpdateInfoScreen />);
    const button = wrapper.findWhere(c => c.key() === 'infoUpdate');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });
});
