import initialState from './initialState';
import {
  SET_LIST_COUNSELOR_GROUP,
  RESET_LIST,
  SET_VISIT_NEW_LISTS,
  SET_MEETING_NEW_LISTS,
  SET_PENDING_SCHEDULE_LIST,
  SET_EXPIRED_SCHEDULE_LIST,
  SET_ALREADY_INPECTIONED_SCHEDULE_LIST,
  SET_SCHEDULE_MEETING_LIST,
  SET_CHECKED_LIST,
  SET_NOT_CHECKED_LIST,
  SET_PENDING_INVITED_SCHEDULE_LIST,
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
        listOfCounselorsInAGroup: [],
        listOfCheckedCounselors: [],
        listOfNotCheckedCounselors: [],
        listOfPendingScheduleInAGroup: [],
        listOfScheduleMeetingInAGroup: [],
        listOfExpiredScheduleInAGroup: [],
        listOfAlreadyInpectionedSchedueInAGroup: [],
        visitListOfInviteesWithCounselorInformations: {},
        visitListOfInvitees: {},
        meetingListOfInviteesWithCounselorInformations: {},
        meetingListOfInvitees: {},
        listOfPendingInvitedScheduleList: [],
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
    case SET_PENDING_SCHEDULE_LIST:
      return {
        ...state,
        listOfPendingScheduleInAGroup: [...state.listOfPendingScheduleInAGroup, action.payload],
      };
    case SET_PENDING_INVITED_SCHEDULE_LIST:
      return {
        ...state,
        listOfPendingInvitedScheduleList: [...state.listOfPendingInvitedScheduleList,
          action.payload],
      };
    case SET_EXPIRED_SCHEDULE_LIST:
      return {
        ...state,
        listOfExpiredScheduleInAGroup: [...state.listOfExpiredScheduleInAGroup, action.payload],
      };
    case SET_SCHEDULE_MEETING_LIST:
      return {
        ...state,
        listOfScheduleMeetingInAGroup: [...state.listOfScheduleMeetingInAGroup, action.payload],
      };
    case SET_ALREADY_INPECTIONED_SCHEDULE_LIST:
      return {
        ...state,
        listOfAlreadyInpectionedSchedueInAGroup:
        [...state.listOfAlreadyInpectionedSchedueInAGroup, action.payload],
      };
    case SET_CHECKED_LIST:
      return {
        ...state,
        listOfCheckedCounselors: [...state.listOfCheckedCounselors, action.payload],
      };

    case SET_NOT_CHECKED_LIST:
      return {
        ...state,
        listOfNotCheckedCounselors: [...state.listOfNotCheckedCounselors, action.payload],
      };
    default:
      return state;
  }
};

export default listReducer;
