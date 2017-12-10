import counselorReducer from '../../src/Reducers/counselorReducer';
import initialState from '../../src/Reducers/initialState';
import { SET_COUNSELOR, SET_TOKEN, SET_COUNSELOR_EDITED } from '../../src/actions/types';

describe('Testing counselorReducer', () => {
  it('Sets counselor', () => {
    let counselor = initialState.counselor;

    expect(counselor.nuvemCode).toBe(0);
    expect(counselor.email).toBe('');
    expect(counselor.name).toBe('');
    expect(counselor.userName).toBe('');
    expect(counselor.password).toBe('');
    expect(counselor.token).toBe('');
    expect(counselor.profile.cpf).toBe('');
    expect(counselor.profile.phone).toBe('');
    expect(counselor.profile.isPresident).toBe(false);
    expect(counselor.profile.counselorType).toBe('');
    expect(counselor.profile.segment).toBe('');
    expect(counselor.profile.CAE_Type).toBe('');
    expect(counselor.profile.CAE).toBe('');

    const sendedCounselor = {
      nuvemCode: 1,
      email: 'rodolfo@gmail.com',
      name: 'Rodolfo',
      userName: 'rodolfo@gmail.com',
      password: 'senha',
      token: 'tokenGenerico',
      profile: {
        cpf: '12312312312',
        phone: '96661234',
        isPresident: false,
        counselorType: 'Titular',
        segment: 'Entidades civis',
        CAE_Type: 'Estadual',
        CAE: 'Distrito Federal',
      },
    };

    const action = {
      type: SET_COUNSELOR,
      payload: sendedCounselor,
    };

    counselor = counselorReducer(counselor, action);

    expect(counselor).toEqual(sendedCounselor);
  });

  it('Sets counselor token', () => {
    let counselor = initialState.counselor;

    expect(counselor.nuvemCode).toBe(0);
    expect(counselor.email).toBe('');
    expect(counselor.name).toBe('');
    expect(counselor.userName).toBe('');
    expect(counselor.password).toBe('');
    expect(counselor.token).toBe('');
    expect(counselor.profile.cpf).toBe('');
    expect(counselor.profile.phone).toBe('');
    expect(counselor.profile.isPresident).toBe(false);
    expect(counselor.profile.counselorType).toBe('');
    expect(counselor.profile.segment).toBe('');
    expect(counselor.profile.CAE_Type).toBe('');
    expect(counselor.profile.CAE).toBe('');

    const sendedCounselor = {
      nuvemCode: 0,
      email: '',
      name: '',
      userName: '',
      password: '',
      token: 'tokenGenerico',
      profile: {
        cpf: '',
        phone: '',
        isPresident: false,
        presidentChecked: false,
        counselorType: '',
        segment: '',
        CAE_Type: '',
        CAE: '',
        codGroup: '',
      },
    };

    const action = {
      type: SET_TOKEN,
      payload: sendedCounselor.token,
    };

    counselor = counselorReducer(counselor, action);

    expect(counselor).toEqual(sendedCounselor);
  });

  it('Sets counselor edited', () => {
    let counselor = initialState.counselor;

    expect(counselor.nuvemCode).toBe(0);
    expect(counselor.email).toBe('');
    expect(counselor.name).toBe('');
    expect(counselor.userName).toBe('');
    expect(counselor.password).toBe('');
    expect(counselor.token).toBe('');
    expect(counselor.profile.cpf).toBe('');
    expect(counselor.profile.phone).toBe('');
    expect(counselor.profile.isPresident).toBe(false);
    expect(counselor.profile.counselorType).toBe('');
    expect(counselor.profile.segment).toBe('');
    expect(counselor.profile.CAE_Type).toBe('');
    expect(counselor.profile.CAE).toBe('');

    const sendedCounselor = {
      nuvemCode: 0,
      email: '',
      name: 'Romario',
      userName: '',
      password: '',
      token: '',
      profile: {
        cpf: '12312312312',
        phone: '987654321',
        isPresident: true,
        counselorType: 'Suplente',
        segment: 'Entidades civis',
        CAE_Type: 'Municipal',
        CAE: 'Porto Velho',
      },
    };

    const action = {
      type: SET_COUNSELOR_EDITED,
      payload: {
        name: sendedCounselor.name,
        profile: sendedCounselor.profile,
      },
    };

    counselor = counselorReducer(counselor, action);

    expect(counselor).toEqual(sendedCounselor);
  });

  it('Default action type', () => {
    let counselor = initialState.counselor;

    expect(counselor.nuvemCode).toBe(0);
    expect(counselor.email).toBe('');
    expect(counselor.name).toBe('');
    expect(counselor.userName).toBe('');
    expect(counselor.password).toBe('');
    expect(counselor.token).toBe('');
    expect(counselor.profile.cpf).toBe('');
    expect(counselor.profile.phone).toBe('');
    expect(counselor.profile.isPresident).toBe(false);
    expect(counselor.profile.counselorType).toBe('');
    expect(counselor.profile.segment).toBe('');
    expect(counselor.profile.CAE_Type).toBe('');
    expect(counselor.profile.CAE).toBe('');

    const sendedCounselor = counselor;

    const action = {
      type: 'DEFAULT_TYPE_TO_ACTION',
      payload: 'DEFAULT_VALUE_TO_ACTION',
    };

    counselor = counselorReducer(counselor, action);

    expect(counselor).toEqual(sendedCounselor);
  });

  it('Undefined action sended', () => {
    let counselor = initialState.counselor;

    expect(counselor.nuvemCode).toBe(0);
    expect(counselor.email).toBe('');
    expect(counselor.name).toBe('');
    expect(counselor.userName).toBe('');
    expect(counselor.password).toBe('');
    expect(counselor.token).toBe('');
    expect(counselor.profile.cpf).toBe('');
    expect(counselor.profile.phone).toBe('');
    expect(counselor.profile.isPresident).toBe(false);
    expect(counselor.profile.counselorType).toBe('');
    expect(counselor.profile.segment).toBe('');
    expect(counselor.profile.CAE_Type).toBe('');
    expect(counselor.profile.CAE).toBe('');

    const sendedCounselor = counselor;

    const action = undefined;

    expect(action).toBeUndefined();

    counselor = counselorReducer(counselor, action);

    expect(counselor).toEqual(sendedCounselor);
  });
});
