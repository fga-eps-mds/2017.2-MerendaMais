import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import counselorReducer from '../../src/Reducers/counselorReducer';
import initialState from '../../src/Reducers/initialState';
import {
  SET_COUNSELOR, MODIFY_CPF
} from '../../src/actions/types';

describe('Testing counselorReducer', () => {
  it('sets counselor', () => {
    let counselor = {...initialState.counselor};

    expect(counselor.id).not.toBe(123);

    counselor = counselorReducer(counselor, {
      type: SET_COUNSELOR,
      counselor: {
        ...counselor,
        id: 123
      }
    });

    expect(counselor.id).toBe(123);
  });

  it('modify CPF', () => {
    let counselor = {...initialState.counselor};

    expect(counselor.cpf).not.toBe(456789);

    counselor = counselorReducer(counselor, {
      type: MODIFY_CPF,
      cpf: 456789
    });

    expect(counselor.cpf).toBe(456789);
  });
});