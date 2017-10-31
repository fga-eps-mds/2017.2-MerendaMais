import axios from 'axios';
import { SET_LIST_COUNSELOR_GROUP } from './types';
import { logInfo, logWarn } from '../../logConfig/loggers';
import { APP_IDENTIFIER, DEFAULT_GROUP_LINK_NUVEM_CIVICA } from '../constants';

const FILE_NAME = 'listActions.js';

export const setList = counselorInformations => ({
  type: SET_LIST_COUNSELOR_GROUP,
  payload: counselorInformations,
});

const getCounselor = (counselorLink, dispatch) => {
  axios.get(counselorLink)
    .then((response) => {
      logInfo(FILE_NAME, 'getCounselor',
        `name of counselors: ${JSON.stringify(response.data.nomeCompleto, null, 2)}`);

      const counselorInformations = {
        nome: response.data.nomeCompleto,
      };
      dispatch(setList(counselorInformations));
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'getCounselor',
        `Request result in an ${error}`);
    });
};

const getCounselorFromGroup = (codGroup, dispatch) => {
  console.log(codGroup);
  axios.get(`${DEFAULT_GROUP_LINK_NUVEM_CIVICA}${codGroup}/membros`)
    .then((response) => {
      logInfo(FILE_NAME, 'getCounselorFromGroup',
        `list of counselors: ${JSON.stringify(response.data[0], null, 2)}`);

      for (let i = 0; i < response.data.length; i += 1) {
        getCounselor(response.data[i].links[1].href, dispatch);
      }
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'getCounselorFromGroup',
        `Request result in an ${error}`);
    });
};

export const asyncGetCounselorFromGroup = CAE => (dispatch) => {
  const paramsToNuvem = {
    params: {
      codAplicativo: APP_IDENTIFIER,
      descricao: CAE,
    },
  };

  axios.get(DEFAULT_GROUP_LINK_NUVEM_CIVICA, paramsToNuvem)
    .then((response) => {
      const codGroup = response.data[0].codGrupo;
      getCounselorFromGroup(codGroup, dispatch);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'asyncGetCounselorFromGroup',
        `Request result in an ${error}`);
    });
};
