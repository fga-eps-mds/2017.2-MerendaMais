import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import { modifyCPF } from '../../src/actions/counselorActions';
import { MODIFY_CPF } from '../../src/actions/types';

describe('Testing counselorActions', () => {
  it('Testing modify CPF', () => {
    let actionReturn = modifyCPF();

    expect(actionReturn.payload).not.toBe(11111111111);
    expect(actionReturn.type).toBe(MODIFY_CPF);

    actionReturn = modifyCPF(11111111111);

    expect(actionReturn.payload).toBe(11111111111);
    expect(actionReturn.type).toBe(MODIFY_CPF);
  });
});