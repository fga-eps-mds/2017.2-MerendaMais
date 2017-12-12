import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/listActions';
import * as types from '../../src/actions/types';
import * as auxiliary from '../../src/actions/auxiliary/getCounselorFromGroupAuxiliary';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Testing listActions', () => {
  it('Testing Set a List of Pending Schedule', () => {
    let actionReturn = actions.setPendingScheduleList();

    const firstPendingSchedule = {
      firstSchedule: {
        invitedAgent: false,
        agentEmail: '',
        codSchool: 10101010,
        schoolName: 'FGA',
        date: '13-12-2017',
        time: '16:00',
        visitListOfInvitees: {
          1010: {
            confirmed: true,
            nuvemCode: 1010,
          },
        },
      },
    };

    expect(actionReturn.payload).not.toBe(firstPendingSchedule);
    expect(actionReturn.type).toBe(types.SET_PENDING_SCHEDULE_LIST);

    actionReturn = actions.setPendingScheduleList(firstPendingSchedule);

    expect(actionReturn.payload).toBe(firstPendingSchedule);
    expect(actionReturn.type).toBe(types.SET_PENDING_SCHEDULE_LIST);
  });

  it('Testing Set a List of Expired Schedule', () => {
    let actionReturn = actions.setExpiredScheduleList();

    const firstExpiredSchedule = {
      firstSchedule: {
        invitedAgent: false,
        agentEmail: '',
        codSchool: 10101010,
        schoolName: 'FGA',
        date: '13-12-2017',
        time: '16:00',
        visitListOfInvitees: {
          1010: {
            confirmed: true,
            nuvemCode: 1010,
          },
        },
      },
    };

    expect(actionReturn.payload).not.toBe(firstExpiredSchedule);
    expect(actionReturn.type).toBe(types.SET_EXPIRED_SCHEDULE_LIST);

    actionReturn = actions.setExpiredScheduleList(firstExpiredSchedule);

    expect(actionReturn.payload).toBe(firstExpiredSchedule);
    expect(actionReturn.type).toBe(types.SET_EXPIRED_SCHEDULE_LIST);
  });

  it('Testing Set a List of Already Inspectioned Schedule', () => {
    let actionReturn = actions.setAlreadyInspectionedScheduleList();

    const firstExpiredSchedule = {
      firstSchedule: {
        invitedAgent: false,
        agentEmail: '',
        codSchool: 10101010,
        schoolName: 'FGA',
        date: '13-12-2017',
        time: '16:00',
        visitListOfInvitees: {
          1010: {
            confirmed: true,
            nuvemCode: 1010,
          },
        },
      },
    };

    expect(actionReturn.payload).not.toBe(firstExpiredSchedule);
    expect(actionReturn.type).toBe(types.SET_ALREADY_INPECTIONED_SCHEDULE_LIST);

    actionReturn = actions.setAlreadyInspectionedScheduleList(firstExpiredSchedule);

    expect(actionReturn.payload).toBe(firstExpiredSchedule);
    expect(actionReturn.type).toBe(types.SET_ALREADY_INPECTIONED_SCHEDULE_LIST);
  });

  it('Testing Set a List of Counselors', () => {
    const counselorOne = {
      name: 'Carol',
      cpf: '45863456722',
      phone: '11947364863',
    };

    const actionReturn = actions.setList(counselorOne);

    const counselorTwo = {
      name: 'Lucas',
      cpf: '38564198472',
      phone: '61993645382',
    };

    expect(actionReturn.payload).not.toEqual(counselorTwo);
    expect(actionReturn.payload).toEqual(counselorOne);
    expect(actionReturn.type).toEqual(types.SET_LIST_COUNSELOR_GROUP);
  });

  it('Testing erase list', () => {
    const actionReturn = actions.resetList();

    expect(actionReturn.type).toEqual(types.RESET_LIST);
  });

  it('Testing set new lists', () => {
    const newList1 = {
      visitListOfInviteesWithCounselorInformations: {
        6122: {
          cpf: 11111111111,
          name: 'Lucas Penido Antunes',
          nuvemCode: 6122,
          phone: 11111111111,
        },
      },
      visitListOfInvitees: {
        6122: {
          confirmed: false,
          nuvemCode: 6122,
        },
      },
    };

    const newList2 = {
      visitListOfInviteesWithCounselorInformations: {
        6201: {
          cpf: '00000000000',
          name: 'Kamilla Costa Souzaa',
          nuvemCode: 6201,
          phone: 99999999999,
        },
      },
      visitListOfInvitees: {
        6201: {
          confirmed: false,
          nuvemCode: 6201,
        },
      },
    };

    const actionReturn = actions.setVisitNewLists(newList1);

    expect(actionReturn.payload).not.toEqual(newList2);

    expect(actionReturn.payload).toEqual(newList1);
    expect(actionReturn.type).toEqual(types.SET_VISIT_NEW_LISTS);
  });
});

describe('Testing asyncGetCounselorFromGroup action', () => {
  afterEach(() => {
    auxiliary.getCounselor.mockClear();
    auxiliary.getCounselorFromGroup.mockClear();
    auxiliary.getCounselorProfile.mockClear();
    auxiliary.getGroup.mockClear();
  });

  it('On sucess', async () => {
    auxiliary.getCounselor = jest.fn(() => Promise.resolve([[], []]));
    auxiliary.getCounselorFromGroup = jest.fn(() => Promise.resolve([[], []]));
    auxiliary.getCounselorProfile = jest.fn(
      () => Promise.resolve({ profile: { cpf: 22222222222 } }));
    auxiliary.getGroup = jest.fn(() => Promise.resolve());

    const store = mockStore({});
    await store.dispatch(actions.asyncGetCounselorFromGroup('CAE', 11111111111));

    expect(auxiliary.getGroup.mock.calls.length).toBe(1);
    expect(auxiliary.getCounselorFromGroup.mock.calls.length).toBe(1);
    expect(auxiliary.getCounselor).toHaveBeenCalled();
    expect(auxiliary.getCounselorProfile).toHaveBeenCalled();
  });

  it('On sucess when counselor is president', async () => {
    auxiliary.getCounselor = jest.fn(() => Promise.resolve([[], []]));
    auxiliary.getCounselorFromGroup = jest.fn(() => Promise.resolve([[], []]));
    auxiliary.getCounselorProfile = jest.fn(
      () => Promise.resolve({ profile: { cpf: 22222222222, presidentChecked: true } }));
    auxiliary.getGroup = jest.fn(() => Promise.resolve());

    const store = mockStore({});
    await store.dispatch(actions.asyncGetCounselorFromGroup('CAE', 11111111111));

    expect(auxiliary.getGroup.mock.calls.length).toBe(1);
    expect(auxiliary.getCounselorFromGroup.mock.calls.length).toBe(1);
    expect(auxiliary.getCounselor).toHaveBeenCalled();
    expect(auxiliary.getCounselorProfile).toHaveBeenCalled();
  });

  it('On failure', () => {

  });
});
