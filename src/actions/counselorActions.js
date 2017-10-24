import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { SET_COUNSELOR,
  LOGIN_SUCCESS,
  SET_TOKEN } from './types';
import { isLoading, isNotLoading } from './applicationActions';
import { logInfo, logWarn } from '../../logConfig/loggers';
import { APP_IDENTIFIER,
  AUTHENTICATE_LINK_NUVEM_CIVICA,
  DEFAULT_USER_LINK_NUVEM_CIVICA } from '../constants';

const FILE_NAME = 'counselorActions.js';

// Action
export const setCounselor = counselor => ({
  type: SET_COUNSELOR,
  counselor,
});

// Action
export const loginSuccess = counselor => ({
  type: LOGIN_SUCCESS,
  payload: counselor,
});

// Action
export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});

const treatingRegisterCounselorError = (error) => {
  if (error.response.status === 401) {
    logWarn(FILE_NAME, 'treatingRegisterCounselorError',
      `Unauthorized according to the Nuvem - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 403) {
    logWarn(FILE_NAME, 'treatingRegisterCounselorError',
      `Forbidden according to the Nuvem - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 404) {
    logWarn(FILE_NAME, 'treatingRegisterCounselorError',
      `Not Found according to the Nuvem - Error code received in request - ${error.response.status}`);
  } else {
    logWarn(FILE_NAME, 'treatingRegisterCounselorError',
      `Unknown error - Error code received in request - ${error.response.status}`);
  }
};

const authenticatingUserInRegister = (userData, dispatch) => {
  // Delete this and build the function appropriately.
  dispatch(isNotLoading());
};

const registerCounselorAtNuvemCivica = (registerBody, dispatch, userData) => {
  axios.post(DEFAULT_USER_LINK_NUVEM_CIVICA, registerBody)
    .then((response) => {
      logInfo(FILE_NAME, 'registerCounselorAtNuvemCivica',
        `${JSON.stringify(response.data, null, 2)}`);

      authenticatingUserInRegister(userData, dispatch);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'registerCounselorAtNuvemCivica',
        `Request result in an ${error}`);

      // In this case, we get a user already registered at Nuvem Cívica,
      // but he may not be registered in our application.
      if (error.response.status === 400) {
        logWarn(FILE_NAME, 'registerCounselorAtNuvemCivica',
          `User already registered in Nuvem Civica or deactivated - Error code received in request - ${error.response.status}`);

        // Build the function that verify if the user is already register in our application
        // or just in Nuvem Civica.
      } else {
        treatingRegisterCounselorError(error);
      }
    });
};

// Async Action
export const asyncRegisterCounselor = userData => (dispatch) => {
  logInfo(FILE_NAME, 'asyncLoginCounselor',
    `userData received from asyncRegisterCounselor: ${JSON.stringify(userData, null, 2)}`);

  // Creating body to send in post method.
  const registerBody = {
    email: userData.email,
    nomeCompleto: userData.name,
    nomeUsuario: userData.email,
    senha: userData.password,
  };

  // Setting state loading true, to activate the loading spin.
  dispatch(isLoading());

  // Request to register a counselor at Nuvem Cívica, but not in application yet.
  registerCounselorAtNuvemCivica(registerBody, dispatch, userData);
};

// Async Action
export const asyncGetCounselor = id => (dispatch) => {
  console.log(id);
  axios.get(`http://merenda-mais.herokuapp.com/counselor/${id}`)
    .then((response) => {
      console.log(response.data);
      response.data = { ...response.data, id };
      dispatch(setCounselor(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

// Async Action
export const asyncEditCounselor = counselorData => (dispatch) => {
  console.log('counselorActions: ');
  console.log(counselorData);

  axios.patch(`http://merenda-mais.herokuapp.com/counselor/${counselorData.id}/`, {
    email: counselorData.email,
    phone: counselorData.phone,
    name: counselorData.name,
  })
    .then((response) => {
      console.log('counselorActions: ');
      console.log(response.data);
      const responseWithId = {
        ...response.data,
        id: counselorData.id,
      };
      dispatch(setCounselor(responseWithId));
      Actions.profileInfoScreen();
    })
    .catch((error) => {
      console.log(error);
    });
};

const treatingAuthenticatingCounselorInLoginError = (erro) => {
  if (erro.response.status === 401) {
    logWarn(FILE_NAME, 'treatingAuthenticatingCounselorInLoginError',
      `User isn't register in application or Password didn't match - Error code received in request - ${erro.response.status}`);
  } else if (erro.response.status === 500) {
    logWarn(FILE_NAME, 'treatingAuthenticatingCounselorInLoginError',
      `Nuvem Cívica Internal Server Error - Error code received in request - ${erro.response.status}`);
  } else if (erro.response.status === 400) {
    logWarn(FILE_NAME, 'treatingAuthenticatingCounselorInLoginError',
      `Bad Request, some attribute was wrongly passed - Error code received in request - ${erro.response.status}`);
  } else {
    logWarn(FILE_NAME, 'treatingAuthenticatingCounselorInLoginError',
      `Unknown error - Error code received in request - ${erro.response.status}`);
  }
};

const treatingGetUserProfileInLoginError = (error) => {
  if (error.response.status === 404) {
    logWarn(FILE_NAME, 'treatingGetUserProfileInLoginError',
      `User isn't register in application or Profile didn't find for this user - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 500) {
    logWarn(FILE_NAME, 'treatingGetUserProfileInLoginError',
      `Nuvem Cívica Internal Server Error - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 400) {
    logWarn(FILE_NAME, 'treatingGetUserProfileInLoginError',
      `Bad Request, some attribute was wrongly passed - Error code received in request - ${error.response.status}`);
  } else {
    logWarn(FILE_NAME, 'treatingGetUserProfileInLoginError',
      `Unknown error - Error code received in request - ${error.response.status}`);
  }
};

const convertingProfileStringToJSON = (profileStringSingleQuote) => {
  // Changing ' to " in string received from Nuvem Civica.
  const profileStringDoubleQuote = profileStringSingleQuote.replace(/'/g, '"');

  // Converting profile string to profile JSON.
  const profileJSON = JSON.parse(profileStringDoubleQuote);

  return profileJSON;
};

const getUserProfileInLogin = (counselor, dispatch) => {
  const getProfileHeader = {
    headers: {
      appIdentifier: APP_IDENTIFIER,
    },
  };
  axios.get(`${DEFAULT_USER_LINK_NUVEM_CIVICA}${counselor.nuvemCode}/perfil`, getProfileHeader)
    .then((response) => {
      logInfo(FILE_NAME, 'getUserProfileInLogin',
        `Profile data of user: ${counselor.nuvemCode} -> ${JSON.stringify(response.data, null, 2)}`);

      const profile = convertingProfileStringToJSON(response.data.camposAdicionais);
      const counselorWithProfile = counselor;
      counselorWithProfile.profile = profile;

      logInfo(FILE_NAME, 'getUserProfileInLogin',
        `Final Counselor sent to store after login: ${JSON.stringify(counselorWithProfile, null, 2)}`);

      dispatch(loginSuccess(counselorWithProfile));

      dispatch(isNotLoading());

      Actions.mainScreen();
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'gettingUserProfileInLogin',
        `Request result in an ${error}`);

      treatingGetUserProfileInLoginError(error);

      // Setting state loading false, to deactivate the loading spin.
      dispatch(isNotLoading());
    });
};

const authenticatingCounselorInLogin = (authenticationHeader, dispatch) => {
  axios.get(AUTHENTICATE_LINK_NUVEM_CIVICA, authenticationHeader)
    .then((response) => {
      logInfo(FILE_NAME, 'authenticatingCounselorInLogin',
        `User authenticated successfully, his token received from Nuvem Cívica is: ${response.headers.apptoken}`);

      logInfo(FILE_NAME, 'authenticatingCounselorInLogin',
        `User response data received from authentication: ${JSON.stringify(response.data, null, 2)}`);

      // To catch response header data you need to use response.headers.<Attribute-Needed>.
      const counselor = {
        nuvemCode: response.data.cod,
        email: response.data.email,
        name: response.data.nomeCompleto,
        userName: response.data.nomeUsuario,
        password: authenticationHeader.headers.senha,
        token: response.headers.apptoken,
        profile: {},
      };

      getUserProfileInLogin(counselor, dispatch);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'authenticatingCounselorInLogin',
        `Request result in an ${error}`);

      treatingAuthenticatingCounselorInLoginError(error);

      // Setting state loading false, to deactivate the loading spin.
      dispatch(isNotLoading());
    });
};

// Async Action
export const asyncLoginCounselor = userData => (dispatch) => {
  logInfo(FILE_NAME, 'asyncLoginCounselor',
    `userData received from LoginCounselorScreen: ${JSON.stringify(userData, null, 2)}`);

  // Header json to send Login data. OBS: The word "headers" must be written like this.
  const authenticationHeader = {
    headers: {
      appIdentifier: APP_IDENTIFIER,
      email: userData.email,
      senha: userData.password },
  };

  // Setting state loading true, to activate the loading spin.
  dispatch(isLoading());

  // Request to authenticate the user and get his token.
  authenticatingCounselorInLogin(authenticationHeader, dispatch);
};
