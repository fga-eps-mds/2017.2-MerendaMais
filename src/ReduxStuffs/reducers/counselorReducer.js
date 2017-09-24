import initialState from '../initialState';
import { SET_COUNSELOR } from '../actions';

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
          };

        default:
            return state;
    }
}

export default counselorReducer;
