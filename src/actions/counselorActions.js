import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { SET_COUNSELOR,
  SET_TOKEN,
  SET_COUNSELOR_EDITED } from './types';
import { isLoading, isNotLoading } from './applicationActions';
import { logInfo, logWarn } from '../../logConfig/loggers';
import { APP_IDENTIFIER,
  AUTHENTICATE_LINK_NUVEM_CIVICA,
  DEFAULT_USER_LINK_NUVEM_CIVICA,
  PROFILE_TYPE_CODE } from '../constants';

const FILE_NAME = 'counselorActions.js';

// Action
export const setCounselor = counselor => ({
  type: SET_COUNSELOR,
  payload: counselor,
});

// Action
export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});

// Action
export const setCounselorEdited = counselor => ({
  type: SET_COUNSELOR_EDITED,
  payload: {
    name: counselor.name,
    profile: counselor.profile,
  },
});

// Trating request errors
const treatingEditCounselorError = (error) => {
  if (error.response.status === 401) {
    logWarn(FILE_NAME, 'treatingEditCounselorError',
      `Unauthorized according to the Nuvem - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 403) {
    logWarn(FILE_NAME, 'treatingEditCounselorError',
      `Forbidden according to the Nuvem - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 404) {
    logWarn(FILE_NAME, 'treatingEditCounselorError',
      `Not Found according to the Nuvem - Error code received in request - ${error.response.status}`);
  } else {
    logWarn(FILE_NAME, 'treatingEditCounselorError',
      `Unknown error - Error code received in request - ${error.response.status}`);
  }
};

// Trating request errors
const treatingAuthenticatingCounselorInRegisterError = (error) => {
  if (error.response.status === 401) {
    logWarn(FILE_NAME, 'treatingAuthenticatingCounselorInRegisterError',
      `User isn't register in application or Password didn't match - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 500) {
    logWarn(FILE_NAME, 'treatingAuthenticatingCounselorInRegisterError',
      `Nuvem Cívica Internal Server Error - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 400) {
    logWarn(FILE_NAME, 'treatingAuthenticatingCounselorInRegisterError',
      `Bad Request, some attribute was wrongly passed - Error code received in request - ${error.response.status}`);
  } else {
    logWarn(FILE_NAME, 'treatingAuthenticatingCounselorInRegisterError',
      `Unknown error - Error code received in request - ${error.response.status}`);
  }
};

// Trating request errors
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

// Trating request errors
const treatingAssociateProfileToCounselorError = (error) => {
  if (error.response.status === 401) {
    logWarn(FILE_NAME, 'treatingAssociateProfileToCounselorError',
      `Unauthorized according to the Nuvem - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 403) {
    logWarn(FILE_NAME, 'treatingAssociateProfileToCounselorError',
      `Forbidden according to the Nuvem - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 404) {
    logWarn(FILE_NAME, 'treatingAssociateProfileToCounselorError',
      `User isn't register in Nuvem or Profile type doesn't exist - Error code received in request - ${error.response.status}`);
  } else {
    logWarn(FILE_NAME, 'treatingAssociateProfileToCounselorError',
      `Unknown error - Error code received in request - ${error.response.status}`);
  }
};

// Trating request errors
const treatingVerifyUserInApplicationError = (error) => {
  if (error.response.status === 400) {
    logWarn(FILE_NAME, 'treatingVerifyUserInApplicationError',
      `Bad Request, some attribute was wrongly passed - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 500) {
    logWarn(FILE_NAME, 'treatingVerifyUserInApplicationError',
      `Nuvem Cívica Internal Server Error - Error code received in request - ${error.response.status}`);
  } else {
    logWarn(FILE_NAME, 'treatingVerifyUserInApplicationError',
      `Unknown error - Error code received in request - ${error.response.status}`);
  }
};

// Trating request errors
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

// Trating request errors
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

// Functions focused in Counselor Register

// Used in Async Action to Register Counselor
export const convertingJSONToString = (profileJSON) => {
  // Converting profile JSON to profile string received from Nuvem Civica.
  const profileStringDoubleQuote = JSON.stringify(profileJSON);

  // Changing " to '.
  const profileStringSingleQuote = profileStringDoubleQuote.replace(/"/g, "'");

  return profileStringSingleQuote;
};

// Used in Async Action to Register Counselor
const associateProfileToCounselor = (appToken, nuvemCode, userData, dispatch) => {
  // Creating header to send in POST method.
  const headerWithAppToken = {
    headers: {
      appToken,
    },
  };

  const stringProfile = convertingJSONToString(userData.profile);
  logInfo(FILE_NAME, 'associateProfileToCounselor',
    `String to be send to "camposAdicionais": ${stringProfile}`);

  // Creating body of POST method.
  const associateProfileBody = {
    camposAdicionais: stringProfile,
    tipoPerfil: {
      codTipoPerfil: PROFILE_TYPE_CODE,
    },
  };

  axios.post(`${DEFAULT_USER_LINK_NUVEM_CIVICA}${nuvemCode}/perfil`, associateProfileBody, headerWithAppToken)
    .then((response) => {
      logInfo(FILE_NAME, 'associateProfileToCounselor',
        `Profile setted : ${JSON.stringify(response.data, null, 2)}`);

      const counselor = {
        nuvemCode,
        email: userData.email,
        name: userData.name,
        userName: userData.email,
        password: userData.password,
        token: appToken,
        profile: userData.profile,
      };
      logInfo(FILE_NAME, 'associateProfileToCounselor',
        `counselor dispatched to Store : ${JSON.stringify(counselor, null, 2)}`);

      dispatch(setCounselor(counselor));

      dispatch(isNotLoading());

      Actions.mainScreen();
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'associateProfileToCounselor',
        `Request result in an ${error}`);

      treatingAssociateProfileToCounselorError(error);

      // Setting state loading false, to deactivate the loading spin.
      dispatch(isNotLoading());
    });
};

// Used in Async Action to Register Counselor
const authenticatingUserInRegister = (userData, dispatch) => {
  const authenticationHeader = {
    headers: {
      email: userData.email,
      senha: userData.password },
  };

  axios.get(AUTHENTICATE_LINK_NUVEM_CIVICA, authenticationHeader)
    .then((response) => {
      logInfo(FILE_NAME, 'authenticatingUserInRegister',
        `User authenticated successfully, his token received from Nuvem Cívica is: ${response.headers.apptoken}`);

      logInfo(FILE_NAME, 'authenticatingUserInRegister',
        `User response data received from authentication: ${JSON.stringify(response.data, null, 2)}`);

      associateProfileToCounselor(response.headers.apptoken, response.data.cod, userData, dispatch);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'authenticatingUserInRegister',
        `Request result in an ${error}`);

      treatingAuthenticatingCounselorInRegisterError(error);

      // Setting state loading false, to deactivate the loading spin.
      dispatch(isNotLoading());
    });
};

// Used in Async Action to Register Counselor
const verifyUserInApplication = (userData, dispatch) => {
  // Creating query params and header to pass through GET method.
  const searchUserParamsAndHeader = {
    params: {
      codAplicativo: APP_IDENTIFIER,
    },
    headers: {
      email: userData.email,
    },
  };

  // This request search all users by full name or part of the name,
  // who have registered in an application.
  axios.get(DEFAULT_USER_LINK_NUVEM_CIVICA, searchUserParamsAndHeader)
    .then((response) => {
      logInfo(FILE_NAME, 'verifyUserInApplication',
        `response content: ${JSON.stringify(response.data, null, 2)}`);

      // User already register.
      if (response.status === 200) {
        logInfo(FILE_NAME, 'verifyUserInApplication',
          `User already register in application - Response status code: ${response.status}`);

        // Setting state loading false, to deactivate the loading spin.
        dispatch(isNotLoading());

      // User register just in Nuvem Cívica.
      } else if (response.status === 204) {
        logInfo(FILE_NAME, 'verifyUserInApplication',
          `User isn't register in application - Response status code: ${response.status}`);

        // Trying register a user, that has a Nuvem Cívica record, in our application.
        authenticatingUserInRegister(userData, dispatch);
      } else {
        logInfo(FILE_NAME, 'verifyUserInApplication',
          `Unknown response - Response status code: ${response.status}`);

        dispatch(isNotLoading());
      }
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'verifyUserInApplication',
        `Request result in an ${error}`);

      treatingVerifyUserInApplicationError(error);

      // Setting state loading false, to deactivate the loading spin.
      dispatch(isNotLoading());
    });
};

// Used in Async Action to Register Counselor
const registerCounselorAtNuvemCivica = (registerBody, dispatch, userData) => {
  axios.post(DEFAULT_USER_LINK_NUVEM_CIVICA, registerBody)
    .then((response) => {
      logInfo(FILE_NAME, 'registerCounselorAtNuvemCivica',
        `${JSON.stringify(response.data, null, 2)}`);

      // User registered successfully.
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
        verifyUserInApplication(userData, dispatch);
      } else {
        treatingRegisterCounselorError(error);

        // Setting state loading false, to deactivate the loading spin.
        dispatch(isNotLoading());
      }
    });
};

// Async Action to Register Counselor
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

// Functions focused in Edit Couselor Data

// Edit Counselors Profile
const editCounselorProfile = (counselorData, dispatch) => {
  const headerToEditCounselor = {
    headers: {
      appToken: counselorData.token,
    },
  };

  const stringProfile = convertingJSONToString(counselorData.profile);

  // Creating body of PUT method.
  const bodyToEditCounselorProfile = {
    camposAdicionais: stringProfile,
    tipoPerfil: {
      codTipoPerfil: 239,
    },
  };

  axios.put(`${DEFAULT_USER_LINK_NUVEM_CIVICA}${counselorData.nuvemCode}/perfil`, bodyToEditCounselorProfile, headerToEditCounselor)
    .then(() => {
      logInfo(FILE_NAME, 'editCounselorProfile',
        `Counselor Profile edited. Sending to Store: ${counselorData.name} and ${JSON.stringify(counselorData.profile, null, 2)}`);

      dispatch(setCounselorEdited(counselorData));
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'editCounselorProfile',
        `Request result in an ${error}`);

      treatingEditCounselorError(error);
    });
};

// Edit Counselor
const editCounselor = (counselorData, dispatch) => {
  const headerToEditCounselor = {
    headers: {
      appToken: counselorData.token,
    },
  };

  const bodyToEditCounselor = {
    nomeCompleto: counselorData.name,
    nomeUsuario: counselorData.userName,
  };

  axios.put(`${DEFAULT_USER_LINK_NUVEM_CIVICA}${counselorData.nuvemCode}`, bodyToEditCounselor, headerToEditCounselor)
    .then((response) => {
      logInfo(FILE_NAME, 'editCounselor',
        `User data of Counselor edited: ${JSON.stringify(response.data, null, 2)}`);

      editCounselorProfile(counselorData, dispatch);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'editCounselor',
        `Request result in an ${error}`);

      treatingEditCounselorError(error);
    });
};


// Async Action to Edit Couselor Data
export const asyncEditCounselor = counselorData => (dispatch) => {
  logInfo(FILE_NAME, 'asyncEditCounselor',
    `counselor data to edit: ${JSON.stringify(counselorData, null, 2)}`);


  editCounselor(counselorData, dispatch);
};

// Functions focused in Counselor Login

// Used in Async Action to Login Counselor
const convertingProfileStringToJSON = (profileStringSingleQuote) => {
  // Changing ' to " in string received from Nuvem Civica.
  const profileStringDoubleQuote = profileStringSingleQuote.replace(/'/g, '"');

  // Converting profile string to profile JSON.
  const profileJSON = JSON.parse(profileStringDoubleQuote);

  return profileJSON;
};

// Used in Async Action to Login Counselor
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

      dispatch(setCounselor(counselorWithProfile));

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

// Used in Async Action to Login Counselor
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

// Async Action to Login
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
