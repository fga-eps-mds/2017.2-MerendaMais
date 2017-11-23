/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { REACT_NATIVE_EMAIL, REACT_NATIVE_PASS } from 'react-native-dotenv';
import { Alert } from 'react-native';
import { } from './types';
import { logInfo, logWarn } from '../../logConfig/loggers';
import {
  APP_IDENTIFIER,
  AUTHENTICATE_LINK_NUVEM_CIVICA,
  DEFAULT_GROUP_LINK_NUVEM_CIVICA,
  DEFAULT_USER_LINK_NUVEM_CIVICA,
} from '../constants';

const FILE_NAME = 'ManageRegistersActions.js';

export const resetList = () => ({
  type: '',
});

const disableCounselorFromApp = async (counselor, MASTER_TOKEN) => {
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
        resolve('Conselheiro desassociado com sucesso!');
        Alert.alert('Conselheiro desassociado com sucesso!');
      })
      .catch((error) => {
        logWarn(FILE_NAME, '',
          `Request result in an ${error}`);
        reject('Erro ao desassociar conselheiro da aplicação!');
        Alert.alert('Erro ao desassociar conselheiro da aplicação!');
      });
  });
};

const authenticatingMasterCounselor = async () => {
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
        logWarn(FILE_NAME, 'authenticatingCounselorInLogin',
          `Request result in an ${error}`);
        reject(error);
      });
  });
};

const disableCounselorFromGroup = (counselor, codGroup, MASTER_TOKEN) => {
  const disableGroupHeader = {
    headers: {
      appToken: MASTER_TOKEN,
    },
  };

  return new Promise((resolve, rejected) => {
    axios.delete(
      `${DEFAULT_GROUP_LINK_NUVEM_CIVICA}${codGroup}/membros/${counselor.codMembro}`,
      disableGroupHeader)
      .then((response) => {
        logInfo(FILE_NAME, 'disableCounselorFromApp',
          ` Disable from group response: ${JSON.stringify(response.status)}`);
        resolve(response);
      })
      .catch((error) => {
        logWarn(FILE_NAME, '',
          `Request result in an ${error}`);
        rejected(error);
      });
  });
};

export const disableCounselor = (counselor, codGroup) => async () => {
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
};

