import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import SchedulingVisit from '../../src/screens/SchedulingVisit';
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
  school: {
    schoolSelected: true,
  },
};

const store = mockStore(initialState);

jest.mock('react-native-router-flux');

describe('Testing SchedulingVisit', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <SchedulingVisitContainer />,
      { context: { store } },
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Testing SchedulingVisit buttons', () => {
  it('Test if search school button is rendered', () => {
    const wrapper = shallow(<SchedulingVisit {...initialState} />);
    const button = wrapper.findWhere(c => c.key() === 'searchSchoolButton');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });
  it('Test if search counselor button is rendered', () => {
    const wrapper = shallow(<SchedulingVisit {...initialState} />);
    const button = wrapper.findWhere(c => c.key() === 'searchCounselorButton');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });
  it('Test if search agent button is rendered', () => {
    const wrapper = shallow(<SchedulingVisit {...initialState} />);
    const button = wrapper.findWhere(c => c.key() === 'searchAgentButton');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test if schedule button is rendered', () => {
    const asyncSchedulingVisit = (state) => {
      expect(state.nuvemCode).toEqual(1);
      expect(state.token).toEqual('tokenGenerico');
      expect(state.visit.codSchool).toEqual(32);
      expect(state.visit.date).toEqual('31-12-2017');
      expect(state.visit.time).toEqual('18:30');
    };

    const wrapper = shallow(<SchedulingVisit
      {...initialState}
    />);

    wrapper.setState({
      nuvemCode: 1,
      token: 'tokenGenerico',
      visit: {
        codSchool: 32,
        date: '31-12-2017',
        time: '18:30',
      },
    });

    const button = wrapper.findWhere(c => c.key() === 'scheduleButton');
    expect(button.length).toEqual(2);
  });
});

describe('Testing SchedulingVisit DatePickers', () => {
  const wrapper = shallow(<SchedulingVisit {...initialState} />);

  it('Test if date changes when DatePicker changes', () => {
    const datePickerComponent = wrapper.find('DatePicker').at(0);
    datePickerComponent.simulate('dateChange', '31-10-2017');
    expect(wrapper.state().visit.date).toEqual('31-10-2017');
  });
  it('Test if time changes when DatePicker changes', () => {
    const datePickerComponent = wrapper.find('DatePicker').at(1);
    datePickerComponent.simulate('dateChange', '19:50');
    expect(wrapper.state().visit.time).toEqual('19:50');
  });
});
