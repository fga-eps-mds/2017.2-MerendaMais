import { connect } from 'react-redux';
import VisitInvites from '../screens/VisitInvites';
import {
  asyncGetSchedule,
  asyncUpdateSchedule,
  setCurrentInspection,
  asyncGetCurrentSchedule,
} from '../actions/schedulingVisitActions';

const mapStateToProps = state => (
  {
    counselor: state.counselor,
    listOfPendingInvitedScheduleList: state.list.listOfPendingInvitedScheduleList,
    application: state.application.isLoading,
    currentSchedule: state.scheduleVisit.currentVisit,
  }
);

const mapDispatchToProps = dispatch => ({
  asyncGetSchedule: counselor => dispatch(asyncGetSchedule(counselor)),
  asyncUpdateSchedule: visitData => dispatch(asyncUpdateSchedule(visitData)),
  setCurrentInspection: visitSchedule => dispatch(setCurrentInspection(visitSchedule)),
  asyncGetCurrentSchedule: getData => dispatch(asyncGetCurrentSchedule(getData)),
});

const VisitInvitesContainer = connect(mapStateToProps,
  mapDispatchToProps)(VisitInvites);

export default VisitInvitesContainer;
