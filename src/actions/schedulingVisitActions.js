import axios from 'axios';
import { Alert } from 'react-native';
import Communications from 'react-native-communications';
import { Actions } from 'react-native-router-flux';
import { logInfo, logWarn } from '../../logConfig/loggers';
import { convertingJSONToString } from './counselorActions';
import { isLoading, isNotLoading } from './applicationActions';
import ShowToast from '../components/Toast';
import {
  SET_CURRENT_INSPECTION,
} from './types';
import {
  APP_IDENTIFIER,
  POSTS_LINK_NUVEM_CIVICA,
  VISIT_POSTING_TYPE_CODE,
  INTERNAL_ERROR,
} from '../constants/generalConstants';
import {
  setPendingScheduleList,
  setExpiredScheduleList,
  setAlreadyInspectionedScheduleList,
  resetList,
  setPendingInvitedScheduleList,
} from './listActions';
import {
  GET_VISIT_SCHEDULE_CONTENT_ERROR,
  GET_VISIT_SCHEDULE_POST_LIST_ERROR,
  GET_CURRENT_SCHEDULE_ERROR,
  UPDATE_CURRENT_SCHEDULE_ERROR,
} from '../constants/errorConstants';
import * as constant from '../constants/sendAgentEmail';
import { authenticatingMasterCounselor } from './ManagerRegisterActions';

const FILE_NAME = 'schedulingVisitActions.js';

export const errorGenerator = (name, status) =>
  new Error(`{ "name": "${name}", "status": ${JSON.stringify(status)} }`);

export const setCurrentInspection = visitSchedule => ({
  type: SET_CURRENT_INSPECTION,
  payload: visitSchedule,
});


// Trating request errors
const treatingGetVisitSchedulePostListError = (status) => {
  if (status === 500) {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingGetVisitSchedulePostListError',
      `Nuvem Cívica Internal Server Error - Error code received in request - ${status}`);
  } else if (status === 400) {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingGetVisitSchedulePostListError',
      `Bad Request, some attribute was wrongly passed - Error code received in request - ${status}`);
  } else {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingGetVisitSchedulePostListError',
      `Unknown error - Error code received in request - ${status}`);
  }
};

// Trating request errors
const treatingGetVisitScheduleContentError = (status) => {
  if (status === 500) {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingGetVisitScheduleContentError',
      `Nuvem Cívica Internal Server Error - Error code received in request - ${status}`);
  } else if (status === 400) {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingGetVisitScheduleContentError',
      `Bad Request, some attribute was wrongly passed - Error code received in request - ${status}`);
  } else if (status === 404) {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingGetVisitScheduleContentError',
      `Post or Content not found with this params - Error code received in request - ${status}`);
  } else {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingGetVisitScheduleContentError',
      `Unknown error - Error code received in request - ${status}`);
  }
};

// Used in Async Action to Get All Post Visit Schedules
export const convertingContentStringToJSON = (contentStringSingleQuote) => {
  // Changing ' to " in string received from Nuvem Civica.
  const contentStringDoubleQuote = contentStringSingleQuote.replace(/'/g, '"');

  // Converting content string to content JSON.
  const contentJSON = JSON.parse(contentStringDoubleQuote);

  return contentJSON;
};

// Verify the date of the visit schedule to set expired or not.
const verifyDate = (visitSchedule) => {
  const date = new Date();
  const systemDay = date.getDate();
  const systemMonth = date.getMonth() + 1;
  const systemYear = date.getFullYear();

  const daySchedule = visitSchedule.content.date.substr(0, 2);
  const monthSchedule = visitSchedule.content.date.substr(3, 2);
  const yearSchedule = visitSchedule.content.date.substr(6);

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

// Put each visit schedule in its respective list (pending, expired or inspected).
const defineScheduleStatus = (visitSchedule, counselor, dispatch) => {
  if (visitSchedule.content.visitListOfInvitees[counselor.nuvemCode] !== undefined) {
    if (visitSchedule.content.visitListOfInvitees[counselor.nuvemCode].realizedVisit) {
      dispatch(setAlreadyInspectionedScheduleList(visitSchedule));
    } else if (verifyDate(visitSchedule)) {
      dispatch(setExpiredScheduleList(visitSchedule));
    } else {
      dispatch(setPendingScheduleList(visitSchedule));
      dispatch(setPendingInvitedScheduleList(visitSchedule));
    }
  } else if (visitSchedule.content.visitListOfInvitees[counselor.nuvemCode] === undefined) {
    if (verifyDate(visitSchedule)) {
      dispatch(setExpiredScheduleList(visitSchedule));
    } else {
      dispatch(setPendingScheduleList(visitSchedule));
    }
  }
};

// Used in Async Action to Get All Post Visit Schedules
export const getVisitScheduleContent = async (contentLink, counselor, dispatch) => {
  logInfo(FILE_NAME, 'getVisitScheduleContent', `${counselor}`);
  const getContentHeader = {
    headers: {
      appToken: counselor.token,
    },
  };

  try {
    const response = await axios.get(contentLink, getContentHeader);

    logInfo(FILE_NAME, 'getVisitScheduleContent',
      `Content of one visit schedule post: ${JSON.stringify(response.data, null, 2)}`);

    const visitSchedule = {
      codPostagem: response.data.postagem.codPostagem,
      codConteudoPost: response.data.codConteudoPost,
      content: convertingContentStringToJSON(response.data.JSON),
    };

    defineScheduleStatus(visitSchedule, counselor, dispatch);

    return visitSchedule;
  } catch (error) {
    logWarn(FILE_NAME, 'getVisitScheduleContent',
      `Request result in an ${error}`);

    throw errorGenerator(GET_VISIT_SCHEDULE_CONTENT_ERROR, error.response.status);
  }
};

// Used in Async Action to Get All Post Visit Schedules
export const getVisitSchedulePostList = async (getScheduleParamsAndHeader) => {
  try {
    const response = await axios.get(POSTS_LINK_NUVEM_CIVICA, getScheduleParamsAndHeader);

    logInfo(FILE_NAME, 'getVisitSchedulePostList',
      `List of Schedules without content: ${JSON.stringify(response.data, null, 2)}`);

    return response;
  } catch (error) {
    logWarn(FILE_NAME, 'getVisitSchedulePostList',
      `Request result in an ${error}`);

    throw errorGenerator(GET_VISIT_SCHEDULE_POST_LIST_ERROR, error.response.status);
  }
};

export const visitScheduleActionsAuxiliary = {
  getVisitSchedulePostList,
  getVisitScheduleContent,
};

// Assync action to get all post visit schedules
export const asyncGetSchedule = counselor => async (dispatch) => {
  // Setting state loading true, to activate the loading spin.
  dispatch(isLoading());

  dispatch(resetList());

  // Params to get all scheduling posts of current counselor group.
  const getScheduleParamsAndHeader = {
    params: {
      codGrupoDestino: counselor.profile.codGroup,
      codTiposPostagem: VISIT_POSTING_TYPE_CODE,
    },
    headers: {
      appToken: counselor.token,
    },
  };

  try {
    const visitSchedulePostList =
      await visitScheduleActionsAuxiliary.getVisitSchedulePostList(getScheduleParamsAndHeader);

    const visitScheduleContentList = [];
    // Get the content for each visit schedule post in list and organize then.
    for (let i = 0; i < visitSchedulePostList.data.length; i += 1) {
      visitScheduleContentList.push(
        visitScheduleActionsAuxiliary.getVisitScheduleContent(
          visitSchedulePostList.data[i].conteudos[0].links[0].href,
          counselor,
          dispatch),
      );
    }


    // Wait all visit schedules are put on their respective lists.
    await Promise.all(visitScheduleContentList);
  } catch (error) {
    logInfo(FILE_NAME, 'asyncGetSchedule',
      `Error while getting schedules: ${error}`);
    const errorJson = JSON.parse(error.message);
    switch (errorJson.name) {
      case GET_VISIT_SCHEDULE_CONTENT_ERROR:
        treatingGetVisitScheduleContentError(error);
        break;
      case GET_VISIT_SCHEDULE_POST_LIST_ERROR:
        treatingGetVisitSchedulePostListError(error);
        break;
      default:
        dispatch(isNotLoading());
        break;
    }
  }

  dispatch(isNotLoading());
  Actions.refresh();
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

const sendEmailAlert = (visitData, counselor) => {
  const agentEmail = (visitData.visit.agentEmail);
  const CAEUf = counselor.profile.CAE_UF.substr(0, 2);
  const emailBody = `Prezado (a) Senhor(a),\n
Trata-se da solicitação de um Auditor da Vigilância Sanitária, a fim de acompanhar os Conselheiros do Conselho de Alimentação Escolar pertencente ao(à) ${counselor.profile.CAE}, em visita técnica a realizar-se em ${visitData.visit.date}, na instituição escolar ${visitData.visit.schoolName}, em cumprimento à Lei nº 11.947, de 16 de junho de 2009 - que dispõe sobre o atendimento da alimentação escolar.\n
Atenciosamente,
${counselor.name}
Representando ${counselor.profile.segment} do CAE – ${counselor.profile.CAE}\n
Conselho de Alimentação Escolar do Estado – CAE/${CAEUf}`;

  Communications.email(
    // To, cc, bcc, subject, email text
    [agentEmail],
    null,
    null,
    constant.EMAIL_SUBJECT,
    emailBody);
};


const schedulingVisit = (visitData, counselor) => {
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

  axios.post(`${POSTS_LINK_NUVEM_CIVICA}/conteudos`, bodyToSchedulingVisit, headerToSchedulingVisit)
    .then((response) => {
      logInfo(FILE_NAME, 'schedulingVisit',
        `Scheduling made in Nuvem cívica: ${JSON.stringify(response.data, null, 2)}`);
      if (visitData.visit.invitedAgent) {
        sendEmailAlert(visitData, counselor);
      }
      Alert.alert(
        'Agendamento Realizado',
        'O agendamento foi realizado com sucesso! Caso tenha convidado um agente, seu aplicativo de email abrirá.',
        [
          { text: 'Ok', onPress: () => Actions.mainScreen(), style: 'cancel' },
        ],
        { cancelable: false });
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'schedulingVisit',
        `Request result in an ${error}`);

      treatingPostsError(error);
    });
};

export const asyncSchedulingVisit = (visitData, counselor) => () => {
  logInfo(FILE_NAME, 'asyncSchedulingVisit',
    `Scheduling visit data: ${JSON.stringify(visitData, null, 2)}`);
  logInfo(FILE_NAME, 'asyncSchedulingVisit',
    `Scheduling counselor data: ${JSON.stringify(counselor, null, 2)}`);

  schedulingVisit(visitData, counselor);
};

export const asyncUpdateSchedule = postData => async (dispatch) => {
  logInfo(FILE_NAME, 'asyncUpdateSchedule',
    `Scheduling visit data: ${JSON.stringify(postData, null, 2)}`);

  dispatch(isLoading());

  const newContentJSON = postData.content;

  const newContentString = convertingJSONToString(newContentJSON);

  const MASTER_TOKEN = await authenticatingMasterCounselor();

  // Change this token to the master token.
  const putScheduleHeader = {
    headers: {
      appToken: MASTER_TOKEN,
    },
  };

  const putScheduleBody = {
    JSON: newContentString,
    texto: 'Agendamento',
  };

  logInfo(FILE_NAME, 'asyncUpdateSchedule', `JSON sent to update schedule ${JSON.stringify(putScheduleBody)}`);

  try {
    const response = await axios.put(
      `${POSTS_LINK_NUVEM_CIVICA}/${postData.codPostagem}/conteudos/${postData.codConteudoPost}`,
      putScheduleBody,
      putScheduleHeader);
    logInfo(FILE_NAME, 'asyncUpdateSchedule', response.data);
  } catch (error) {
    logWarn(FILE_NAME, 'asyncUpdateSchedule', error.stack);
    throw errorGenerator(UPDATE_CURRENT_SCHEDULE_ERROR, error.response.status);
  }

  dispatch(isNotLoading());
};


export const asyncGetCurrentSchedule = getData => async (dispatch) => {
  logInfo(FILE_NAME, 'asyncGetCurrentSchedule', `Received data: ${JSON.stringify(getData)}`);

  const header = {
    headers: {
      appToken: getData.appToken,
    },
  };

  const codPostagem = getData.codPostagem;
  const codConteudoPost = getData.codConteudoPost;

  try {
    const response = await axios.get(`${POSTS_LINK_NUVEM_CIVICA}/${codPostagem}/conteudos/${codConteudoPost}`, header);

    logInfo(FILE_NAME, 'asyncGetCurrentSchedule', `Response data: ${JSON.stringify(response.data)}`);

    const currentInspection = {
      codPostagem: response.data.postagem.codPostagem,
      codConteudoPost: response.data.codConteudoPost,
      content: convertingContentStringToJSON(response.data.JSON),
    };

    logInfo(FILE_NAME, 'asyncGetCurrentSchedule', `Current inspection ${JSON.stringify(currentInspection)}`);

    dispatch(setCurrentInspection(currentInspection));
  } catch (error) {
    logWarn(FILE_NAME, 'GetCurrentSchedule', JSON.stringify(error.response));
    throw errorGenerator(GET_CURRENT_SCHEDULE_ERROR, error.response.status);
  }
};

export default asyncSchedulingVisit;
