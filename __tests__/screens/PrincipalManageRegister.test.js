import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import configureStore from 'redux-mock-store';
import PrincipalManageRegister from '../../src/screens/manageCounselors/PrincipalManageRegister';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing PrincipalManageRegister Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <PrincipalManageRegister />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
