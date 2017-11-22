import { connect } from 'react-redux';
import StartPendingInspection from '../screens/StartPendingInspection';
import { asyncGetSchedule } from '../actions/schedulingActions';

const mapStateToProps = state => ({
  counselor: state.counselor,
  listOfPendingScheduleInAGroup: state.list.listOfPendingScheduleInAGroup,
  listOfExpiredScheduleInAGroup: state.list.listOfExpiredScheduleInAGroup,
  listOfAlreadyInpectionedSchedueInAGroup:
   state.list.listOfAlreadyInpectionedSchedueInAGroup,
});

const mapDispatchToProps = dispatch => ({
  asyncGetSchedule: counselor => dispatch(asyncGetSchedule(counselor)),
});

const StartPendingInspectionContainer = connect(mapStateToProps,
  mapDispatchToProps)(StartPendingInspection);

export default StartPendingInspectionContainer;
