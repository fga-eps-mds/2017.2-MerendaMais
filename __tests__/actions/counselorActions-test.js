import { modifyCPF, modifyPassword, setCounselor, loading, loginSuccess, loginFail } from '../../src/actions/counselorActions';
import { MODIFY_CPF, MODIFY_PASSWORD, SET_COUNSELOR, LOADING, LOGIN_SUCCESS, LOGIN_FAIL } from '../../src/actions/types';

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
    expect(actionReturn.type).toBe(SET_COUNSELOR);
  });

  it('Testing Loading', () => {
    const actionReturn = loading();

    expect(actionReturn.type).toBe(LOADING);
  });

  it('Testing login success', () => {
    let actionReturn = loginSuccess();

    const counselor = {
      CPF: 11111111111,
    };

    expect(actionReturn.counselor).not.toBe(counselor);
    expect(actionReturn.type).toBe(LOGIN_SUCCESS);

    actionReturn = loginSuccess(counselor);

    expect(actionReturn.counselor).toBe(counselor);
    expect(actionReturn.type).toBe(LOGIN_SUCCESS);
  });

  it('Testing login failure', () => {
    const actionReturn = loginFail();

    expect(actionReturn.type).toBe(LOGIN_FAIL);
  });
});
