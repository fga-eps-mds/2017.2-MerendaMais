import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import RegisterScreenContainer from '../../src/Containers/RegisterScreenContainer';
import RegisterScreen from '../../src/screens/RegisterScreen';

Enzyme.configure({ adapter: new Adapter() });


const mockStore = configureStore();

const initialState = {
  counselor: {
    cpf: '55555555555',
    name: 'test',
    email: 'test5@test.com',
    phone: '555555555',
    isPresident: false,
    password: '55555',
    segment: 'test',
    CAE_Type: 'test',
    CAE: 'test',
  },
};

const store = mockStore(initialState);

describe('Testing RegisterScreen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <RegisterScreenContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing RegisterScreen Input', () => {
  const wrapper = shallow(<RegisterScreen />);

  it('should change state when the text of cpf input component changes', () => {
    const cpfInputComponent = wrapper.find('TextInput').first();
    cpfInputComponent.simulate('ChangeText', '11111111111');
    expect(wrapper.state('cpf')).toEqual('11111111111');
  });

  it('should change state when the text of name input component changes', () => {
    const nameInputComponent = wrapper.find('TextInput').at(1);
    nameInputComponent.simulate('ChangeText', 'test');
    expect(wrapper.state('name')).toEqual('test');
  });
  it('should change state when the text of email input component changes', () => {
    const emailInputComponent = wrapper.find('TextInput').at(2);
    emailInputComponent.simulate('ChangeText', 'test5@test.com');
    expect(wrapper.state('email')).toEqual('test5@test.com');
  });

  it('should change state when the text of phone input component changes', () => {
    const phoneInputComponent = wrapper.find('TextInput').at(3);
    phoneInputComponent.simulate('ChangeText', '555555555');
    expect(wrapper.state('phone')).toEqual('555555555');
  });
});
