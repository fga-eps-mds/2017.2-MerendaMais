import axios from 'axios';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { logInfo, logWarn } from '../../logConfig/loggers';
import { convertingJSONToString } from './counselorActions';
import { isLoading, isNotLoading } from './applicationActions';
import {
  APP_IDENTIFIER,
  POSTS_LINK_NUVEM_CIVICA,
  MEETING_POSTING_TYPE_CODE } from '../constants/generalConstants';
import { SET_MEETING_LOCATION_LONGITUDE, SET_MEETING_LOCATION_LATITUDE } from './types';
import { resetList, setScheduleMeetingList } from './listActions';

const FILE_NAME = 'schedulingMeetingActions.js';

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
  if (schedule.meetingListOfInvitees[counselor.nuvemCode] !== undefined) {
    if (!verifyDate(schedule)) {
      dispatch(setScheduleMeetingList(schedule));
    }
  }
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

const getContent = (contentLink, counselor, dispatch) => {
  const getContentHeader = {
    headers: {
      appToken: counselor.token,
    },
  };
  axios.get(contentLink, getContentHeader)
    .then((response) => {
      logInfo(FILE_NAME, 'asyncGetScheduleMeeting',
        `List of Schedules Meeting: ${JSON.stringify(response.data, null, 2)}`);
      const content = convertingContentStringToJSON(response.data.JSON);
      defineScheduleStatus(content, counselor, dispatch);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'schedulingMeeting',
        `Request result in an ${error}`);
    });
};

export const asyncGetScheduleMeeting = counselor => (dispatch) => {
  dispatch(resetList());

  const getScheduleParamsAndHeader = {
    params: {
      codAplicativo: APP_IDENTIFIER,
      codTiposPostagem: MEETING_POSTING_TYPE_CODE,
      codGrupoDestino: counselor.profile.codGroup,
    },
    headers: {
      appToken: counselor.token,
    },
  };

  axios.get(POSTS_LINK_NUVEM_CIVICA, getScheduleParamsAndHeader)
    .then((response) => {
      logInfo(FILE_NAME, 'asyncGetSchedule',
        `List of Schedules MEETING: ${JSON.stringify(response.data, null, 2)}`);
      for (let i = 0; i < response.data.length; i += 1) {
        getContent(response.data[i].conteudos[0].links[0].href, counselor, dispatch);
      }
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'schedulingMeeting',
        `Request result in an ${error}`);
    });
};

export const schedulingMeeting = (meetingData, dispatch) => {
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
      codGrupoDestino: meetingData.codGrupoDestino,
    },
  };

  axios.post(`${POSTS_LINK_NUVEM_CIVICA}conteudos`, bodyToSchedulingMeeting, headerToSchedulingMeeting)
    .then((response) => {
      logInfo(FILE_NAME, 'schedulingMeeting',
        `Scheduling made in Nuvem cívica: ${JSON.stringify(response.data, null, 2)}`);
      Alert.alert('Agendamento realizado com sucesso');
      dispatch(isNotLoading());
      Actions.mainScreen();
    })
    .catch((response, error) => {
      logWarn(FILE_NAME, 'schedulingMeeting',
        `Request result in an ${error}`);

      treatingPostsError(error);

      dispatch(isNotLoading());
    });
};

const asyncSchedulingMeeting = meetingData => (dispatch) => {
  logInfo(FILE_NAME, 'asyncSchedulingMeeting',
    `Scheduling meeting data: ${JSON.stringify(meetingData, null, 2)}`);

  dispatch(isLoading());

  schedulingMeeting(meetingData, dispatch);
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
