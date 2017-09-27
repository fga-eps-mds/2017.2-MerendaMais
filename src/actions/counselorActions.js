import axios from 'axios';
import { CREATE_COUNSELOR, SET_COUNSELOR, LOGIN_SUCCESS, LOGIN_FAIL, MODIFY_CPF, LOADING_LOGIN, MODIFY_PASSWORD } from './types.js';
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
        type: SET_COUNSELOR,
        axios.post('http://merenda-mais.herokuapp.com/counselor/', userData)
        .then((response) => {
            console.log(response.data);
            Actions.loginPresidente();

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

export const asyncLoginCounselor = (userData) => {
    return(dispatch) => {
      console.log("userData: "),
      console.log(userData),
        dispatch({
            type: LOADING_LOGIN
        }),
        axios.post('http://merenda-mais.herokuapp.com/get_auth_token/', userData)
        .then((response) => {
          console.log(response.data);
          loginSuccess(dispatch, response.data.id);
          //Actions.profileInfo();
        })
        .catch(erro =>
          console.log(erro)
          //loginFail(erro,dispatch,response))
    )}
}

const loginSuccess = (dispatch, id) => {
    dispatch(
        {
            type: LOGIN_SUCCESS,
            payload: id
        }
    );
    Actions.profileInfoScreen();
}

const loginFail = (erro, dispatch) => {
    dispatch(
        {
            type: LOGIN_FAIL,
            payload: erro
        }
    );
}
