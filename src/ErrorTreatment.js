import ShowToast from './components/Toast';
import { INTERNAL_ERROR, LOGIN_PROFILE_ERROR } from './constants/generalConstants';
import { logWarn } from '../logConfig/loggers';

const FILE_NAME = 'ErrorTreatment';

// Trating request errors
export const treatingEditCounselorError = (status) => {
  if (status === 401) {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingEditCounselorError',
      `Unauthorized according to the Nuvem - Error code received in request - ${status}`);
  } else if (status === 403) {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingEditCounselorError',
      `Forbidden according to the Nuvem - Error code received in request - ${status}`);
  } else if (status === 404) {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingEditCounselorError',
      `Not Found according to the Nuvem - Error code received in request - ${status}`);
  } else {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingEditCounselorError',
      `Unknown error - Error code received in request - ${status}`);
  }
};


// Trating request errors
export const treatingGetUserProfileInLoginError = (status) => {
  if (status === 404) {
    ShowToast.Toast(LOGIN_PROFILE_ERROR);
    logWarn(FILE_NAME, 'treatingGetUserProfileInLoginError',
      `User isn't register in application or Profile didn't find for this user - Error code received in request - ${status}`);
  } else if (status === 500) {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingGetUserProfileInLoginError',
      `Nuvem Cívica Internal Server Error - Error code received in request - ${status}`);
  } else if (status === 400) {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingGetUserProfileInLoginError',
      `Bad Request, some attribute was wrongly passed - Error code received in request - ${status}`);
  } else {
    ShowToast.Toast(INTERNAL_ERROR);
    logWarn(FILE_NAME, 'treatingGetUserProfileInLoginError',
      `Unknown error - Error code received in request - ${status}`);
  }
};
