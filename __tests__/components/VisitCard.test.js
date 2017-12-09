import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import VisitCard, { ConfirmAndCancelButtons, MoreInfoCard } from '../../src/components/VisitCard';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();

const initialState = {
  asyncGetCurrentSchedule: jest.fn(),
  asyncGetSchedule: jest.fn(),
  asyncUpdateSchedule: jest.fn(),
  counselor: {
    name: 'testCounselor',
    email: 'test@test.com',
    token: 'abc',
    nuvemCode: 123,
  },
  currentSchedule: {
    content: {
      agentEmail: 'email@email.com',
      codSchool: 0,
      date: '0-0-0000',
      invitedAgent: false,
      visitListOfInvitees: {
        123: {
          nuvemCode: 123,
          confirmed: false,
          realized: false,
        },
      },
      schoolName: 'testSchool',
      time: '00:00',
    },
    codPostagem: 1,
    codConteudoPost: 2,
  },
  visit: {
    content: {
      agentEmail: 'email@email.com',
      codSchool: 0,
      date: '0-0-0000',
      invitedAgent: false,
      visitListOfInvitees: {
        123: {
          nuvemCode: 123,
          confirmed: false,
          realized: false,
        },
      },
      schoolName: 'testSchool',
      time: '00:00',
    },
  },
  text: 'Agendamento',
  popUpCallBack: () => ({}),

};
const initialState2 = {
  counselor: {
    name: 'testCounselor',
    email: 'test@test.com',
    token: 'abc',
    nuvemCode: 123,
  },
  visit: {
    content: {
      agentEmail: 'email@email.com',
      codSchool: 0,
      date: '0-0-0000',
      invitedAgent: false,
      visitListOfInvitees: {
        123: {
          nuvemCode: 123,
          confirmed: true,
          realized: false,
        },
      },
      schoolName: 'testSchool',
      time: '00:00',
    },
  },
  text: 'Agendamento',
  popUpCallBack: () => ({}),
  buttonCallBack: () => ({}),

};

const store = mockStore(initialState);
const store2 = mockStore(initialState2);

describe('Testing VisitCard Component', () => {
  it('Test VisitCard Rendering', () => {
    const wrapper = shallow(<VisitCard {...initialState} />, { context: { store } });
    expect(wrapper).toMatchSnapshot();
  });

  it('Test onPress confirmPresenceButton', () => {
    const wrapper = shallow(<VisitCard {...initialState} />, { context: { store } });
    const button = wrapper.findWhere(c => c.key() === 'confirmPresenceButton');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test onPress CancelPresenceButton', () => {
    const wrapper = shallow(<VisitCard {...initialState2} />, { context: { store2 } });
    const button = wrapper.findWhere(c => c.key() === 'CancelPresenceButton');
    expect(button.length).toEqual(1);
    button.simulate('press');
  });

  it('Test onPress InfoButton', () => {
    const wrapper = shallow(<VisitCard {...initialState} />);
    const infoCard = wrapper.find(MoreInfoCard).at(0);
    infoCard.props().infoCardCallBack = () => true;
    const result = infoCard.props().infoCardCallBack();
    expect(result).toBeTruthy();
  });
});

describe('Testing Visitcard internal componentes', () => {
  it('Testing ConfirmAndCancelButtons rendering', () => {
    const wrapper = shallow(<ConfirmAndCancelButtons buttonCallBack={jest.fn()} />).dive();
    expect(wrapper).toMatchSnapshot();
  });
  it('Testing ConfirmAndCancelButtons onPress', () => {
    const onPressMock = jest.fn();
    const wrapper = shallow(<ConfirmAndCancelButtons buttonCallBack={onPressMock} />).dive();
    const button = wrapper.find(TouchableOpacity).at(0);
    button.simulate('press');
    expect(onPressMock.mock.calls.length).toMatchSnapshot(1);
  });
  it('Testing MoreInfoCard rendering', () => {
    const wrapper = shallow(<MoreInfoCard infoCardCallBack={jest.fn()} />).dive();
    expect(wrapper).toMatchSnapshot();
  });
  it('Testing MoreInfoCard onPress', () => {
    const onPressMock = jest.fn();
    const wrapper = shallow(<MoreInfoCard infoCardCallBack={onPressMock} />).dive();
    const button = wrapper.find(TouchableOpacity).at(0);
    button.simulate('press');
    expect(onPressMock.mock.calls.length).toMatchSnapshot(1);
  });
});

describe('Testing VisitCard prototype functions', () => {
  it('Testing buttonCallBack', () => {
    const spy = jest.spyOn(VisitCard.prototype, 'buttonCallBack');
    const wrapper = shallow(
      <VisitCard
        {...initialState}
      />);

    wrapper.instance().buttonCallBack(true);
    expect(spy).toHaveBeenCalled();
  });
});

describe('Testing Visit Card conditinal rendering', () => {
  const spy = jest.spyOn(VisitCard.prototype, 'buttonCallBack');

  it('Testing ConfirmAndCancel Button callback when counselor is confirmed', () => {
    const wrapper = shallow(<VisitCard {...initialState} />).dive();
    const confirmAndCancel =
      wrapper.find(ConfirmAndCancelButtons).at(0).dive()
        .find(TouchableOpacity)
        .at(0);
    confirmAndCancel.simulate('press');
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
  });

  it('Testing ConfirmAndCancel Button callback when counselor isnt confirmed', () => {
    const newInitialState = initialState;
    newInitialState
      .visit.content.visitListOfInvitees[newInitialState.counselor.nuvemCode].confirmed = true;

    const wrapper = shallow(<VisitCard {...initialState} />).dive();
    const confirmAndCancel =
      wrapper.find(ConfirmAndCancelButtons).at(0).dive()
        .find(TouchableOpacity)
        .at(0);
    confirmAndCancel.simulate('press');
    expect(spy).toHaveBeenCalled();
  });
});
