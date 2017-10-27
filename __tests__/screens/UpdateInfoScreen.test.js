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
    nuvemCode: 1,
    email: 'rodolfo@gmail.com',
    name: 'Rodolfo',
    userName: 'rodolfo@gmail.com',
    password: 'senha',
    token: 'tokenGenerico',
    profile: {
      cpf: '12312312312',
      phone: '6196661234',
      isPresident: false,
      segment: 'Titular',
      CAE_Type: 'Estadual',
      CAE: 'Distrito Federal',
    },
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
  const wrapper = shallow(<UpdateInfoScreen {...initialState} />);

  it('should change state when the text of name input component changes', () => {
    const nameInputComponent = wrapper.find('TextInput').at(0);
    nameInputComponent.simulate('ChangeText', 'Maria');
    expect(wrapper.state('name')).toEqual('Maria');
  });

  it('should change state when the text of phone input component changes', () => {
    const phoneInputComponent = wrapper.find('TextInput').at(1);
    phoneInputComponent.simulate('ChangeText', '9999999999');
    expect(wrapper.state('phone')).toEqual('9999999999');
  });
});

describe('Testing UpdateInfoScreen button', () => {
  it('Test if updateInfo Button is rendered', () => {
    const wrapper = shallow(<UpdateInfoScreen {...initialState} />);
    const button = wrapper.findWhere(c => c.key() === 'infoUpdate');
    expect(button.length).toEqual(1);
    // button.simulate('press');
  });
});
