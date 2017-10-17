import initialState from './initialState';
import { SET_COUNSELOR, MODIFY_CPF, LOADING, LOGIN_FAIL, MODIFY_PASSWORD, LOGIN_SUCCESS } from '../actions/types';

// action = {type: ACTION_TYPE, pyload: someDataHere}
const counselorReducer = (state = initialState.counselor, action) => {
  console.log(action);
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
        CAE: action.counselor.CAE,
      };
    case MODIFY_CPF:
      return {
        ...state,
        cpf: action.cpf,
      };

    case MODIFY_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        id: action.payload,
        isLoading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default counselorReducer;
