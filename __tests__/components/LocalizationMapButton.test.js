import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import LocalizationMapButton from '../../src/components/LocalizationMapButton';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  counselor: {
    name: 'testCounselor',
    email: 'test@test.com',
    token: 'abc',
    nuvemCode: 123,
  },
  Latitude: 0,
  Longitude: 0,
  text: 'Agendamento',
  goToMaps: () => ({}),
};

const store = mockStore(initialState);

describe('Testing LocalizationMapButton Component', () => {
  it('Test LocalizationButton Rendering', () => {
    const wrapper = shallow(<LocalizationMapButton {...initialState} />, { context: { store } });
    expect(wrapper).toMatchSnapshot();
  });
});
