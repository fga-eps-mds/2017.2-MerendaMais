import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import RegisterScreenContainer from '../../src/Containers/RegisterScreenContainer';


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
      segment: 'Titular',
      CAE_Type: 'Estadual',
      CAE: 'Distrito Federal',
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
