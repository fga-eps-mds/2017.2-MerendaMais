import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
Enzyme.configure({ adapter: new Adapter() });

// imported as a connected component!
import LoginPresidente from '../../src/screens/LoginPresidente';

const mockStore = configureStore();

const initialState = {
    counselor: {
        cpf: '11111111111',
        password: '01010110',
        message_erro: '',
        isLoading: false
    },
};

const store = mockStore(initialState);

describe('Testing LoginPresidente', () => {
    it('renders as expected', () => {
        const wrapper = shallow(
            <LoginPresidente />,
            { context: { store } },
        ).dive();
        expect(wrapper).toMatchSnapshot();
    });
});
