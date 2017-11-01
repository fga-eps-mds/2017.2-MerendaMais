import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// imported as a connected component!
import SchedulingVisitContainer from '../../src/Containers/SchedulingVisitContainer';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  counselor: {
    nuvemCode: 1,
    token: 'tokenGenerico',
  },
  visit: {
    codSchool: 32,
    date: '31-12-2017',
    time: '18:30',
  },
};

const store = mockStore(initialState);

describe('Testing SchedulingVisit', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <SchedulingVisitContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
