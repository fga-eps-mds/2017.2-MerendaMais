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
        axios.post('http://merenda-mais.herokuapp.com/counselor/', userData)
        .then((response) => {
            console.log(response.data);

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

export const asyncLoginCounselor = ({cpf,password}) => {
    return(dispatch) => {
        dispatch({
            type: LOADING_LOGIN
        })
        fetch('http://merenda-mais.herokuapp.com/counselor/')
        .then((response) => loginSuccess(dispatch))
        .catch(erro => loginFail(erro,dispatch))
    }
}

const loginSuccess = (dispatch) => {
    dispatch(
        {
            type: LOGIN_SUCCESS
        }
    );
    //Actions.NOME_TELA();
}

const loginFail = (erro, dispatch) => {
    dispatch(
        {
            type: LOGIN_FAIL,
            payload: erro
        }
    );
}
