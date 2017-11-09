import 'react-native';
import { createSerializer } from 'enzyme-to-json';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SchoolData from '../../src/components/SchoolData';

expect.addSnapshotSerializer(createSerializer());
Enzyme.configure({ adapter: new Adapter() });

const props = {
  school: {
    schoolName: 'Escola Teste',
    schoolEmail: 'teste@teste.com',
    schoolPhone: '9999999999',
  },
};

describe('Testing SchoolData component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SchoolData />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Render props', () => {
    const wrapper = shallow(
      <SchoolData {...props} />,
    );
    expect(wrapper.prop('school')).toMatchSnapshot(props.school);
  });
});
