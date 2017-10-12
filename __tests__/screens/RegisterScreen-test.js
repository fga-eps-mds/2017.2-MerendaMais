import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
Enzyme.configure({ adapter: new Adapter() });

// imported as a connected component!
import RegisterScreen from '../../src/screens/RegisterScreen';

const mockStore = configureStore();

const initialState = {
    counselor: {
        cpf: '55555555555',
        name: 'test',
        email:'test5@test.com',
        phone: '555555555',
        isPresident:false,
        password: "55555",
        segment: 'test',
        CAE_Type: 'test',
        CAE: 'test'
    },
};

const store = mockStore(initialState);

describe('Testing RegisterScreen', () => {
    it('renders as expected', () => {
        const wrapper = shallow(
            <RegisterScreen />,
            { context: { store } },
        ).dive();
        expect(wrapper).toMatchSnapshot();
    });
});
