import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { SET_COUNSELOR,
  LOGIN_SUCCESS, LOGIN_FAIL,
  MODIFY_CPF, LOADING,
  MODIFY_PASSWORD } from './types';


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

export const asyncCreateCounselor = userData => (dispatch) => {
  console.log(userData);
  axios.post('http://merenda-mais.herokuapp.com/counselor/', userData)
    .then((response) => {
      console.log(response.data);
      dispatch(setCounselor(response));
      Actions.loginConselheiro();
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
      dispatch(setCounselor(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const loginSuccess = (dispatch, id) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: id,
  });
  Actions.profileInfoScreen();
};

const loginFail = (dispatch) => {
  dispatch({
    type: LOGIN_FAIL,
  });
};

export const asyncLoginCounselor = userData => (dispatch) => {
  console.log('userData:');
  console.log(userData);
  dispatch({
    type: LOADING,
  });
  axios.post('http://merenda-mais.herokuapp.com/get_auth_token/', userData)
    .then((response) => {
      console.log(response.data);
      loginSuccess(dispatch, response.data.id);
    })
    .catch((erro) => {
      console.log(erro);
      loginFail(dispatch);
    });
};
