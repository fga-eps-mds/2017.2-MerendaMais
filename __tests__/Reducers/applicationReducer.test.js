import applicationReducer from '../../src/Reducers/applicationReducer';
import initialState from '../../src/Reducers/initialState';
import { IS_LOADING, IS_NOT_LOADING } from '../../src/actions/types';

describe('Testing applicationReducer', () => {
  it('Is Loading', () => {
    let application = initialState.application;

    expect(application.isLoading).toBe(false);
    expect(application.message_erro).toBe('');
    expect(application.clickableView).toBe('auto');

    const compareValues = {
      isLoading: true,
      message_erro: '',
      clickableView: 'none',
    };

    const action = {
      type: IS_LOADING,
    };

    application = applicationReducer(application, action);

    expect(application).toEqual(compareValues);
  });

  it('Is not Loading', () => {
    let application = {
      ...initialState.application,
      isLoading: true,
    };

    expect(application.isLoading).toBe(true);
    expect(application.message_erro).toBe('');
    expect(application.clickableView).toBe('auto');

    const compareValues = {
      isLoading: false,
      message_erro: '',
      clickableView: 'auto',
    };

    const action = {
      type: IS_NOT_LOADING,
    };

    application = applicationReducer(application, action);

    expect(application).toEqual(compareValues);
  });


  it('Default action type', () => {
    let application = initialState.application;

    expect(application.isLoading).toBe(false);
    expect(application.message_erro).toBe('');
    expect(application.clickableView).toBe('auto');

    const sendedApplication = application;

    const action = {
      type: 'DEFAULT_TYPE_TO_ACTION',
      payload: 'DEFAULT_VALUE_TO_ACTION',
    };

    application = applicationReducer(application, action);

    expect(application).toEqual(sendedApplication);
  });

  it('Undefined action sended', () => {
    let application = initialState.application;

    expect(application.isLoading).toBe(false);
    expect(application.message_erro).toBe('');
    expect(application.clickableView).toBe('auto');

    const sendedApplication = application;

    const action = undefined;

    expect(action).toBeUndefined();

    application = applicationReducer(application, action);

    expect(application).toEqual(sendedApplication);
  });
});
