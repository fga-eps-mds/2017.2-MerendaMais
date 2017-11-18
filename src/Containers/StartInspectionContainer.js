import { connect } from 'react-redux';
import StartInspection from '../screens/StartInspection';
import { asyncGetSchedule } from '../actions/schoolActions';

const mapStateToProps = state => ({
  counselor: state.counselor,
});

const mapDispatchToProps = dispatch => ({
  asyncGetSchedule: counselor => dispatch(asyncGetSchedule(counselor)),
});

const StartInspectionContainer = connect(mapStateToProps, mapDispatchToProps)(StartInspection);

export default StartInspectionContainer;
