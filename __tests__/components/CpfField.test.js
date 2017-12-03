import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import CpfField from '../../src/components/CpfField';
import { TextInput } from 'react-native';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing CpfField component', () => {
  it('Test if CpfField renders correctly', () => {
    const wrapper = shallow(<CpfField />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Test CpfField callback function', () => {
    const callback = jest.fn();

    const props = {
      callback,
    };

    const wrapper = shallow(<CpfField {...props} />);
    const textInput = wrapper.find(TextInput).at(0);

    textInput.simulate('ChangeText', '1111111111');

    expect(callback.mock.calls.length).toBe(1);
  });
});
