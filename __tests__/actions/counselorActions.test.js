import { setCounselor, setToken, setCounselorEdited } from '../../src/actions/counselorActions';
import { SET_COUNSELOR, SET_TOKEN, SET_COUNSELOR_EDITED } from '../../src/actions/types';

describe('Testing counselorActions', () => {
  it('Testing set Counselor', () => {
    const firstCounselor = {
      name: 'Rodolfo',
    };

    const actionReturn = setCounselor(firstCounselor);

    const secondCounselor = {
      name: 'Mario',
    };

    expect(actionReturn.payload.name).not.toEqual(secondCounselor.name);
    expect(actionReturn.payload.name).toEqual(firstCounselor.name);
    expect(actionReturn.type).toEqual(SET_COUNSELOR);
  });

  it('Testing set Counselor Token', () => {
    const firstToken = 'EuSouUmTokenGenerico';

    const actionReturn = setToken(firstToken);

    const secondToken = 'EuSouOutroTokenGenerico';

    expect(actionReturn.payload).not.toEqual(secondToken);
    expect(actionReturn.payload).toEqual(firstToken);
    expect(actionReturn.type).toEqual(SET_TOKEN);
  });

  it('Testing set Counselor Edited', () => {
    const firstCounselor = {
      name: 'Rodolfo',
      profile: {
        cpf: '12312312312',
        phone: '96661234',
        isPresident: false,
        segment: 'Titular',
        CAE_Type: 'Estadual',
        CAE: 'Distrito Federal',
      },
    };

    const actionReturn = setCounselorEdited(firstCounselor);

    const secondCounselor = {
      name: 'Mario',
      profile: {
        cpf: '12312312312',
        phone: '85554567',
        isPresident: true,
        segment: 'Suplente',
        CAE_Type: 'Municipal',
        CAE: 'Porto Velho',
      },
    };

    expect(actionReturn.payload.name).not.toEqual(secondCounselor.name);
    expect(actionReturn.payload.profile).not.toBe(secondCounselor.profile);
    expect(actionReturn.payload.name).toEqual(firstCounselor.name);
    expect(actionReturn.payload.profile).toBe(firstCounselor.profile);
    expect(actionReturn.type).toEqual(SET_COUNSELOR_EDITED);
  });
  // it('Testing Loading', () => {
  //   const actionReturn = loading();
  //
  //   expect(actionReturn.type).toBe(LOADING);
  // });
  //
  // it('Testing login success', () => {
  //   let actionReturn = loginSuccess();
  //
  //   const counselor = {
  //     CPF: 11111111111,
  //   };
  //
  //   expect(actionReturn.counselor).not.toBe(counselor);
  //   expect(actionReturn.type).toBe(LOGIN_SUCCESS);
  //
  //   actionReturn = loginSuccess(counselor);
  //
  //   expect(actionReturn.counselor).toBe(counselor);
  //   expect(actionReturn.type).toBe(LOGIN_SUCCESS);
  // });
  //
  // it('Testing login failure', () => {
  //   const actionReturn = loginFail();
  //
  //   expect(actionReturn.type).toBe(LOGIN_FAIL);
  // });
});
