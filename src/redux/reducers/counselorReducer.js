import initialState from '../initialState';
import { SET_COUNSELOR } from '../actions';

//action = {type: ACTION_TYPE, pyload: someDataHere}
const counselorReducer = (state = {}, action)=>{
  if(action === undefined) return state;

  switch(action.type){
    case SET_COUNSELOR:
        return{
          phone: action.counselor.phone,
          email: action.counselor.email
        };
    default:
      return state;
  }
}

export default counselorReducer;
