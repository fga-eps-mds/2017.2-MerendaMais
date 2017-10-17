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

export const asyncEditCounselor = counselorData => (dispatch) => {
  console.log('counselorActions: ');
  console.log(counselorData);

  axios.patch(`http://merenda-mais.herokuapp.com/counselor/${counselorData.id}/`, {
    email: counselorData.email,
    phone: counselorData.phone,
    name: counselorData.name,
  })
    .then((response) => {
      console.log(response.data);
      dispatch(setCounselor(response.data));
      Actions.profileInfo();
    })
    .catch((error) => {
      console.log(error);
    });
};

// These two functions are wrong. They are not pure actions.

const loginSuccess = (dispatch, id) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: id,
  });
  Actions.updateInfo();
};

const loginFail = (dispatch) => {
  dispatch({
    type: LOGIN_FAIL,
  });
};

// This action bellow must be refactored to dispatch setCounselor. We must update the store.

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
      // This was supposed to be a dispatch. Like this :
      // dispatch(setCounselor(response.data))
    })
    .catch((erro) => {
      console.log(erro);
      loginFail(dispatch);
    });
};
