import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import SchoolData from '../../src/components/SchoolData';

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
