import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import SchoolInfoContainer from '../../src/Containers/SchoolInfoContainer';
import SchoolInfoScreen from '../../src/screens/SchoolInfoScreen';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  application: {
    isLoading: false,
    message_erro: '',
  },
  school: {
    schoolCode: 123,
    schoolName: 'Teste',
    schoolPhone: '11111111111',
    schoolEmail: 'teste@teste.com',
    schoolLat: '',
    schoolLong: '',
    schoolStudents: '1000',
  },
  counselor: {
    profile: {
      CAE: 'Distrito Federal',
    },
  },
};

const store = mockStore(initialState);

describe('Testing SchoolInfoScreen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <SchoolInfoContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing SchoolInfo buttons', () => {
  it('Test if goToMaps Button is rendered', () => {
    const wrapper = shallow(<SchoolInfoScreen {...initialState} />);
    const button = wrapper.findWhere(c => c.key() === 'renderButton');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });
});
