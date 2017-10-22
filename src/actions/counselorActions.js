import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { SET_COUNSELOR,
  LOGIN_SUCCESS, LOGIN_FAIL,
  MODIFY_CPF, LOADING,
  MODIFY_PASSWORD, SET_TOKEN } from './types';
import { logInfo } from '../../logConfig/loggers';

const FILE_NAME = 'counselorActions.js';

export const modifyCPF = CPF => ({
  type: MODIFY_CPF,
  payload: CPF,
});

export const modifyPassword = password => ({
  type: MODIFY_PASSWORD,
  payload: password,
});

export const setCounselor = counselor => ({
  type: SET_COUNSELOR,
  counselor,
});

export const loading = () => ({
  type: LOADING,
});

export const loginSuccess = counselor => ({
  type: LOGIN_SUCCESS,
  counselor,
});

export const loginFail = () => ({
  type: LOGIN_FAIL,
});

export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});

export const asyncCreateCounselor = userData => (dispatch) => {
  console.log(userData);
  axios.post('http://merenda-mais.herokuapp.com/counselor/', userData)
    .then((response) => {
      console.log(response.data);
      dispatch(setCounselor(response.data));
      Actions.loginCounselorScreen();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const asyncGetCounselor = id => (dispatch) => {
  console.log(id);
  axios.get(`http://merenda-mais.herokuapp.com/counselor/${id}`)
    .then((response) => {
      console.log(response.data);
      response.data = { ...response.data, id };
      dispatch(setCounselor(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const asyncEditCounselor = counselorData => (dispatch) => {
  console.log('counselorActions: ');
  console.log(counselorData);

  axios.patch(`http://merenda-mais.herokuapp.com/counselor/${counselorData.id}/`, {
    email: counselorData.email,
    phone: counselorData.phone,
    name: counselorData.name,
  })
    .then((response) => {
      console.log('counselorActions: ');
      console.log(response.data);
      const responseWithId = {
        ...response.data,
        id: counselorData.id,
      };
      dispatch(setCounselor(responseWithId));
      Actions.profileInfoScreen();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const asyncLoginCounselor = userData => (dispatch) => {
  logInfo(FILE_NAME,
    'asyncLoginCounselor',
    `userData received from LoginCounselorScreen: ${JSON.stringify(userData)}`);

  const Header = {
    headers: {
      email: userData.email,
      senha: userData.password },
  };

  dispatch(loading());
  axios.get('http://mobile-aceite.tcu.gov.br:80/appCivicoRS/rest/pessoas/autenticar', Header)
    .then((response) => {
      logInfo(FILE_NAME,
        'asyncLoginCounselor',
        `Token received from Nuvem Cívica ${response.headers.apptoken}`);
      dispatch(setToken(response.headers.apptoken));
      dispatch(loginSuccess(response.data));
      Actions.mainScreen();
    })
    .catch((erro) => {
      console.log(erro);
      dispatch(loginFail());
    });
};
