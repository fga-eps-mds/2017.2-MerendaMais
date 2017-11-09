import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
// imported as a connected component!
import LoginCounselorContainer from '../../src/Containers/LoginContainer';
import LoginScreen from '../../src/screens/LoginScreen';


Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  application: {
    isLoading: false,
    message_erro: '',
  },
};

const store = mockStore(initialState);

describe('Testing LoginCounselor', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <LoginCounselorContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing RegisterScreen Input', () => {
  const wrapper = shallow(<LoginScreen />);

  it('should change state when the text of email input component changes', () => {
    const emailInputComponent = wrapper.find(TextInput).at(0);
    expect(wrapper.state('email')).toEqual('');
    emailInputComponent.simulate('ChangeText', 'test5@test.com');
    expect(wrapper.state('email')).toEqual('test5@test.com');
  });

  it('should change state when the text of Password input component changes', () => {
    const passwordInputComponent = wrapper.find(TextInput).at(1);
    expect(wrapper.state('password')).toEqual('');
    passwordInputComponent.simulate('ChangeText', '12345678');
    expect(wrapper.state('password')).toEqual('12345678');
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

    const touch = wrapper.findWhere(c => c.key() === 'LoginCounselor');
    expect(touch.length).toEqual(1);
    touch.simulate('press');
  });

  it('Test if loading spinning exists', () => {
    const myProps = {
      ...initialState.application,
      isLoading: true,
    };

    const wrapper = shallow(<LoginScreen {...myProps} />);

    expect(wrapper.find(ActivityIndicator).length).toEqual(1);

    // We expect receive just one TouchableOpacity, because we've two and one just appear
    // if is loading is false.
    expect(wrapper.find(TouchableOpacity).length).toEqual(1);
  });

  it('Test if loading spinning does not exist', () => {
    const wrapper = shallow(<LoginScreen {...initialState.application} />);

    expect(wrapper.find(ActivityIndicator).length).toEqual(0);

    // We expect receive two TouchableOpacity, because we've two and one just desappear
    // if is loading is true.
    expect(wrapper.find(TouchableOpacity).length).toEqual(2);
  });
});
