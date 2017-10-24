import counselorReducer from '../../src/Reducers/counselorReducer';
import initialState from '../../src/Reducers/initialState';
import {
  SET_COUNSELOR, MODIFY_CPF, MODIFY_PASSWORD, LOADING, LOGIN_SUCCESS, LOGIN_FAIL,
} from '../../src/actions/types';

describe('Testing counselorReducer', () => {
  it('sets counselor', () => {
    let counselor = { ...initialState.counselor };

    expect(counselor.id).not.toBe(123);

    counselor = counselorReducer(counselor, {
      type: SET_COUNSELOR,
      counselor: {
        ...counselor,
        id: 123,
      },
    });

    expect(counselor.id).toBe(123);
  });

  it('modifies CPF', () => {
    let counselor = { ...initialState.counselor };

    expect(counselor.cpf).not.toBe(456789);

    counselor = counselorReducer(counselor, {
      type: MODIFY_CPF,
      payload: 456789,
    });

    expect(counselor.cpf).toBe(456789);
  });

  it('modifies Password', () => {
    let counselor = { ...initialState.counselor };

    expect(counselor.password).not.toBe('senha');

    counselor = counselorReducer(counselor, {
      type: MODIFY_PASSWORD,
      payload: 'senha',
    });

    expect(counselor.password).toBe('senha');
  });

  it('shows loading status', () => {
    let counselor = { ...initialState.counselor };

    expect(counselor.isLoading).not.toBe();

    counselor = counselorReducer(counselor, {
      type: LOADING,
      payload: {},
    });

    expect(counselor.isLoading).toBe();
  });

  it('verifies Login Success', () => {
    let counselor = { ...initialState.counselor };

    expect(counselor.name).not.toBe('name');
    expect(counselor.id).not.toBe(1);
    expect(counselor.cpf).not.toBe(11111111111);
    expect(counselor.isLoading).not.toBe({});

    counselor = counselorReducer(counselor, {
      type: LOGIN_SUCCESS,
      payload: counselor,
      name: 'name',
      id: '1',
      cpf: '11111111111',
      isLoading: true,
    });

    expect(counselor.name).toBe('name');
    expect(counselor.id).toBe(1);
    expect(counselor.cpf).toBe(11111111111);
    expect(counselor.isLoading).toBe({});
  });

  it('verifies login fail', () => {
    let counselor = { ...initialState.counselor };

    expect(counselor.isLoading).not.toBe(false);

    counselor = counselorReducer(counselor, {
      type: LOGIN_FAIL,
      payload: false,
    });

    expect(counselor.isLoading).toBe(false);
  });
});
