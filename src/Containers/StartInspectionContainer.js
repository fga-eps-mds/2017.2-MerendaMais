import { connect } from 'react-redux';
import StartInspection from '../screens/StartInspection';
import { asyncGetSchedule } from '../actions/schedulingActions';

const mapStateToProps = state => ({
  counselor: state.counselor,
  listOfSchedulingInAGroup: state.list.listOfSchedulingInAGroup,
});

const mapDispatchToProps = dispatch => ({
  asyncGetSchedule: counselor => dispatch(asyncGetSchedule(counselor)),
});

const StartInspectionContainer = connect(mapStateToProps, mapDispatchToProps)(StartInspection);

export default StartInspectionContainer;
