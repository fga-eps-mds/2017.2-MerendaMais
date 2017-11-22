import { connect } from 'react-redux';
import StartExpiredInspection from '../screens/StartExpiredInspection';
import { asyncGetSchedule } from '../actions/schedulingActions';

const mapStateToProps = state => ({
  counselor: state.counselor,
  listOfExpiredScheduleInAGroup: state.list.listOfExpiredScheduleInAGroup,
  listOfAlreadyInpectionedSchedueInAGroup:
   state.list.listOfAlreadyInpectionedSchedueInAGroup,
});

const mapDispatchToProps = dispatch => ({
  asyncGetSchedule: counselor => dispatch(asyncGetSchedule(counselor)),
});

const StartPendingInspectionContainer = connect(mapStateToProps)(StartExpiredInspection);

export default StartPendingInspectionContainer;
