import initialState from './initialState';
import { SET_LIST_COUNSELOR_GROUP,
  RESET_LIST,
  SET_NEW_LISTS,
  SET_PENDING_SCHEDULE_LIST,
  SET_EXPIRED_SCHEDULE_LIST,
  SET_ALREADY_INPECTIONED_SCHEDULE_LIST } from '../actions/types';

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
        listOfInviteesWithCounselorInformations: {},
        listOfInvitees: {},
        listOfPendingScheduleInAGroup: [],
        listOfExpiredScheduleInAGroup: [],
        listOfAlreadyInpectionedSchedueInAGroup: [],
      };
    case SET_NEW_LISTS:
      return {
        ...state,
        listOfInviteesWithCounselorInformations: action.payload.newListWithInformations,
        listOfInvitees: action.payload.newList,
      };
    case SET_PENDING_SCHEDULE_LIST:
      return {
        ...state,
        listOfPendingScheduleInAGroup: [...state.listOfPendingScheduleInAGroup, action.payload],
      };
    case SET_EXPIRED_SCHEDULE_LIST:
      return {
        ...state,
        listOfExpiredScheduleInAGroup: [...state.listOfExpiredScheduleInAGroup, action.payload],
      };
    case SET_ALREADY_INPECTIONED_SCHEDULE_LIST:
      return {
        ...state,
        listOfAlreadyInpectionedSchedueInAGroup:
         [...state.listOfAlreadyInpectionedSchedueInAGroup, action.payload],
      };
    default:
      return state;
  }
};

export default listReducer;
