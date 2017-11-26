import initialState from './initialState';
import { SET_LIST_COUNSELOR_GROUP,
  RESET_LIST,
  SET_VISIT_NEW_LISTS,
  SET_MEETING_NEW_LISTS,
} from '../actions/types';

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
    case SET_VISIT_NEW_LISTS:
      return {
        ...state,
        visitListOfInviteesWithCounselorInformations: action.payload.visitNewListWithInformations,
        visitListOfInvitees: action.payload.visitNewList,
      };
    case SET_MEETING_NEW_LISTS:
      return {
        ...state,
        meetingListOfInviteesWithCounselorInformations:
          action.payload.meetingNewListWithInformations,
        meetingListOfInvitees: action.payload.meetingNewList,
      };
    default:
      return state;
  }
};

export default listReducer;
