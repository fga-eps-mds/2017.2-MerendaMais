import initialState from './initialState';
import { SET_COUNSELOR, MODIFY_CPF, LOADING_LOGIN, LOGIN_FAIL, MODIFY_PASSWORD } from '../actions/types.js';

//action = {type: ACTION_TYPE, pyload: someDataHere}
const counselorReducer = (state = initialState.counselor, action) => {
    console.log(action)
    if (action === undefined) return state;

    switch (action.type) {
      case SET_COUNSELOR:
          return {
            id: action.counselor.id,
            url: action.counselor.url,
            cpf: action.counselor.cpf,
            name: action.counselor.name,
            email: action.counselor.email,
            phone: action.counselor.phone,
            isPresident: action.counselor.isPresident,
            password: action.counselor.password,
            segment: action.counselor.segment,
            CAE_Type: action.counselor.CAE_Type,
            CAE: action.counselor.CAE

          };
        case MODIFY_CPF:
        return {
            ...state,
            cpf: action.payload
        }

        case MODIFY_PASSWORD:
        return {
            ...state,
            password: action.payload
        }

        case LOADING_LOGIN:
        return {
            ...state,
            isLoading: true
        }
        case LOGIN_FAIL:
        return {
            ...state,
            isLoading: false,
            message_erro: action.payload
        }
        default:
        return state;
    }
}

export default counselorReducer;
