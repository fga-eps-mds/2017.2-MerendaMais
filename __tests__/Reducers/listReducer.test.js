import listReducer from '../../src/Reducers/listReducer';
import initialState from '../../src/Reducers/initialState';
import { SET_LIST_COUNSELOR_GROUP, RESET_LIST } from '../../src/actions/types';

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
