import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { TouchableOpacity, TextInput, ActivityIndicator, Picker } from 'react-native';
// imported as a connected component!
import RegisterScreenContainer from '../../src/Containers/RegisterScreenContainer';
import RegisterScreen from '../../src/screens/RegisterScreen';
import CpfField from '../../src/components/CpfField';
import NameField from '../../src/components/NameField';
import EmailField from '../../src/components/EmailField';
import PasswordField from '../../src/components/PasswordField';
import PhoneField from '../../src/components/PhoneField';
import DropdownComponent from '../../src/components/DropdownComponent';
import ButtonWithActivityIndicator from '../../src/components/ButtonWithActivityIndicator';


Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  counselor: {
    nuvemCode: 1,
    email: 'rodolfo@gmail.com',
    name: 'Rodolfo',
    userName: 'rodolfo@gmail.com',
    password: 'senha',
    token: 'tokenGenerico',
    profile: {
      cpf: '12312312312',
      phone: '96661234',
      isPresident: false,
      counselorType: 'Titular',
      segment: 'Poder executivo',
      CAE_Type: 'Estadual',
      CAE: 'Distrito Federal',
      CAE_UF: 'AC - Acre',
      CAE_municipalDistrict: 'Brazlândia',
    },
  },
  application: {
    isLoading: false,
    message_erro: '',
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
    const cpfInputComponent = wrapper.find(CpfField).dive().find(TextInput);
    expect(wrapper.state().profile.cpf).toEqual('');
    cpfInputComponent.simulate('ChangeText', '11111111111');
    expect(wrapper.state().profile.cpf).toEqual('11111111111');
  });

  it('should change state when the text of name input component changes', () => {
    const nameInputComponent = wrapper.find(NameField).dive().find(TextInput);
    expect(wrapper.state('name')).toEqual('');
    nameInputComponent.simulate('ChangeText', 'test');
    expect(wrapper.state('name')).toEqual('test');
  });

  it('should change state when the text of email input component changes', () => {
    const emailInputComponent = wrapper.find(EmailField).dive().find(TextInput);
    expect(wrapper.state('email')).toEqual('');
    emailInputComponent.simulate('ChangeText', 'test5@test.com');
    expect(wrapper.state('email')).toEqual('test5@test.com');
  });

  it('should change state when the text of password input component changes', () => {
    const passwordInputComponent = wrapper.find(PasswordField).at(0).dive().find(TextInput);
    expect(wrapper.state('password')).toEqual('');
    passwordInputComponent.simulate('ChangeText', 'senhas');
    expect(wrapper.state('password')).toEqual('senhas');
  });

  it('should change state when the text of confirm password input component changes', () => {
    const confirmPasswordInputComponent = wrapper.find(PasswordField).at(1).dive().find(TextInput);
    expect(wrapper.state('passwordCompared')).toEqual('');
    confirmPasswordInputComponent.simulate('ChangeText', 'senhas');
    expect(wrapper.state('passwordCompared')).toEqual('senhas');
  });

  it('should change state when the text of phone input component changes', () => {
    const phoneInputComponent = wrapper.find(PhoneField).dive().find(TextInput);
    expect(wrapper.state().profile.phone).toEqual('');
    phoneInputComponent.simulate('ChangeText', '555555555');
    expect(wrapper.state().profile.phone).toEqual('555555555');
  });

  it('should change state when the text of isPresident input component changes', () => {
    const isPresidentInputComponent = wrapper.find(DropdownComponent).at(0).dive().find(Picker);
    expect(wrapper.state().profile.isPresident).toEqual('');
    isPresidentInputComponent.simulate('valueChange', false);
    expect(wrapper.state().profile.isPresident).toEqual(false);
  });

  it('should change state when the text of counselorType input component changes', () => {
    const counselorTypeInputComponent = wrapper.find(DropdownComponent).at(1).dive().find(Picker);
    expect(wrapper.state().profile.counselorType).toEqual('');
    counselorTypeInputComponent.simulate('valueChange', 'Suplente');
    expect(wrapper.state().profile.counselorType).toEqual('Suplente');
  });

  it('should change state when the text of segment input component changes', () => {
    const segmentInputComponent = wrapper.find(DropdownComponent).at(2).dive().find(Picker);
    expect(wrapper.state().profile.segment).toEqual('');
    segmentInputComponent.simulate('valueChange', 'Pais de alunos');
    expect(wrapper.state().profile.segment).toEqual('Pais de alunos');
  });

  it('should change state when the text of CAE_Type input component changes', () => {
    const caeTypeInputComponent = wrapper.find(DropdownComponent).at(3).dive().find(Picker);
    expect(wrapper.state().profile.CAE_Type).toEqual('');
    caeTypeInputComponent.simulate('valueChange', 'Estadual');
    expect(wrapper.state().profile.CAE_Type).toEqual('Estadual');
  });

  it('should change state when the text of UF input component changes', () => {
    const UFInputComponent = wrapper.find(DropdownComponent).at(4).dive().find(Picker);
    UFInputComponent.simulate('valueChange', 'DF - Distrito Federal');
    expect(wrapper.state().profile.CAE_UF).toEqual('DF - Distrito Federal');
  });
});

describe('Testing RegisterScreen On pressed buttons', () => {
  it('Test if createUser button is pressed', () => {
    const asyncRegisterCounselor = (state) => {
      expect(state.nuvemCode).toEqual(1);
      expect(state.email).toEqual('Conselheiro@email.com');
      expect(state.name).toEqual('Conselheiro');
      expect(state.userName).toEqual('Conselheiro@email.com');
      expect(state.password).toEqual('senha');
      expect(state.token).toEqual('tokenGenerico');
      expect(state.profile.cpf).toEqual('33333333333');
      expect(state.profile.phone).toEqual('987654321');
      expect(state.profile.isPresident).toEqual(false);
      expect(state.profile.segment).toEqual('Pais de alunos');
      expect(state.profile.CAE_Type).toEqual('Estadual');
      expect(state.profile.CAE_UF).toEqual('DF - Distrito Federal');
      expect(state.profile.CAE_municipalDistrict).toEqual('Brasília');
      expect(state.profile.CAE).toEqual('DF');
    };

    const wrapper = shallow(
      <RegisterScreen
        asyncRegisterCounselor={asyncRegisterCounselor}
      />,
    );

    wrapper.setState({
      nuvemCode: 1,
      email: 'Conselheiro@email.com',
      name: 'Conselheiro',
      userName: 'Conselheiro@email.com',
      password: 'senha',
      token: 'tokenGenerico',
      profile: {
        cpf: '33333333333',
        phone: '987654321',
        isPresident: false,
        segment: 'Pais de alunos',
        CAE_Type: 'Estadual',
        CAE_UF: 'DF - Distrito Federal',
        CAE_municipalDistrict: 'Brasília',
        CAE: 'DF',
      },
    });

    const touch = wrapper.find(ButtonWithActivityIndicator).dive().find(TouchableOpacity);
    expect(touch.length).toEqual(1);
    touch.simulate('press');
  });

  it('Test if loading spinning exists', () => {
    const myProps = {
      isLoading: true,
    };

    const wrapper = shallow(<RegisterScreen {...myProps} />);

    const buttonAndIndicator = wrapper.find(ButtonWithActivityIndicator).dive();

    expect(buttonAndIndicator.find(ActivityIndicator).length).toEqual(1);
  });

  it('Test if loading spinning does not exist', () => {
    const wrapper = shallow(<RegisterScreen {...initialState.application} />);

    const buttonAndIndicator = wrapper.find(ButtonWithActivityIndicator).dive();

    expect(buttonAndIndicator.find(ActivityIndicator).length).toEqual(0);
  });
});
