import initialState from './initialState';
import { SET_LIST_COUNSELOR_GROUP,
  RESET_LIST,
  SET_NEW_LISTS } from '../actions/types';

const listReducer = (state = initialState.list, action) => {
  if (action === undefined) {
    return state;
  }

  switch (action.type) {
    case SET_LIST_COUNSELOR_GROUP:
      return {
        ...state,
        listOfCounselorsInAGroup: [...state.listOfCounselorsInAGroup, action.payload],
      };
    case RESET_LIST:
      return {
        ...state,
        listOfCounselorsInAGroup: [],
      };
    case SET_NEW_LISTS:
      return {
        ...state,
        listOfInviteesWithCounselorInformations: action.payload.newListWithInformations,
        listOfInvitees: action.payload.newList,
      };
    default:
      return state;
  }
};

export default listReducer;
