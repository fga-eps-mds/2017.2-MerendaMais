
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/schoolActions';
import * as types from '../../src/actions/types';

const SCHOOL_NAME = 'School Name';

const SCHOOL_DATA = {
  schoolName: SCHOOL_NAME,
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Testing schoolActions', () => {
  it('Test if we can set data using setSchoolInfo', () => {
    const actionReturn = actions.setSchoolInfo(SCHOOL_DATA);

    expect(actionReturn.payload).toBe(SCHOOL_DATA);
  });

  it('Test asyncChangeToSchoolInfoScreen', () => {
    const store = mockStore({});
    jest.mock('react-native-router-flux');

    const expectedPayload = {
      payload: {
        schooCode: 1,
      },
      type: types.SET_SCHOOL_INFO,
    };

    store.dispatch(actions.asyncChangeToSchoolInfoScreen({ schooCode: 1 }));
    expect(store.getActions()).toEqual([expectedPayload]);
  });
});
