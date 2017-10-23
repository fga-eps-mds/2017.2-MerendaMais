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
  counselor,
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

const treatingGettingUserProfileErrorInLogin = (error) => {
  if (error.response.status === 404) {
    logWarn(FILE_NAME, 'treatingGettingUserProfileErrorInLogin',
      `User isn't register in application or Profile didn't find for this user - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 500) {
    logWarn(FILE_NAME, 'treatingGettingUserProfileErrorInLogin',
      `Nuvem Cívica Internal Server Error - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 400) {
    logWarn(FILE_NAME, 'treatingGettingUserProfileErrorInLogin',
      `Bad Request, some attribute was wrongly passed - Error code received in request - ${error.response.status}`);
  } else {
    logWarn(FILE_NAME, 'treatingGettingUserProfileErrorInLogin',
      `Unknown error - Error code received in request - ${error.response.status}`);
  }
};

const gettingUserProfileInLogin = (counselorNuvemCode) => {
  const getProfileHeader = {
    headers: {
      appIdentifier: APP_IDENTIFIER,
    },
  };
  axios.get(`${DEFAULT_USER_LINK_NUVEM_CIVICA}${counselorNuvemCode}/perfil`, getProfileHeader)
    .then((response) => {
      logInfo(FILE_NAME, 'gettingUserProfileInLogin',
        `Profile data of user: ${counselorNuvemCode} -> ${JSON.stringify(response.data)}`);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'gettingUserProfileInLogin',
        `Request result in an ${error}`);
      treatingGettingUserProfileErrorInLogin(error);
    });
};

const authenticatingUserInLogin = (authenticationHeader, dispatch) => {
  axios.get(AUTHENTICATE_LINK_NUVEM_CIVICA, authenticationHeader)
    .then((response) => {
      logInfo(FILE_NAME, 'authenticatingUserInLogin',
        `User authenticated successfully, his token received from Nuvem Cívica is: ${response.headers.apptoken}`);

      // To catch response header data you need to use response.headers.<Attribute-Needed>.
      dispatch(setToken(response.headers.apptoken));

      logInfo(FILE_NAME, 'authenticatingUserInLogin',
        `User response data received from authentication: ${JSON.stringify(response.data)}`);

      gettingUserProfileInLogin(response.data.cod);

      dispatch(loginSuccess(response.data));

      dispatch(isNotLoading());

      Actions.mainScreen();
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
