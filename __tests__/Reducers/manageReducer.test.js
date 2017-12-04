import manageRegisterReducer from '../../src/Reducers/manageRegisterReducer';
import initialState from '../../src/Reducers/initialState';

describe('Testing manageRegistertReducer', () => {
  it('Undefined action sended', () => {
    let manage = initialState.counselor;

    const sendedSchool = manage;

    const action = undefined;

    expect(action).toBeUndefined();

    manage = manageRegisterReducer(manage, action);

    expect(manage).toEqual(sendedSchool);
  });
  it('Default action type', () => {
    let manage = initialState.counselor;

    expect(manage.nuvemCode).toBe(0);
    expect(manage.email).toBe('');
    expect(manage.name).toBe('');
    expect(manage.userName).toBe('');
    expect(manage.password).toBe('');
    expect(manage.token).toBe('');
    expect(manage.profile.cpf).toBe('');
    expect(manage.profile.phone).toBe('');
    expect(manage.profile.isPresident).toBe(false);
    expect(manage.profile.counselorType).toBe('');
    expect(manage.profile.segment).toBe('');
    expect(manage.profile.CAE_Type).toBe('');
    expect(manage.profile.CAE).toBe('');

    const sendedManage = manage;

    const action = {
      type: 'DEFAULT_TYPE_TO_ACTION',
      payload: 'DEFAULT_VALUE_TO_ACTION',
    };

    manage = manageRegisterReducer(manage, action);

    expect(manage).toEqual(sendedManage);
  });
});
