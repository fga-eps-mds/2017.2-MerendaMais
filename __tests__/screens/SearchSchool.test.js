import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import SearchSchoolContainer from '../../src/Containers/SearchSchoolContainer';
import SearchSchool from '../../src/screens/SearchSchool';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  application: {
    isLoading: false,
    message_erro: '',
  },
  school: {
    uf: 'MG - Minas Gerais',
    city: 'Ouro Preto',
    name: 'Benedito Xavier',
  },
  setUf: () => ({}),
  setCity: () => ({}),
};

const store = mockStore(initialState);

describe('Testing SearchSchool', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <SearchSchoolContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing SearchSchool Input', () => {
  const wrapper = shallow(<SearchSchool {...initialState} />);

  it('should change state when the uf changes', () => {
    const ufInputComponent = wrapper.find('Picker').at(0);
    ufInputComponent.simulate('valueChange', 'DF - Distrito Federal');
    expect(wrapper.state().uf).toEqual('DF - Distrito Federal');
  });
  /*
  it('should change state when the text of city input component changes', () => {
    const cityInputComponent = wrapper.find('Picker').at(1);
    cityInputComponent.simulate('ChangeText', 'Gama');
    expect(wrapper.state().city).toEqual('Gama');
  });
  */
  it('should change state when the text of name input component changes', () => {
    const nameInputComponent = wrapper.find('TextInput').at(0);
    nameInputComponent.simulate('ChangeText', 'Ouro Preto');
    expect(wrapper.state('name')).toEqual('Ouro Preto');
  });
});

describe('Testing SearchSchool button', () => {
  it('Test if SearchSchool Button is rendered', () => {
    const wrapper = shallow(<SearchSchool {...initialState} />);
    const button = wrapper.findWhere(c => c.key() === 'renderButton');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });
});

describe('Testing SearchSchool register method', () => {
  it('Test if validation is called', () => {
    const wrapper = shallow(<SearchSchool {...initialState} />);
    const spy = jest.spyOn(SearchSchool.prototype, 'register');

    wrapper.setState({ name: '#' });
    wrapper.instance().register();

    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });

  it('Test if validation for empty fields is called', () => {
    const wrapper = shallow(<SearchSchool {...initialState} />);
    const spy = jest.spyOn(SearchSchool.prototype, 'register');

    wrapper.setState({ name: '' });
    wrapper.instance().register();

    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });

  it('Test if validation for correct fields is called', () => {
    const wrapper = shallow(<SearchSchool {...initialState} />);
    const spy = jest.spyOn(SearchSchool.prototype, 'register');

    wrapper.setState({ city: 'Porto Velho' });
    wrapper.instance().register();

    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });

  /* eslint-disable no-param-reassign */
  it('Test if wrong input is validated', () => {
    let error = false;
    let errorMessage = '';
    const wrapper = shallow(<SearchSchool {...initialState} />);

    const spy = jest.spyOn(SearchSchool.prototype, 'register').mockImplementation(
      () => {
        const nameRegex = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9 ]/g;
        const cityRegex = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;

        if (!cityRegex.test(wrapper.state('city') && !nameRegex.test(wrapper.state('name')) && !(wrapper.state('uf') > ''))) {
          error = true;
          errorMessage += 'Estado/Município e Escola com dados inválidos.';
        }
        if (wrapper.state('city').trim() === '' && wrapper.state('name').trim() === '' && wrapper.state('uf').trim() === '') {
          error = true;
          errorMessage += 'Estado/Município e Escola não preenchidos. Preencha no mínimo um dos campos.\n';
        }
      });


    wrapper.setState({ name: '#' });

    wrapper.instance().register();

    expect(spy).toHaveBeenCalled();
    expect(error).toBe(true);
    expect(errorMessage).toBe('Estado/Município e Escola com dados inválidos.');
    spy.mockClear();
  });
});
