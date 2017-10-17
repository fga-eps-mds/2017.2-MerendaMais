import initialState from './initialState';
import { SET_SCHOOL } from '../actions/types';

const schoolReducer = (state = initialState.school, action) => {
  console.log(action);
  if (action === undefined) return state;
  switch (action.type) {
    case SET_SCHOOL:
      return {
        name: action.school.name,
      };
    default:
      return state;
  }
};

export default schoolReducer;
