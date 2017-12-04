import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import configureStore from 'redux-mock-store';
import PrincipalStartInspection from '../../src/screens/startInspection/PrincipalStartInspection';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing StartPendingInspection Screen', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <PrincipalStartInspection />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
