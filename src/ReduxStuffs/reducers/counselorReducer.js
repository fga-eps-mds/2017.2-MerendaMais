import initialState from '../initialState';
import { SET_COUNSELOR } from '../actions';

//action = {type: ACTION_TYPE, payload: someDataHere}
const counselorReducer = (state = initialState, action) => {
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

        default:
            return state;
    }
}

export default counselorReducer;