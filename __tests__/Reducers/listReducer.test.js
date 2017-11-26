import listReducer from '../../src/Reducers/listReducer';
import initialState from '../../src/Reducers/initialState';
import { SET_LIST_COUNSELOR_GROUP, RESET_LIST, SET_VISIT_NEW_LISTS } from '../../src/actions/types';

describe('Testing listReducer', () => {
  it('Set list of counselors and eraser it', () => {
    let list = initialState.list;

    expect(list.listOfCounselorsInAGroup).toEqual([]);

    const counselorOne = {
      name: 'Lucas',
      cpf: '11111111111',
      phone: '61996572348',
    };

    const counselorTwo = {
      name: 'Ernesto Che Guevara',
      cpf: '87652437864',
      phone: '61542378618',
    };

    const counselorThree = {
      name: 'Luiz',
      cpf: '36452798765',
      phone: '746945365',
    };

    const sendedList = {
      counselorOne,
      counselorTwo,
      counselorThree,
    };

    const actionOne = {
      type: SET_LIST_COUNSELOR_GROUP,
      payload: sendedList,
    };

    list = listReducer(list, actionOne);

    expect(list.listOfCounselorsInAGroup[0]).toEqual(sendedList);

    const actionTwo = {
      type: RESET_LIST,
    };

    list = listReducer(list, actionTwo);

    expect(list.listOfCounselorsInAGroup).toEqual([]);
  });

  it('Set new Lists of invitees', () => {
    let list = initialState.list;

    expect(list.visitListOfInviteesWithCounselorInformations).toEqual({});
    expect(list.visitListOfInvitees).toEqual({});
    expect(list.listOfCounselorsInAGroup).toEqual([]);

    const newLists = {
      visitNewListWithInformations: {
        6122: {
          cpf: 11111111111,
          name: 'Lucas Penido Antunes',
          nuvemCode: 6122,
          phone: 11111111111,
        },
        6201: {
          cpf: '00000000000',
          name: 'Kamilla Costa Souzaa',
          nuvemCode: 6201,
          phone: 99999999999,
        },
      },
      visitNewList: {
        6122: {
          confirmed: false,
          nuvemCode: 6122,
        },
        6201: {
          confirmed: false,
          nuvemCode: 6201,
        },
      },
    };

    const action = {
      type: SET_VISIT_NEW_LISTS,
      payload: newLists,
    };

    list = listReducer(list, action);

    expect(list.visitListOfInviteesWithCounselorInformations)
      .toEqual(newLists.visitNewListWithInformations);
    expect(list.visitListOfInvitees).toEqual(newLists.visitNewList);
    expect(list.listOfCounselorsInAGroup).toEqual([]);
  });

  it('Default action type', () => {
    let list = initialState.list;

    expect(list.listOfCounselorsInAGroup).toEqual([]);

    const sendedList = list;

    const action = {
      type: 'DEFAULT_TYPE_TO_ACTION',
      payload: 'DEFAULT_VALUE_TO_ACTION',
    };

    list = listReducer(list, action);

    expect(list).toEqual(sendedList);
  });

  it('Undefined action sended', () => {
    let list = initialState.list;

    expect(list.listOfCounselorsInAGroup).toEqual([]);

    const sendedList = list;

    const action = undefined;

    expect(action).toBeUndefined();

    list = listReducer(list, action);

    expect(list).toEqual(sendedList);
  });
});
