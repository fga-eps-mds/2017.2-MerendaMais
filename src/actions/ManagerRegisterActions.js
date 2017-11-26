/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { REACT_NATIVE_EMAIL, REACT_NATIVE_PASS } from 'react-native-dotenv';
import { Alert } from 'react-native';
import { RESET_LIST } from './types';
import { logInfo, logWarn } from '../../logConfig/loggers';
import {
  APP_IDENTIFIER,
  AUTHENTICATE_LINK_NUVEM_CIVICA,
  DEFAULT_GROUP_LINK_NUVEM_CIVICA,
  DEFAULT_USER_LINK_NUVEM_CIVICA,
  COUNSELOR_DISABLED_SUCCESS,
  COUNSELOR_DISABLED_FAILED,
  COUNSELOR_GROUP_DISABLED_SUCCESS,
  COUNSELOR_GROUP_DISABLED_FAILED,
} from '../constants';

const FILE_NAME = 'ManageRegistersActions.js';

export const resetList = () => ({
  type: RESET_LIST,
});

export const authenticatingMasterCounselor = async () => {
  const authenticationHeader = {
    headers: {
      email: REACT_NATIVE_EMAIL,
      senha: REACT_NATIVE_PASS,
    },
  };

  return new Promise((resolve, reject) => {
    axios.get(AUTHENTICATE_LINK_NUVEM_CIVICA, authenticationHeader)
      .then((response) => {
        logInfo(FILE_NAME, 'authenticatingMasterCounselor',
          `Master authenticated successfully, his token received from Nuvem Cívica is: ${response.headers.apptoken}`);

        resolve(response.headers.apptoken);
      })
      .catch((error) => {
        logWarn(FILE_NAME, 'authenticatingMasterCounselor',
          `Request result in an ${error}`);
        reject('Não foi possível adquirir token para desassociação.');
      });
  });
};

export const convertingJSONToString = (profileJSON) => {
  // Converting profile JSON to profile string received from Nuvem Civica.
  const profileStringDoubleQuote = JSON.stringify(profileJSON);

  // Changing " to '.
  const profileStringSingleQuote = profileStringDoubleQuote.replace(/"/g, "'");

  return profileStringSingleQuote;
};

const acceptCounselor = async (counselorData) => {
  const MASTER_TOKEN = await authenticatingMasterCounselor();

  const headerToAcceptCounselor = {
    headers: {
      appToken: MASTER_TOKEN,
    },
  };

  const stringProfile = convertingJSONToString(counselorData.profile);

  // Creating body of PUT method.
  const bodyToAcceptCounselorProfile = {
    camposAdicionais: stringProfile,
    tipoPerfil: {
      codTipoPerfil: 239,
    },
  };

  axios.put(`${DEFAULT_USER_LINK_NUVEM_CIVICA}${counselorData.nuvemCode}/perfil`, bodyToAcceptCounselorProfile, headerToAcceptCounselor)
    .then(() => {
      logInfo(FILE_NAME, 'acceptCounselor',
        'Counselor Profile accept.');

      Alert.alert('Conselheiro validado com sucesso');

      Actions.refresh();
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'acceptCounselor',
        `Request result in an ${error}`);
    });
};

export const asyncAcceptCounselor = counselorData => (dispatch) => {
  logInfo(FILE_NAME, 'asyncAcceptCounselor',
    `counselor data to accept: ${JSON.stringify(counselorData, null, 2)}`);

  acceptCounselor(counselorData, dispatch);
};

export const disableCounselorFromApp = async (counselor, MASTER_TOKEN) => {
  const disableAppHeader = {
    headers: {
      appIdentifier: APP_IDENTIFIER,
      appToken: MASTER_TOKEN,
    },
  };

  return new Promise((resolve, reject) => {
    axios.delete(`${DEFAULT_USER_LINK_NUVEM_CIVICA}${counselor.nuvemCode}/perfil`, disableAppHeader)
      .then((response) => {
        logInfo(FILE_NAME, 'disableCounselorFromApp',
          `Disable response: ${JSON.stringify(response.status)}`);
        resolve(COUNSELOR_DISABLED_SUCCESS);
      })
      .catch((error) => {
        logWarn(FILE_NAME, '',
          `Request result in an ${error}`);
        logWarn(FILE_NAME, '',
          `Request URL: ${DEFAULT_USER_LINK_NUVEM_CIVICA}${counselor.nuvemCode}/perfil`);
        logWarn(FILE_NAME, '',
          `Header: ${JSON.stringify(disableAppHeader)}`);
        reject(COUNSELOR_DISABLED_FAILED);
      });
  });
};

export const disableCounselorFromGroup = (counselor, codGroup, MASTER_TOKEN) => {
  const disableGroupHeader = {
    headers: {
      appToken: MASTER_TOKEN,
    },
  };

  return new Promise((resolve, reject) => {
    axios.delete(
      `${DEFAULT_GROUP_LINK_NUVEM_CIVICA}${codGroup}/membros/${counselor.codMembro}`,
      disableGroupHeader)
      .then((response) => {
        logInfo(FILE_NAME, 'disableCounselorFromApp',
          ` Disable from group response: ${JSON.stringify(response.status)}`);
        resolve(COUNSELOR_GROUP_DISABLED_SUCCESS);
      })
      .catch((error) => {
        logWarn(FILE_NAME, '',
          `Request result in an ${error}`);
        reject(COUNSELOR_GROUP_DISABLED_FAILED);
      });
  });
};

export const disableCounselor = (counselor, codGroup) => async (dispatch) => {
  const MASTER_TOKEN = await authenticatingMasterCounselor();

  logInfo(FILE_NAME, 'disableCounselor', `Master Token: ${MASTER_TOKEN}`);

  await disableCounselorFromGroup(counselor, codGroup, MASTER_TOKEN);
  await disableCounselorFromApp(counselor, MASTER_TOKEN)
    .then((message) => {
      Alert.alert(message);
    })
    .catch((errorMessage) => {
      Alert.alert(errorMessage);
    });
  dispatch(resetList());
  Actions.refresh();
};
