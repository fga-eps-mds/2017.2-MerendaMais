import axios from 'axios';
import { SET_LIST_COUNSELOR_GROUP,
  RESET_LIST,
  SET_PENDING_SCHEDULE_LIST,
  SET_EXPIRED_SCHEDULE_LIST,
  SET_ALREADY_INPECTIONED_SCHEDULE_LIST,
  SET_VISIT_NEW_LISTS,
  SET_MEETING_NEW_LISTS,
  SET_CHECKED_LIST,
  SET_NOT_CHECKED_LIST } from './types';
import { logWarn } from '../../logConfig/loggers';
import { APP_IDENTIFIER,
  DEFAULT_GROUP_LINK_NUVEM_CIVICA,
  DEFAULT_USER_LINK_NUVEM_CIVICA } from '../constants/generalConstants';

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

export const setVisitNewLists = newList => ({
  type: SET_VISIT_NEW_LISTS,
  payload: newList,
});

export const setMeetingNewLists = meetingNewList => ({
  type: SET_MEETING_NEW_LISTS,
  payload: meetingNewList,
});

export const setlistOfCheckedCounselors = checkedCounselor => ({
  type: SET_CHECKED_LIST,
  payload: checkedCounselor,
});

export const setlistOfNotCheckedCounselors = notCheckedCounselor => ({
  type: SET_NOT_CHECKED_LIST,
  payload: notCheckedCounselor,
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

      completeCounselorInformations.profile = profile;

      if (profile.cpf !== CPF) {
        dispatch(setList(completeCounselorInformations));

        if (completeCounselorInformations.profile.presidentChecked) {
          dispatch(setlistOfCheckedCounselors(completeCounselorInformations));
        } else {
          dispatch(setlistOfNotCheckedCounselors(completeCounselorInformations));
        }
      }
    })
    .catch((error) => {
      logWarn(FILE_NAME, '',
        `Request result in an ${error} nuvem code ${nuvemCode}`);
    });
};

const getCounselor = (counselorLink, linkWithCodMembro, CPF, dispatch) => {
  axios.get(counselorLink)
    .then((response) => {
      const auxCodMembro = linkWithCodMembro.substr(linkWithCodMembro.indexOf('membros/'));
      const codMembro = auxCodMembro.substr(8);
      const counselorInformations = {
        nuvemCode: response.data.cod,
        name: response.data.nomeCompleto,
        codMembro,
        profile: {},
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
      for (let i = 0; i < response.data.length; i += 1) {
        getCounselor(response.data[i].links[1].href, response.data[i].links[0].href, CPF, dispatch);
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
