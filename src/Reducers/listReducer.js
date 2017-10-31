import initialState from './initialState';
import { SET_LIST_COUNSELOR_GROUP } from '../actions/types';

const listReducer = (state = initialState.list, action) => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case SET_LIST_COUNSELOR_GROUP:
      console.log(state);
      return {
        listOfCounselorsInAGroup: [...state.listOfCounselorsInAGroup, action.payload],
      };
    default:
      return state;
  }
};

export default listReducer;
