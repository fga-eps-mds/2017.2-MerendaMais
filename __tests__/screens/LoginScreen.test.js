import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
// imported as a connected component!
import LoginCounselorContainer from '../../src/Containers/LoginContainer';
import LoginScreen from '../../src/screens/LoginScreen';
import EmailField from '../../src/components/EmailField';
import PasswordField from '../../src/components/PasswordField';
import ButtonWithActivityIndicator from '../../src/components/ButtonWithActivityIndicator';
import { Actions } from '../../__mocks__/react-native-router-flux';


Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  application: {
    isLoading: false,
    message_erro: '',
  },
};

const store = mockStore(initialState);

jest.mock('react-native-router-flux');

describe('Testing LoginCounselor', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <LoginCounselorContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing Login Screen Input', () => {
  const wrapper = shallow(<LoginScreen />);

  it('should change state when the text of email input component changes', () => {
    const emailInputComponent = wrapper.find(EmailField).dive().find(TextInput);
    expect(wrapper.state('email')).toEqual('');
    emailInputComponent.simulate('ChangeText', 'test5@test.com');
    expect(wrapper.state('email')).toEqual('test5@test.com');
  });

  it('should change state when the text of Password input component changes', () => {
    const passwordInputComponent = wrapper.find(PasswordField).dive().find(TextInput);
    expect(wrapper.state('password')).toEqual('');
    passwordInputComponent.simulate('ChangeText', '12345678');
    expect(wrapper.state('password')).toEqual('12345678');
  });

  it('should update focus on submit', () => {
    const emailInputComponent = wrapper.find(EmailField).dive().find(TextInput);

    // TODO: Refactor to use simulate
    emailInputComponent.props().onSubmitEditing();
    //

    expect(wrapper.state('focus')).toBeTruthy();
  });

  it('Should change screen when Register button is pressed', () => {
    const registerButton = wrapper.find(TouchableOpacity);
    registerButton.simulate('press');
    expect(Actions.registerScreen.mock.calls.length).toBe(1);
  });
});

describe('Testing LoginScreen On pressed buttons', () => {
  it('Test if LoginCounselor button is pressed', () => {
    const asyncLoginCounselor = (state) => {
      expect(state.email).toEqual('Conselheiro@email.com');
      expect(state.password).toEqual('senha');
    };

    const wrapper = shallow(
      <LoginScreen
        asyncLoginCounselor={asyncLoginCounselor}
      />,
    );

    wrapper.setState({
      email: 'Conselheiro@email.com',
      password: 'senha',
    });

    const touch = wrapper.find(ButtonWithActivityIndicator).dive().find(TouchableOpacity);

    expect(touch.length).toEqual(1);
    touch.simulate('press');
  });

  it('Test if loading spinning exists', () => {
    const myProps = {
      ...initialState.application,
      isLoading: true,
    };

    const wrapper = shallow(<LoginScreen {...myProps} />);

    const buttonAndIndicator = wrapper.find(ButtonWithActivityIndicator).dive();

    expect(buttonAndIndicator.find(ActivityIndicator).length).toEqual(1);
  });

  it('Test if loading spinning does not exist', () => {
    const wrapper = shallow(<LoginScreen {...initialState.application} />);
    const buttonAndIndicator = wrapper.find(ButtonWithActivityIndicator).dive();

    expect(buttonAndIndicator.find(ActivityIndicator).length).toEqual(0);
  });
});
