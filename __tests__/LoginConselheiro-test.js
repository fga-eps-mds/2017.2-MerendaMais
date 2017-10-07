import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
Enzyme.configure({ adapter: new Adapter() });

// imported as a connected component!
import LoginConselheiro from '../src/screens/LoginConselheiro';

const mockStore = configureStore();

const initialState = {
    preferences: {
        id: 0,
        token:'',
        url: '',
        cpf: '',
        email: '',
        phone: '',
        isPresident: false,
        segment: '',
        name: '',
        password: '',
        CAE_type: '',
        CAE: '',
        isLoading: false,
        message_erro: '',
        token:''
    },
};

const store = mockStore(initialState);

describe('Testing LoginConselheiro', () => {
    it('renders as expected', () => {
        const wrapper = shallow(
            <LoginConselheiro />,
            { context: { store } },
        ).dive();
        expect(wrapper).toMatchSnapshot();
    });
});
