import { connect } from 'react-redux';
import VisitInvites from '../screens/VisitInvites';
import { asyncGetSchedule, asyncUpdateSchedule } from '../actions/schedulingVisitActions';

const mapStateToProps = state => (
  {
    counselor: state.counselor,
    listOfPendingInvitedScheduleList: state.list.listOfPendingInvitedScheduleList,
    application: state.application.isLoading,
  }
);

const mapDispatchToProps = dispatch => ({
  asyncGetSchedule: counselor => dispatch(asyncGetSchedule(counselor)),
  asyncUpdateSchedule: visitData => dispatch(asyncUpdateSchedule(visitData)),
});

const VisitInvitesContainer = connect(mapStateToProps,
  mapDispatchToProps)(VisitInvites);

export default VisitInvitesContainer;
