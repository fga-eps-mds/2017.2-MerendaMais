import axios from 'axios';
import Communications from 'react-native-communications';
import { Actions } from 'react-native-router-flux';
import { logInfo, logWarn } from '../../logConfig/loggers';
import { convertingJSONToString } from './counselorActions';
import {
  APP_IDENTIFIER,
  POSTS_LINK_NUVEM_CIVICA,
  VISIT_POSTING_TYPE_CODE } from '../constants/generalConstants';
import { setPendingScheduleList,
  setExpiredScheduleList,
  setAlreadyInspectionedScheduleList,
  resetList } from './listActions';

const FILE_NAME = 'schedulingVisitActions.js';

const convertingContentStringToJSON = (profileStringSingleQuote) => {
  // Changing ' to " in string received from Nuvem Civica.
  const profileStringDoubleQuote = profileStringSingleQuote.replace(/'/g, '"');

  // Converting profile string to profile JSON.
  const profileJSON = JSON.parse(profileStringDoubleQuote);

  return profileJSON;
};

const verifyDate = (schedule) => {
  const date = new Date();
  const systemDay = date.getDate();
  const systemMonth = date.getMonth() + 1;
  const systemYear = date.getFullYear();

  const daySchedule = schedule.date.substr(0, 2);
  const monthSchedule = schedule.date.substr(3, 2);
  const yearSchedule = schedule.date.substr(6);

  if (yearSchedule < systemYear) {
    return true;
  } else if (yearSchedule > systemYear) {
    return false;
  }
  if (monthSchedule < systemMonth) {
    return true;
  } else if (monthSchedule > systemMonth) {
    return false;
  }
  if (daySchedule < systemDay) {
    return true;
  }
  return false;
};


const defineScheduleStatus = (schedule, counselor, dispatch) => {
  if (schedule.listOfInvitees[counselor.nuvemCode] !== undefined) {
    if (schedule.listOfInvitees[counselor.nuvemCode].realizedVisit) {
      dispatch(setAlreadyInspectionedScheduleList(schedule));
    } else if (verifyDate(schedule)) {
      dispatch(setExpiredScheduleList(schedule));
    } else {
      dispatch(setPendingScheduleList(schedule));
    }
  } else if (schedule.listOfInvitees[counselor.nuvemCode] === undefined) {
    if (verifyDate(schedule)) {
      dispatch(setExpiredScheduleList(schedule));
    } else {
      dispatch(setPendingScheduleList(schedule));
    }
  }
};

const getContent = (contentLink, counselor, dispatch) => {
  const getContentHeader = {
    headers: {
      appToken: counselor.token,
    },
  };
  axios.get(contentLink, getContentHeader)
    .then((response) => {
      logInfo(FILE_NAME, 'asyncGetSchedule',
        `List of Schedules: ${JSON.stringify(response.data, null, 2)}`);
      const content = convertingContentStringToJSON(response.data.JSON);
      defineScheduleStatus(content, counselor, dispatch);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'schedulingVisit',
        `Request result in an ${error}`);
    });
};

export const asyncGetSchedule = counselor => (dispatch) => {
  dispatch(resetList());

  const getScheduleParamsAndHeader = {
    params: {
      codGrupoDestino: counselor.profile.codGroup,
    },
    headers: {
      appToken: counselor.token,
    },
  };

  axios.get(POSTS_LINK_NUVEM_CIVICA, getScheduleParamsAndHeader)
    .then((response) => {
      logInfo(FILE_NAME, 'asyncGetSchedule',
        `List of Schedules: ${JSON.stringify(response.data, null, 2)}`);
      for (let i = 0; i < response.data.length; i += 1) {
        getContent(response.data[i].conteudos[0].links[0].href, counselor, dispatch);
      }
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'schedulingVisit',
        `Request result in an ${error}`);
    });
};

// Treating request errors
const treatingPostsError = (error) => {
  if (error.response.status === 401) {
    logWarn(FILE_NAME, 'treatingPostsError',
      `Unauthorized according to the Nuvem - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 403) {
    logWarn(FILE_NAME, 'treatingPostsError',
      `Forbidden according to the Nuvem - Error code received in request - ${error.response.status}`);
  } else if (error.response.status === 404) {
    logWarn(FILE_NAME, 'treatingPostsError',
      `Not Found according to the Nuvem - Error code received in request - ${error.response.status}`);
  } else {
    logWarn(FILE_NAME, 'treatingPostsError',
      `Unknown error - Error code received in request - ${error.response.status}`);
  }
};


const sendEmailAlert = (visitData) => {
  const agentEmail = (visitData.visit.agentEmail);
  if (visitData.visit.invitedAgent) {
    Communications.email(
    // To, cc, bcc, subject, email text
      [agentEmail],
      null,
      null,
      'Subject',
      'Email Body text');
  }
  Actions.mainScreen();
};


const schedulingVisit = (visitData) => {
  const headerToSchedulingVisit = {
    headers: {
      appIdentifier: APP_IDENTIFIER,
      appToken: visitData.appToken,
    },
  };

  // Adding the author of the schedule to the list of invitees
  const authorsNuvemCode = visitData.nuvemCode;
  const visitDataWithAuthor = visitData.visit;

  visitDataWithAuthor.visitListOfInvitees[authorsNuvemCode] = {
    nuvemCode: authorsNuvemCode,
    confirmed: true,
    realizedVisit: false,
  };

  const stringVisit = convertingJSONToString(visitData.visit);

  const bodyToSchedulingVisit = {
    conteudo: {
      JSON: stringVisit,
      texto: 'Agendamento',
    },
    postagem: {
      autor: {
        codPessoa: visitData.nuvemCode,
      },
      tipo: {
        codTipoPostagem: VISIT_POSTING_TYPE_CODE,
      },
      codGrupoDestino: visitData.codGrupoDestino,
    },
  };

  axios.post(`${POSTS_LINK_NUVEM_CIVICA}conteudos`, bodyToSchedulingVisit, headerToSchedulingVisit)
    .then((response) => {
      logInfo(FILE_NAME, 'schedulingVisit',
        `Scheduling made in Nuvem cívica: ${JSON.stringify(response.data, null, 2)}`);
      sendEmailAlert(visitData);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'schedulingVisit',
        `Request result in an ${error}`);

      treatingPostsError(error);
    });
};

export const asyncSchedulingVisit = visitData => () => {
  logInfo(FILE_NAME, 'asyncSchedulingVisit',
    `Scheduling visit data: ${JSON.stringify(visitData, null, 2)}`);

  schedulingVisit(visitData);
};


export default asyncSchedulingVisit;
