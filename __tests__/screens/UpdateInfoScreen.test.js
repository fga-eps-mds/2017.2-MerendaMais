import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { TextInput, Picker } from 'react-native';
// imported as a connected component!
import UpdateInfoScreenContainer from '../../src/Containers/UpdateInfoScreenContainer';
import UpdateInfoScreen from '../../src/screens/UpdateInfoScreen';
import NameField from '../../src/components/NameField';
import PhoneField from '../../src/components/PhoneField';
import DropdownComponent from '../../src/components/DropdownComponent';


Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  application: {
    isLoading: false,
  },
  counselor: {
    nuvemCode: 1,
    email: 'rodolfo@gmail.com',
    name: 'Rodolfo',
    userName: 'rodolfo@gmail.com',
    password: 'senha',
    token: 'tokenGenerico',
    profile: {
      cpf: '12312312312',
      phone: '61991234567',
      isPresident: false,
      counselorType: 'Titular',
      segment: 'Poder executivo',
      CAE_Type: 'Municipal',
      CAE: 'Rio Branco - AC',
      CAE_UF: 'AC - Acre',
      CAE_municipalDistrict: 'Rio Branco',
    },
  },
};

const asyncAction = {
  asyncEditCounselor: () => ({}),
};

const getUpdateInfoWrapper = () => (
  shallow(
    <UpdateInfoScreen
      {...initialState}
      asyncEditCounselor={asyncAction.asyncEditCounselor}
    />,
  )
);

const checkErrorInValidation = (wrapper, spy) => {
  wrapper.instance().updateInformation();
  expect(spy).toHaveBeenCalled();

  expect(wrapper.state('error')).toEqual(true);

  spy.mockClear();
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
  it('renders as expected with activity Indicator', () => {
    const newInitialState = initialState;
    newInitialState.application.isLoading = true;
    const newStore = mockStore(newInitialState);
    const wrapper = shallow(
      <UpdateInfoScreenContainer />,
      { context: { store: { ...newStore } } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing UpdateInfoScreen Input', () => {
  const wrapper = getUpdateInfoWrapper();

  it('should change state when the text of name input component changes', () => {
    const nameInputComponent = wrapper.find(NameField).dive().find(TextInput);
    expect(wrapper.state('name')).toEqual(initialState.counselor.name);
    nameInputComponent.simulate('ChangeText', 'Maria');
    expect(wrapper.state('name')).toEqual('Maria');
  });

  it('should change state when the text of phone input component changes', () => {
    const phoneInputComponent = wrapper.find(PhoneField).dive().find(TextInput);

    expect(wrapper.state('phone')).toEqual(initialState.counselor.profile.phone);
    phoneInputComponent.simulate('ChangeText', '99999999999');
    expect(wrapper.state('phone')).toEqual('99999999999');
  });

  it('should change state when the choice of counselor type input component changes', () => {
    const counselorTypeInputComponent = wrapper.find(DropdownComponent).at(0).dive().find(Picker);
    expect(wrapper.state('counselorType')).toEqual(initialState.counselor.profile.counselorType);
    counselorTypeInputComponent.simulate('valueChange', 'Suplente');
    expect(wrapper.state('counselorType')).toEqual('Suplente');
  });

  it('should change state when the choice of counselor segment input component changes', () => {
    const segmentInputComponent = wrapper.find(DropdownComponent).at(1).dive().find(Picker);
    expect(wrapper.state('segment')).toEqual(initialState.counselor.profile.segment);
    segmentInputComponent.simulate('valueChange', 'Trabalhadores da Educação');
    expect(wrapper.state('segment')).toEqual('Trabalhadores da Educação');
  });
});

describe('Testing UpdateInfoScreen button', () => {
  it('Test if updateInfo Button is rendered', () => {
    const wrapper = getUpdateInfoWrapper();

    const button = wrapper.findWhere(c => c.key() === 'infoUpdate');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });
});

describe('Testing UpdateInfoScreen updateInformation method', () => {
  const wrapper = getUpdateInfoWrapper();
  const spy = jest.spyOn(UpdateInfoScreen.prototype, 'updateInformation');

  it('Test if validation is called', () => {
    wrapper.instance().updateInformation();

    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });

  it('Test if validation for a empty name input is working', () => {
    wrapper.setState({
      name: '',
      error: false,
    });

    // Here is expected error equal true because a error ocurred on name input.
    checkErrorInValidation(wrapper, spy);
  });

  it('Test if validation for a invalid name input is working', () => {
    wrapper.setState({
      name: '#',
      error: false,
    });

    // Here is expected error equal true because a error ocurred on name input.
    checkErrorInValidation(wrapper, spy);
  });

  it('Test if validation for a invaid phone length input is working', () => {
    wrapper.setState({
      name: 'Rodrigson',
      phone: '123',
      error: false,
    });

    // Here is expected true because a error ocurred on phone input.
    checkErrorInValidation(wrapper, spy);
  });

  it('Test if validation for a invalid phone input is working', () => {
    wrapper.setState({
      name: 'Rodrigson',
      phone: 'Abc#,',
      error: false,
    });

    // Here is expected true because a error ocurred on phone input.
    checkErrorInValidation(wrapper, spy);
  });

  it('Test if validation for a empty counselor type input is working', () => {
    wrapper.setState({
      name: 'Rodrigson',
      phone: '61969696966',
      counselorType: '',
      error: false,
    });

    // Here is expected true because a error ocurred on counselor type input.
    checkErrorInValidation(wrapper, spy);
  });

  it('Test if validation for a empty counselor segment input is working', () => {
    wrapper.setState({
      name: 'Rodrigson',
      phone: '61969696966',
      counselorType: 'Titular',
      segment: '',
      error: false,
    });

    // Here is expected true because a error ocurred on counselor segment input.
    checkErrorInValidation(wrapper, spy);
  });
});
