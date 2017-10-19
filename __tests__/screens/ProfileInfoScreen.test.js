import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import configureStore from 'redux-mock-store';
import ProfileInfoScreen from '../../src/screens/ProfileInfoScreen';

Enzyme.configure({ adapter: new Adapter() });
// imported as a connected component!

const props = {
  getCounselor: () => null,
  counselor: {
    id: '1',
    name: '',
    cpf: '',
    phone: '',
    email: '',
    segment: '',
    isPresident: false,
    CAE: '',
    CAE_Type: '',
  },
};

describe('Testing ProfileInfoScreen', () => {
  it('Displays charge president if user is president', () => {
    const myProps = { ...props };
    myProps.counselor = {
      ...props.counselor,
      isPresident: true,
    };
    const wrapper = shallow(<ProfileInfoScreen {...myProps} />);

    const foundPresident = wrapper.findWhere(c => c.key() === 'is_president');
    const foundConselour = wrapper.findWhere(c => c.key() === 'is_counselor');

    expect(foundPresident.length).toBe(1);
    expect(foundConselour.length).toBe(0);
  });

  it('Displays charge counselor if the user is counselor', () => {
    const myProps = { ...props, isPresident: false };
    const wrapper = shallow(<ProfileInfoScreen {...myProps} />);

    const foundPresident = wrapper.findWhere(c => c.key() === 'is_president');
    const foundConselour = wrapper.findWhere(c => c.key() === 'is_counselor');

    expect(foundPresident.length).toBe(0);
    expect(foundConselour.length).toBe(1);
  });
});
