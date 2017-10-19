import { modifyCPF, modifyPassword, setCounselor } from '../../src/actions/counselorActions';
import { MODIFY_CPF, MODIFY_PASSWORD, SET_COUNSELOR } from '../../src/actions/types';

describe('Testing counselorActions', () => {
  it('Testing modify CPF', () => {
    let actionReturn = modifyCPF();

    expect(actionReturn.payload).not.toBe(11111111111);
    expect(actionReturn.type).toBe(MODIFY_CPF);

    actionReturn = modifyCPF(11111111111);

    expect(actionReturn.payload).toBe(11111111111);
    expect(actionReturn.type).toBe(MODIFY_CPF);
  });

  it('Testing modify Password', () => {
    let actionReturn = modifyPassword();

    expect(actionReturn.payload).not.toBe('naoeasenha123');
    expect(actionReturn.type).toBe(MODIFY_PASSWORD);

    actionReturn = modifyPassword('naoeasenha123');

    expect(actionReturn.payload).toBe('naoeasenha123');
    expect(actionReturn.type).toBe(MODIFY_PASSWORD);
  });

  it('Testing set Counselor', () => {
    let actionReturn = setCounselor();

    const counselor = {
      CPF: 11111111111,
    };

    expect(actionReturn.counselor).not.toBe(counselor);
    expect(actionReturn.type).toBe(SET_COUNSELOR);

    actionReturn = setCounselor(counselor);

    expect(actionReturn.counselor).toBe(counselor);
    expect(actionReturn.counselor.CPF).toBe(counselor.CPF);
    expect(actionReturn.type).toBe(SET_COUNSELOR);
  });

  it('Testing Loading', () => {

  });

  it('Testing login success', () => {


  });

  it('Testing login failure', () => {

  });
});
