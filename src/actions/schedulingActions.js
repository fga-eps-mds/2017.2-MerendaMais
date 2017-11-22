import axios from 'axios';
import Communications from 'react-native-communications';
import { Actions } from 'react-native-router-flux';
import { logInfo, logWarn } from '../../logConfig/loggers';
import { convertingJSONToString } from './counselorActions';
import { APP_IDENTIFIER, POSTS_LINK_NUVEM_CIVICA, POSTING_TYPE_CODE } from '../constants';
import { SET_MEETING_LOCATION_LONGITUDE, SET_MEETING_LOCATION_LATITUDE } from './types';

const FILE_NAME = 'SchedulingActions.js';

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

  visitDataWithAuthor.listOfInvitees[authorsNuvemCode] = {
    nuvemCode: authorsNuvemCode,
    confirmed: true,
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
        codTipoPostagem: POSTING_TYPE_CODE,
      },
    },
  };

  axios.post(POSTS_LINK_NUVEM_CIVICA, bodyToSchedulingVisit, headerToSchedulingVisit)
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

const asyncSchedulingVisit = visitData => () => {
  logInfo(FILE_NAME, 'asyncSchedulingVisit',
    `Scheduling visit data: ${JSON.stringify(visitData, null, 2)}`);

  schedulingVisit(visitData);
};


export default asyncSchedulingVisit;

export const setMeetingLocationLatitude = latitude => ({
  type: SET_MEETING_LOCATION_LATITUDE,
  payload: {
    latitude,
  },
});

export const setMeetingLocationLongitude = longitude => ({
  type: SET_MEETING_LOCATION_LONGITUDE,
  payload: {
    longitude,
  },
});
