import initialState from '../initialState';
import { SET_COUNSELOR } from '../actions';

//action = {type: ACTION_TYPE, pyload: someDataHere}
const counselorReducer = (state = initialState, action) => {
    if (action === undefined) return state;

    switch (action.type) {
      case SET_COUNSELOR:
          return {
            id: action.id,
            url: action.url,
            cpf: action.cpf,
            name: action.name,
            email: action.email,
            phone: action.phone,
            isPresident: acton.isPresident,
            password: action.password,
            segment: action.segment,
            CAE_Type: action.CAE_Type,
            CAE: action.CAE

          };

        default:
            return state;
    }
}

export default counselorReducer;