import axios from 'axios';
// import { Actions } from 'react-native-router-flux';
import { logInfo, logWarn } from '../../logConfig/loggers';
import { APP_IDENTIFIER, POSTS_LINK_NUVEM_CIVICA } from '../constants';

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

// Used in Async Action to Scheduling Visit
const convertingVisitJSONToString = (visitJSON) => {
  // Converting visit JSON to visit string received from Nuvem Civica.
  const visitStringDoubleQuote = JSON.stringify(visitJSON);

  // Changing " to '.
  const visitStringSingleQuote = visitStringDoubleQuote
    .replace(/"/g, "'")
    .replace(/codSchool/g, 'codEscola')
    .replace(/date/g, 'dataVisita')
    .replace(/time/g, 'horario');

  return visitStringSingleQuote;
};

const schedulingVisit = (visitData) => {
  const headerToSchedulingVisit = {
    headers: {
      appToken: visitData.token,
      appIdentifier: APP_IDENTIFIER,
    },
  };

  const bodyToSchedulingVisitPost = {
    autor: {
      codPessoa: visitData.nuvemCode,
    },
    tipo: {
      codTipoPostagem: 381,
    },
  };

  const stringVisit = convertingVisitJSONToString(visitData.visit);

  const bodyToSchedulingVisitContent = {
    JSON: stringVisit,
    texto: 'Agendamento',

  };

  axios.post(POSTS_LINK_NUVEM_CIVICA, bodyToSchedulingVisitPost, headerToSchedulingVisit)
    .then((response) => {
      logInfo(FILE_NAME, 'schedulingVisit',
        `User data of Counselor edited: ${JSON.stringify(response.data, null, 2)}`);

      axios.post(`${POSTS_LINK_NUVEM_CIVICA}${visitData.nuvemCode}`, bodyToSchedulingVisitContent, headerToSchedulingVisit);
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'schedulingVisit',
        `Request result in an ${error}`);

      treatingPostsError(error);
    });
};


const asyncSchedulingVisit = visitData => (dispatch) => {
  logInfo(FILE_NAME, 'asyncSchedulingVisit',
    `scheduling visit data: ${JSON.stringify(visitData, null, 2)}`);

  schedulingVisit(visitData, dispatch);
};

export default asyncSchedulingVisit;
