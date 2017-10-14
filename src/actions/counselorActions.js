import axios from 'axios';
import { CREATE_COUNSELOR, SET_COUNSELOR, LOGIN_SUCCESS, LOGIN_FAIL, MODIFY_CPF, LOADING, MODIFY_PASSWORD, CREATE_SUCCESS } from './types.js';
import { Actions } from 'react-native-router-flux';

export const modifyCPF = (CPF) => {
    return{
        type: MODIFY_CPF,
        payload: CPF
    }
}

export const modifyPassword = (password) => {
    return{
        type: MODIFY_PASSWORD,
        payload: password
    }
}

export const asyncCreateCounselor = (userData) => {
    return(dispatch) =>{
        console.log(userData);
        type: SET_COUNSELOR;
        axios.post('http://merenda-mais.herokuapp.com/counselor/', userData)
        .then((response) => {
            console.log(response.data);
            Actions.loginCounselorScreen();
        })
        .catch(error => {
            console.log(error);
        })
    }
}


export const asyncGetCounselor = (id) => {
    return(dispatch) =>{
        console.log(id);
        axios.get(`http://merenda-mais.herokuapp.com/counselor/${id}`)
        .then((response) => {
            console.log(response.data);
            dispatch(setCounselor(response.data))
        })
        .catch(error => {
            console.log(error);
        })
    }
}

export const setCounselor = (counselor) => {
    return {
        type: SET_COUNSELOR,
        counselor
    }
}

export const loading = () => {
  return {
    type: LOADING,
  }
}

  const loginSuccess = (counselor) => {
    return {    type: LOGIN_SUCCESS,
              counselor
        }
  }

  const loginFail = (dispatch) => {
    return{
          type: LOGIN_FAIL,
        }
  }

export const asyncLoginCounselor = (userData) => {
    return(dispatch) => {
      console.log("userData: "),
      console.log(userData),
        dispatch (loading())
        axios.post('http://merenda-mais.herokuapp.com/get_auth_token/', userData)
        .then((response) => {
          console.log(response.data);
 dispatch(loginSuccess(response.data));
Actions.profileInfoScreen();
        })
        .catch(erro => {
          console.log(erro);
          dispatch(loginFail());
        })
    }
}
