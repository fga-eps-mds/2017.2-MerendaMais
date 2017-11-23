import axios from 'axios';
import { SET_LIST_COUNSELOR_GROUP,
  RESET_LIST,
  SET_NEW_LISTS,
  SET_PENDING_SCHEDULE_LIST,
  SET_EXPIRED_SCHEDULE_LIST,
  SET_ALREADY_INPECTIONED_SCHEDULE_LIST } from './types';
import { logInfo, logWarn } from '../../logConfig/loggers';
import { APP_IDENTIFIER,
  DEFAULT_GROUP_LINK_NUVEM_CIVICA,
  DEFAULT_USER_LINK_NUVEM_CIVICA } from '../constants';

const FILE_NAME = 'listActions.js';

export const setPendingScheduleList = scheduleList => ({
  type: SET_PENDING_SCHEDULE_LIST,
  payload: scheduleList,
});

export const setExpiredScheduleList = scheduleList => ({
  type: SET_EXPIRED_SCHEDULE_LIST,
  payload: scheduleList,
});

export const setAlreadyInspectionedScheduleList = scheduleList => ({
  type: SET_ALREADY_INPECTIONED_SCHEDULE_LIST,
  payload: scheduleList,
});

export const resetList = () => ({
  type: RESET_LIST,
});

export const setList = counselorInformations => ({
  type: SET_LIST_COUNSELOR_GROUP,
  payload: counselorInformations,
});

export const setNewLists = newList => ({
  type: SET_NEW_LISTS,
  payload: newList,
});

// Used in Async Action to Login Counselor
const convertingProfileStringToJSON = (profileStringSingleQuote) => {
  // Changing ' to " in string received from Nuvem Civica.
  const profileStringDoubleQuote = profileStringSingleQuote.replace(/'/g, '"');

  // Converting profile string to profile JSON.
  const profileJSON = JSON.parse(profileStringDoubleQuote);

  return profileJSON;
};

const getCounselorProfile = (counselorInformations, nuvemCode, CPF, dispatch) => {
  const getProfileHeader = {
    headers: {
      appIdentifier: APP_IDENTIFIER,
    },
  };
  axios.get(`${DEFAULT_USER_LINK_NUVEM_CIVICA}${nuvemCode}/perfil`, getProfileHeader)
    .then((response) => {
      const profile = convertingProfileStringToJSON(response.data.camposAdicionais);
      const completeCounselorInformations = counselorInformations;

      completeCounselorInformations.cpf = profile.cpf;
      completeCounselorInformations.phone = profile.phone;

      if (profile.cpf !== CPF) {
        dispatch(setList(counselorInformations));
      }
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'getCounselorProfile',
        `Request result in an ${error}`);
    });
};

const getCounselor = (counselorLink, CPF, dispatch) => {
  axios.get(counselorLink)
    .then((response) => {
      logInfo(FILE_NAME, 'getCounselor',
        `name of counselors: ${JSON.stringify(response.data.nomeCompleto, null, 2)}`);

      const counselorInformations = {
        nuvemCode: response.data.cod,
        name: response.data.nomeCompleto,
        cpf: '',
        phone: '',
      };
      getCounselorProfile(counselorInformations, response.data.cod, CPF, dispatch);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'getCounselor',
        `Request result in an ${error}`);
    });
};

const getCounselorFromGroup = (codGroup, CPF, dispatch) => {
  axios.get(`${DEFAULT_GROUP_LINK_NUVEM_CIVICA}${codGroup}/membros`)
    .then((response) => {
      logInfo(FILE_NAME, 'getCounselorFromGroup',
        `list of counselors: ${JSON.stringify(response.data[0], null, 2)}`);

      for (let i = 0; i < response.data.length; i += 1) {
        getCounselor(response.data[i].links[1].href, CPF, dispatch);
      }
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'getCounselorFromGroup',
        `Request result in an ${error}`);
    });
};

export const asyncGetCounselorFromGroup = (CAE, CPF) => (dispatch) => {
  dispatch(resetList());

  const paramsToNuvem = {
    params: {
      codAplicativo: APP_IDENTIFIER,
      descricao: CAE,
    },
  };

  axios.get(DEFAULT_GROUP_LINK_NUVEM_CIVICA, paramsToNuvem)
    .then((response) => {
      const codGroup = response.data[0].codGrupo;
      getCounselorFromGroup(codGroup, CPF, dispatch);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'asyncGetCounselorFromGroup',
        `Request result in an ${error}`);
    });
};
