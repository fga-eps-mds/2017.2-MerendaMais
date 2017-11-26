import axios from 'axios';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { logInfo, logWarn } from '../../logConfig/loggers';
import { convertingJSONToString } from './counselorActions';
import { APP_IDENTIFIER, POSTS_LINK_NUVEM_CIVICA, MEETING_POSTING_TYPE_CODE } from '../constants';
import { SET_MEETING_LOCATION_LONGITUDE, SET_MEETING_LOCATION_LATITUDE } from './types';

const FILE_NAME = 'schedulingMeetingActions.js';

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

const schedulingMeeting = (meetingData) => {
  const headerToSchedulingMeeting = {
    headers: {
      appIdentifier: APP_IDENTIFIER,
      appToken: meetingData.appToken,
    },
  };

  // Adding the author of the schedule to the list of invitees
  const authorsNuvemCode = meetingData.nuvemCode;
  const meetingDataWithAuthor = meetingData.meeting;

  meetingDataWithAuthor.meetingListOfInvitees[authorsNuvemCode] = {
    nuvemCode: authorsNuvemCode,
    confirmed: true,
  };

  const stringMeeting = convertingJSONToString(meetingData.meeting);

  const bodyToSchedulingMeeting = {
    conteudo: {
      JSON: stringMeeting,
      texto: 'Agendamento de reunião',
    },
    postagem: {
      autor: {
        codPessoa: meetingData.nuvemCode,
      },
      tipo: {
        codTipoPostagem: MEETING_POSTING_TYPE_CODE,
      },
    },
  };

  axios.post(POSTS_LINK_NUVEM_CIVICA, bodyToSchedulingMeeting, headerToSchedulingMeeting)
    .then((response) => {
      logInfo(FILE_NAME, 'schedulingMeeting',
        `Scheduling made in Nuvem cívica: ${JSON.stringify(response.data, null, 2)}`);
      Alert.alert('Agendamento realizado com sucesso');
      Actions.mainScreen();
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'schedulingMeeting',
        `Request result in an ${error}`);

      treatingPostsError(error);
    });
};

const asyncSchedulingMeeting = meetingData => () => {
  logInfo(FILE_NAME, 'asyncSchedulingMeeting',
    `Scheduling meeting data: ${JSON.stringify(meetingData, null, 2)}`);

  schedulingMeeting(meetingData);
};


export default asyncSchedulingMeeting;

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
