import axios from 'axios';
import {CREATE_COUNSELOR, SET_COUNSELOR} from '../ReduxStuffs/actions';

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
