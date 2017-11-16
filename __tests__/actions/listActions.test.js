import { resetList, setList, setNewLists } from '../../src/actions/listActions';
import { SET_LIST_COUNSELOR_GROUP, RESET_LIST, SET_NEW_LISTS } from '../../src/actions/types';

describe('Testing listActions', () => {
  it('Testing Set a List of Counselors', () => {
    const counselorOne = {
      name: 'Carol',
      cpf: '45863456722',
      phone: '11947364863',
    };

    const actionReturn = setList(counselorOne);

    const counselorTwo = {
      name: 'Lucas',
      cpf: '38564198472',
      phone: '61993645382',
    };

    expect(actionReturn.payload).not.toEqual(counselorTwo);
    expect(actionReturn.payload).toEqual(counselorOne);
    expect(actionReturn.type).toEqual(SET_LIST_COUNSELOR_GROUP);
  });

  it('Testing erase list', () => {
    const actionReturn = resetList();

    expect(actionReturn.type).toEqual(RESET_LIST);
  });

  it('Testing set new lists', () => {
    const newList1 = {
      listOfInviteesWithCounselorInformations: {
        6122: {
          cpf: 11111111111,
          name: 'Lucas Penido Antunes',
          nuvemCode: 6122,
          phone: 11111111111,
        },
      },
      listOfInvitees: {
        6122: {
          confirmed: false,
          nuvemCode: 6122,
        },
      },
    };

    const newList2 = {
      listOfInviteesWithCounselorInformations: {
        6201: {
          cpf: '00000000000',
          name: 'Kamilla Costa Souzaa',
          nuvemCode: 6201,
          phone: 99999999999,
        },
      },
      listOfInvitees: {
        6201: {
          confirmed: false,
          nuvemCode: 6201,
        },
      },
    };

    const actionReturn = setNewLists(newList1);

    expect(actionReturn.payload).not.toEqual(newList2);

    expect(actionReturn.payload).toEqual(newList1);
    expect(actionReturn.type).toEqual(SET_NEW_LISTS);
  });
});
