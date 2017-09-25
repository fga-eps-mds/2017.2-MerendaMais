import initialState from './initialState';
import { SET_COUNSELOR,MODIFY_CPF,LOADING_LOGIN,LOGIN_FAIL } from '../actions/types.js';

//action = {type: ACTION_TYPE, pyload: someDataHere}
const counselorReducer = (state = initialState.counselor, action) => {
    if (action === undefined) return state;

    switch (action.type) {
      case SET_COUNSELOR:
          return {
            id: action.counselor.id,
            first_name: action.counselor.first_name,
            email: action.counselor.cpf,
            phone: action.counselor.phone,
            cpf: action.counselor.cpf,
            url: action.counselor.url
            isPresident: action.counselor.isPresident
            segment: action.counselor.segment
            password: action.counselor.password
            CAE_type: action.counselor.CAE_type
            CAE: action.counselor.CAE
          };
      case MODIFY_CPF:
          return {
            ...state,
            CPF: action.payload
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
