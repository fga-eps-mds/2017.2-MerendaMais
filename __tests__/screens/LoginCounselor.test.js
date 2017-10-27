import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import LoginCounselorContainer from '../../src/Containers/LoginCounselorContainer';

Enzyme.configure({ adapter: new Adapter() });


const mockStore = configureStore();

const initialState = {
  counselor: {
    cpf: '11111111111',
    message_erro: '',
    isLoading: false,
  },
};

const store = mockStore(initialState);

describe('Testing LoginCounselorContainer', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <LoginCounselorContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
