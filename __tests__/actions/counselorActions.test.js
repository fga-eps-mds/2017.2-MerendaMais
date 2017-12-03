import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  setCounselor,
  setToken,
  setCounselorEdited,
  authenticatingCounselorInLogin,
  getUserProfileInLogin,
  convertingJSONToString,
  asyncLoginCounselor,
} from '../../src/actions/counselorActions';
import {
  SET_COUNSELOR,
  SET_TOKEN,
  SET_COUNSELOR_EDITED,
  IS_LOADING,
  IS_NOT_LOADING,
} from '../../src/actions/types';
import {
  APP_IDENTIFIER,
  AUTHENTICATE_LINK_NUVEM_CIVICA,
  DEFAULT_USER_LINK_NUVEM_CIVICA,
} from '../../src/constants/generalConstants';
import { AuthError, ProfileError, GroupError } from '../../src/Exceptions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Testing file auxiliary functions', () => {
  it('Test convertingJSONToString', () => {
    const functionReturn = convertingJSONToString({ chave: "valor" });
    expect(functionReturn).toEqual("{'chave':'valor'}");
  });
});

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
});

describe('Testing counselorActions async actions', () => {
  const mock = new MockAdapter(axios);
  const counselor = {
    nuvemCode: 1,
    email: 'user@user.com',
    name: 'User',
    userName: 'username',
    password: 'password',
    token: 1,
    profile: {},
  };

  const authenticationHeader = {
    headers: {
      appIdentifier: APP_IDENTIFIER,
      email: 'user@user.com',
      senha: 'password',
    },
  };

  const errorMessage = 'Error Message';

  const errorStatus = {
    response: {
      status: 400,
    },
  };

  afterEach(() => {
    mock.reset();
  });

  it('Testing authenticatingCounselorInLogin', async () => {
    const response = {
      nomeCompleto: counselor.name,
      cod: counselor.nuvemCode,
      nomeUsuario: counselor.userName,
      password: counselor.password,
      apptoken: 1,
      email: counselor.email,
      profile: {},
    };

    mock.onGet(AUTHENTICATE_LINK_NUVEM_CIVICA, authenticationHeader)
      .reply(200, response, { apptoken: 1 });

    const actionReturn = await authenticatingCounselorInLogin(authenticationHeader);
    expect(actionReturn).toEqual(counselor);
  });

  it('Testing authenticatingCounselorInLogin catch', async () => {
    mock.onGet(AUTHENTICATE_LINK_NUVEM_CIVICA, authenticationHeader)
      .reply(400);

    try {
      await authenticatingCounselorInLogin(authenticationHeader);
    } catch (e) {
      expect(e.response.status).toBe(400);
    }
  });

  it('Testing getUserProfileInLogin', async () => {
    const response = { ...counselor, profile: 'campos' };
    mock.onGet(`${DEFAULT_USER_LINK_NUVEM_CIVICA}${counselor.nuvemCode}/perfil`)
      .reply(200, { ...response, camposAdicionais: '\'campos\'' });

    const actionReturn = await getUserProfileInLogin(counselor);
    expect(actionReturn).toEqual(response);
  });

  it('Testing getUserProfileInLogin catch', async () => {
    const header = {
      headers: {
        appIdentifier: APP_IDENTIFIER,
      },
    };

    mock.onGet(`${DEFAULT_USER_LINK_NUVEM_CIVICA}${counselor.nuvemCode}/perfil`, header)
      .reply(400);

    try {
      await getUserProfileInLogin(counselor);
    } catch (e) {
      expect(e.response.status).toBe(400);
    }
  });

  it('Testing asyncLoginCounselor', () => {
    jest.mock('react-native-router-flux');

    const original = require.requireActual('../../src/actions/counselorActions');
    original.counselorActionsAuxiliary
      .authenticatingCounselorInLogin = jest.fn(() => Promise.resolve());
    original.counselorActionsAuxiliary.getUserProfileInLogin = jest.fn(() => Promise.resolve());
    original.counselorActionsAuxiliary.getCodGroup = jest.fn(() => Promise.resolve(counselor));

    const store = mockStore({});

    const expectedActions = [
      { type: IS_LOADING },
      { type: SET_COUNSELOR, payload: counselor },
      { type: IS_NOT_LOADING },
    ];

    return store.dispatch(asyncLoginCounselor(counselor)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Testing asyncLoginCounselor with getCodGroup catch', () => {
    jest.mock('react-native-router-flux');

    const original = require.requireActual('../../src/actions/counselorActions');
    original.counselorActionsAuxiliary
      .authenticatingCounselorInLogin = jest.fn(() => Promise.resolve());
    original.counselorActionsAuxiliary.getUserProfileInLogin = jest.fn(() => Promise.resolve());
    original.counselorActionsAuxiliary.getCodGroup =
      jest.fn(() => Promise.reject(new GroupError(errorMessage)));

    const store = mockStore({});

    const expectedActions = [
      { type: IS_NOT_LOADING },
    ];

    return store.dispatch(asyncLoginCounselor(counselor)).catch((error) => {
      expect(error).toEqual(errorMessage);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Testing asyncLoginCounselor with getUserProfileInLogin catch', () => {
    jest.mock('react-native-router-flux');

    const original = require.requireActual('../../src/actions/counselorActions');
    original.counselorActionsAuxiliary
      .authenticatingCounselorInLogin = jest.fn(() => Promise.resolve());
    original.counselorActionsAuxiliary
      .getUserProfileInLogin = jest.fn(() => Promise.reject(new ProfileError(errorStatus)));
    original.counselorActionsAuxiliary.getCodGroup = jest.fn(() => Promise.resolve());

    const store = mockStore({});

    const expectedActions = [
      { type: IS_NOT_LOADING },
    ];

    return store.dispatch(asyncLoginCounselor(counselor)).catch((error) => {
      expect(error).toEqual(errorStatus);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Testing asyncLoginCounselor with authenticatingCounselorInLogin catch', () => {
    jest.mock('react-native-router-flux');

    const original = require.requireActual('../../src/actions/counselorActions');
    original.counselorActionsAuxiliary
      .authenticatingCounselorInLogin = jest.fn(() => Promise.reject(new AuthError(errorStatus)));
    original.counselorActionsAuxiliary
      .getUserProfileInLogin = jest.fn(() => Promise.resolve());
    original.counselorActionsAuxiliary.getCodGroup = jest.fn(() => Promise.resolve());

    const store = mockStore({});

    const expectedActions = [
      { type: IS_NOT_LOADING },
    ];

    return store.dispatch(asyncLoginCounselor(counselor)).catch((error) => {
      expect(error).toEqual(errorStatus);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
