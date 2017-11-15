import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { TextInput, Picker } from 'react-native';
// imported as a connected component!
import UpdateInfoScreenContainer from '../../src/Containers/UpdateInfoScreenContainer';
import UpdateInfoScreen from '../../src/screens/UpdateInfoScreen';


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
  const wrapper = getUpdateInfoWrapper();

  it('should change state when the text of name input component changes', () => {
    const nameInputComponent = wrapper.find(TextInput).at(0);
    expect(wrapper.state('name')).toEqual(initialState.counselor.name);
    nameInputComponent.simulate('ChangeText', 'Maria');
    expect(wrapper.state('name')).toEqual('Maria');
  });

  it('should change state when the text of phone input component changes', () => {
    const phoneInputComponent = wrapper.find(TextInput).at(1);
    expect(wrapper.state('phone')).toEqual(initialState.counselor.profile.phone);
    phoneInputComponent.simulate('ChangeText', '99999999999');
    expect(wrapper.state('phone')).toEqual('99999999999');
  });

  it('should change state when the choice of counselor type input component changes', () => {
    const counselorTypeInputComponent = wrapper.find(Picker).at(0);
    expect(wrapper.state('counselorType')).toEqual(initialState.counselor.profile.counselorType);
    counselorTypeInputComponent.simulate('valueChange', 'Suplente');
    expect(wrapper.state('counselorType')).toEqual('Suplente');
  });

  it('should change state when the choice of counselor segment input component changes', () => {
    const counselorSegmentInputComponent = wrapper.find(Picker).at(1);
    expect(wrapper.state('segment')).toEqual(initialState.counselor.profile.segment);
    counselorSegmentInputComponent.simulate('valueChange', 'Trabalhadores da Educação');
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

    wrapper.instance().updateInformation();
    expect(spy).toHaveBeenCalled();

    // Here is expected true because a error ocurred in name input.
    expect(wrapper.state('error')).toEqual(true);

    spy.mockClear();
  });

  it('Test if validation for a invalid name input is working', () => {
    wrapper.setState({
      name: '#',
      error: false,
    });

    wrapper.instance().updateInformation();
    expect(spy).toHaveBeenCalled();

    // Here is expected true because a error ocurred in name input.
    expect(wrapper.state('error')).toEqual(true);

    spy.mockClear();
  });
});
