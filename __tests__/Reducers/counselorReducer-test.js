import counselorReducer from '../../src/Reducers/counselorReducer';
import initialState from '../../src/Reducers/initialState';
import {
  SET_COUNSELOR, MODIFY_CPF, MODIFY_PASSWORD,
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

  it('shows loading', () => {
    let counselor = { ...initialState.counselor };

    expect(counselor.cpf).not.toBe(456789);

    counselor = counselorReducer(counselor, {
      type: MODIFY_CPF,
      payload: 456789,
    });

    expect(counselor.cpf).toBe(456789);
  });

  it('verifies Login success', () => {
    let counselor = { ...initialState.counselor };

    expect(counselor.cpf).not.toBe(456789);

    counselor = counselorReducer(counselor, {
      type: MODIFY_CPF,
      payload: 456789,
    });

    expect(counselor.cpf).toBe(456789);
  });

  it('verifies login fail', () => {
    let counselor = { ...initialState.counselor };

    expect(counselor.cpf).not.toBe(456789);

    counselor = counselorReducer(counselor, {
      type: MODIFY_CPF,
      payload: 456789,
    });

    expect(counselor.cpf).toBe(456789);
  });
});
