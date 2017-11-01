import { resetList, setList } from '../../src/actions/listActions';
import { SET_LIST_COUNSELOR_GROUP, RESET_LIST } from '../../src/actions/types';

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
});
