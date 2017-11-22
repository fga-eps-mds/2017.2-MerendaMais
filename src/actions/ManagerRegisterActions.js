import axios from 'axios';
import { Alert } from 'react-native';
import { } from './types';
import { logInfo, logWarn } from '../../logConfig/loggers';
import { APP_IDENTIFIER,
  APP_TOKEN,
  AUTHENTICATE_LINK_NUVEM_CIVICA,
  DEFAULT_GROUP_LINK_NUVEM_CIVICA,
  DEFAULT_USER_LINK_NUVEM_CIVICA } from '../constants';

const FILE_NAME = 'ManageRegistersActions.js';

export const resetList = () => ({
  type: '',
});

const disableCounselorFromApp = (counselor, appToken, dispatch) => {
  const disableAppHeader = {
    headers: {
      appIdentifier: APP_IDENTIFIER,
      appToken: APP_TOKEN,
    },
  };
  console.log(counselor.nuvemCode, appToken, APP_IDENTIFIER);
  axios.delete(`${DEFAULT_USER_LINK_NUVEM_CIVICA}${counselor.nuvemCode}/perfil`, disableAppHeader)
    .then((response) => {
      Alert.alert('Conselheiro desassociado com sucesso!');
    })
    .catch((error) => {
      logWarn(FILE_NAME, '',
        `Request result in an ${error}`);
      Alert.alert('Erro ao desassociar conselheiro da aplicação!');
    });
};

const authenticatingMasterCounselor = (counselor, dispatch) => {
  const authenticationHeader = {
    headers: {
      email: 'merendamaisfga@gmail.com',
      senha: 'codamais',
    },
  };

  axios.get(AUTHENTICATE_LINK_NUVEM_CIVICA, authenticationHeader)
    .then((response) => {
      logInfo(FILE_NAME, 'authenticatingCounselorInLogin',
        `Master authenticated successfully, his token received from Nuvem Cívica is: ${response.headers.apptoken}`);

      disableCounselorFromApp(counselor, response.headers.apptoken, dispatch);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'authenticatingCounselorInLogin',
        `Request result in an ${error}`);
    });
};


export const disableCounselorFromGroup = (counselor, codGroup, appToken) => (dispatch) => {
  console.log(counselor);
  const disableGroupHeader = {
    headers: {
      appToken,
    },
  };
  axios.delete(`${DEFAULT_GROUP_LINK_NUVEM_CIVICA}${codGroup}/membros/${counselor.codMembro}`, disableGroupHeader)
    .then((response) => {
      console.log(response.data);
      authenticatingMasterCounselor(counselor, dispatch);
    })
    .catch((error) => {
      logWarn(FILE_NAME, '',
        `Request result in an ${error}`);
    });
};
