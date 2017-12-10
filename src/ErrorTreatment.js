import ShowToast from './components/Toast';
import { INTERNAL_ERROR } from './constants/generalConstants';
import { logWarn } from '../logConfig/loggers';

const FILE_NAME = 'ErrorTreatment';

// Trating request errors
const treatingEditCounselorError = (status) => {
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

export default treatingEditCounselorError;
