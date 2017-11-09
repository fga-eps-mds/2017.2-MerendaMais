import initialState from './initialState';
import { SET_LIST_COUNSELOR_GROUP, RESET_LIST } from '../actions/types';

const listReducer = (state = initialState.list, action) => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case SET_LIST_COUNSELOR_GROUP:
      return {
        listOfCounselorsInAGroup: [...state.listOfCounselorsInAGroup, action.payload],
      };
    case RESET_LIST:
      return {
        listOfCounselorsInAGroup: [],
      };
    default:
      return state;
  }
};

export default listReducer;
