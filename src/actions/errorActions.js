import { logWarn } from '../../logConfig/loggers';
import ShowToast from '../components/Toast';
import { INTERNAL_ERROR } from '../constants/generalConstants';

const FILE_NAME = 'schedulingVisitActions.js';

// Trating request errors
export const treatingGetVisitSchedulePostListError = (status) => {
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
export const treatingGetVisitScheduleContentError = (status) => {
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


// Treating request errors
export const treatingPostsError = (error) => {
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
