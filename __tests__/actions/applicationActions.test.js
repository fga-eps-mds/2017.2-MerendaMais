import { isLoading, isNotLoading, convertingJSONToString } from '../../src/actions/applicationActions';
import { IS_LOADING, IS_NOT_LOADING } from '../../src/actions/types';

describe('Testing applicationActions', () => {
  it('Testing is Loading', () => {
    const actionReturn = isLoading();

    expect(actionReturn.type).toBe(IS_LOADING);
  });

  it('Testing is not Loading', () => {
    const actionReturn = isNotLoading();

    expect(actionReturn.type).toBe(IS_NOT_LOADING);
  });
});

describe('Testing file auxiliary functions', () => {
  it('Test convertingJSONToString', () => {
    const functionReturn = convertingJSONToString({ chave: "valor" });
    expect(functionReturn).toEqual("{'chave':'valor'}");
  });
});