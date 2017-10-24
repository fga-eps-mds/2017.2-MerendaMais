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

// Async Action
export const asyncCreateCounselor = userData => (dispatch) => {
  console.log(userData);
  axios.post('http://merenda-mais.herokuapp.com/counselor/', userData)
    .then((response) => {
      console.log(response.data);
      dispatch(setCounselor(response.data));
      Actions.loginCounselorScreen();
    })
    .catch((error) => {
      console.log(error);
    });
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

const treatingAuthenticationErrorInLogin = (erro) => {
  if (erro.response.status === 401) {
    logWarn(FILE_NAME, 'treatingAuthenticationErrorInLogin',
      `User isn't register in application or Password didn't match - Error code received in request - ${erro.response.status}`);
  } else if (erro.response.status === 500) {
    logWarn(FILE_NAME, 'treatingAuthenticationErrorInLogin',
      `Nuvem Cívica Internal Server Error - Error code received in request - ${erro.response.status}`);
  } else if (erro.response.status === 400) {
    logWarn(FILE_NAME, 'treatingAuthenticationErrorInLogin',
      `Bad Request, some attribute was wrongly passed - Error code received in request - ${erro.response.status}`);
  } else {
    logWarn(FILE_NAME, 'treatingAuthenticationErrorInLogin',
      `Unknown error - Error code received in request - ${erro.response.status}`);
  }
};

const treatingGetUserProfileErrorInLogin = (error) => {
  if (error.response.status === 404) {
    logWarn(FILE_NAME, 'treatingGetUserProfileErrorInLogin',
      `User isn't register in application or Profile didn't find for this user - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 500) {
    logWarn(FILE_NAME, 'treatingGetUserProfileErrorInLogin',
      `Nuvem Cívica Internal Server Error - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 400) {
    logWarn(FILE_NAME, 'treatingGetUserProfileErrorInLogin',
      `Bad Request, some attribute was wrongly passed - Error code received in request - ${error.response.status}`);
  } else {
    logWarn(FILE_NAME, 'treatingGetUserProfileErrorInLogin',
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
        `Profile data of user: ${counselor.nuvemCode} -> ${JSON.stringify(response.data)}`);

      const profile = convertingProfileStringToJSON(response.data.camposAdicionais);
      const counselorWithProfile = counselor;
      counselorWithProfile.profile = profile;

      logInfo(FILE_NAME, 'getUserProfileInLogin',
        `Final Counselor sent to store after login: ${JSON.stringify(counselorWithProfile)}`);

      dispatch(loginSuccess(counselorWithProfile));

      dispatch(isNotLoading());

      Actions.mainScreen();
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'gettingUserProfileInLogin',
        `Request result in an ${error}`);

      treatingGetUserProfileErrorInLogin(error);

      dispatch(isNotLoading());
    });
};

const authenticatingUserInLogin = (authenticationHeader, dispatch) => {
  axios.get(AUTHENTICATE_LINK_NUVEM_CIVICA, authenticationHeader)
    .then((response) => {
      logInfo(FILE_NAME, 'authenticatingUserInLogin',
        `User authenticated successfully, his token received from Nuvem Cívica is: ${response.headers.apptoken}`);

      logInfo(FILE_NAME, 'authenticatingUserInLogin',
        `User response data received from authentication: ${JSON.stringify(response.data)}`);

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
      logWarn(FILE_NAME, 'authenticatingUserInLogin',
        `Request result in an ${error}`);

      treatingAuthenticationErrorInLogin(error);

      dispatch(isNotLoading());
    });
};

// Async Action
export const asyncLoginCounselor = userData => (dispatch) => {
  logInfo(FILE_NAME, 'asyncLoginCounselor',
    `userData received from LoginCounselorScreen: ${JSON.stringify(userData)}`);

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
  authenticatingUserInLogin(authenticationHeader, dispatch);
};
