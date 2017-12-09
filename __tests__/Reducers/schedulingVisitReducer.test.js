import scheduleVisitReducer from '../../src/Reducers/scheduleVisitReducer';
import initialState from '../../src/Reducers/initialState';
import { SET_CURRENT_INSPECTION } from '../../src/actions/types';

describe('Testing schedulingVisitReducer', () => {
  it('sets currentVisit', () => {
    let visit = { ...initialState.scheduleVisit };

    const receivedVisit = {
      codConteudoPost: 0,
      codPostagem: 0,
      content: {
        agentEmail: 'email@email.com',
        codSchool: 0,
        date: '0-0-0000',
        invitedAgent: false,
        schoolName: 'Nome da escola',
        time: '00:00',
        visitListOfInvitees: {},
      },
    };

    expect(visit.currentVisit).not.toEqual(receivedVisit);

    visit = scheduleVisitReducer(visit, {
      type: SET_CURRENT_INSPECTION,
      payload: receivedVisit,
    });

    expect(visit.currentVisit).toEqual(receivedVisit);
  });
  it('Undefined action sended', () => {
    let visit = { ...initialState.scheduleVisit };

    expect(visit.currentVisit).toEqual({});

    const sendedVisit = visit;

    const action = undefined;

    expect(action).toBeUndefined();

    visit = scheduleVisitReducer(visit, action);

    expect(visit).toEqual(sendedVisit);
  });
});
