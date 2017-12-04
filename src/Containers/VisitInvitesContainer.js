import { connect } from 'react-redux';
import VisitInvites from '../screens/VisitInvites';
import { asyncGetSchedule } from '../actions/schedulingActions';
import { asyncGetCounselorFromGroup } from '../actions/listActions';

const mapStateToProps = state => (
  {
    counselor: state.counselor,
    listOfPendingScheduleInAGroup: state.list.listOfPendingScheduleInAGroup,
    listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
  }
);

const mapDispatchToProps = dispatch => ({
  asyncGetSchedule: counselor => dispatch(asyncGetSchedule(counselor)),
  asyncGetCounselorFromGroup: (CAE, CPF) => dispatch(asyncGetCounselorFromGroup(CAE, CPF)),
});

const VisitInvitesContainer = connect(mapStateToProps,
  mapDispatchToProps)(VisitInvites);

export default VisitInvitesContainer;
