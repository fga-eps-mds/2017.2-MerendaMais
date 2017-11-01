import axios from 'axios';
import { Alert } from 'react-native';
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
      appIdentifier: APP_IDENTIFIER,
      appToken: visitData.appToken,
    },
  };

  const stringVisit = convertingVisitJSONToString(visitData.visit);

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
        codTipoPostagem: 381,
      },
    },
  };

  axios.post(POSTS_LINK_NUVEM_CIVICA, bodyToSchedulingVisit, headerToSchedulingVisit)
    .then((response) => {
      logInfo(FILE_NAME, 'schedulingVisit',
        `User data of Counselor edited: ${JSON.stringify(response.data, null, 2)}`);
      Alert.alert('Agendamento realizado com sucesso');
    })
    .catch((error) => {
      logWarn(FILE_NAME, 'schedulingVisit',
        `Request result in an ${error}`);

      treatingPostsError(error);
    });
};

const asyncSchedulingVisit = visitData => () => {
  logInfo(FILE_NAME, 'asyncSchedulingVisit',
    `scheduling visit data: ${JSON.stringify(visitData, null, 2)}`);

  schedulingVisit(visitData);
};

export default asyncSchedulingVisit;
