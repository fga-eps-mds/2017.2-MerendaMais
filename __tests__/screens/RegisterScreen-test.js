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
  // let wrapper;
  // beforeEach(() => {
  const wrapper = shallow(<RegisterScreen />);
  // });

  it('should change state when the text of cpf input component changes', () => {
    const cpfInputComponent = wrapper.find('TextInput').at(0);
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

  it('should change state when the text of isPresident input component changes', () => {
    const isPresidentInputComponent = wrapper.find('Picker').at(0);
    isPresidentInputComponent.simulate('valueChange', false);
    expect(wrapper.state('isPresident')).toEqual(false);
  });

  it('should change state when the text of segment input component changes', () => {
    const segmentInputComponent = wrapper.find('Picker').at(1);
    segmentInputComponent.simulate('valueChange', 'Suplente');
    expect(wrapper.state('segment')).toEqual('Suplente');
  });

  it('should change state when the text of CAE_Type input component changes', () => {
    const caeTypeInputComponent = wrapper.find('TextInput').at(4);
    caeTypeInputComponent.simulate('ChangeText', 'Estadual');
    expect(wrapper.state('CAE_Type')).toEqual('Estadual');
  });

  it('should change state when the text of CAE input component changes', () => {
    const CAEInputComponent = wrapper.find('TextInput').at(5);
    CAEInputComponent.simulate('ChangeText', 'DF');
    expect(wrapper.state('CAE')).toEqual('DF');
  });
});

describe('Testing RegisterScreen On pressed buttons', () => {
  it('Test if createUser button is pressed', () => {
    const createUser = (state) => {
      expect(state.cpf).toEqual('33333333333')
      expect(state.name).toEqual('Conselheiro')
      expect(state.email).toEqual('Conselheiro@email.com')
      expect(state.phone).toEqual('987654321')
      expect(state.isPresident).toEqual(false)
      expect(state.segment).toEqual('Suplente')
      expect(state.CAE_Type).toEqual('Estadual')
      expect(state.CAE).toEqual('DF')
    }

    const wrapper = shallow(
      <RegisterScreen
        createUser={createUser}
      />,
    );
    wrapper.setState({
      cpf: '33333333333',
      name: 'Conselheiro',
      email: 'Conselheiro@email.com',
      phone: '987654321',
      isPresident: false,
      segment: 'Suplente',
      CAE_Type: 'Estadual',
      CAE: 'DF',
    });
    const touch = wrapper.findWhere(c => c.key() === 'userCreation');
    expect(touch.length).toEqual(1);
    touch.simulate('press')
  });
});
