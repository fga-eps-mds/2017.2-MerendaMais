import { connect } from 'react-redux';
import VisitInvites from '../screens/VisitInvites';
import { asyncGetSchedule } from '../actions/schedulingVisitActions';
import { asyncGetCounselorFromGroup } from '../actions/listActions';

const mapStateToProps = state => (
  {
    counselor: state.counselor,
    listOfPendingInvitedScheduleList: state.list.listOfPendingInvitedScheduleList,
    application: state.application.isLoading,
  }
);

const mapDispatchToProps = dispatch => ({
  asyncGetSchedule: counselor => dispatch(asyncGetSchedule(counselor)),
});

const VisitInvitesContainer = connect(mapStateToProps,
  mapDispatchToProps)(VisitInvites);

export default VisitInvitesContainer;
