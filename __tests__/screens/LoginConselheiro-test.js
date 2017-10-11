import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
Enzyme.configure({ adapter: new Adapter() });

// imported as a connected component!
import LoginConselheiro from '../../src/screens/LoginConselheiro';

const mockStore = configureStore();

const initialState = {
    counselor: {
        cpf: '11111111111',
        message_erro: '',
        isLoading: false
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
