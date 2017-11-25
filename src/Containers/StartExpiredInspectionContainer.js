import { connect } from 'react-redux';
import StartExpiredInspection from '../screens/StartExpiredInspection';

const mapStateToProps = state => ({
  counselor: state.counselor,
  listOfExpiredScheduleInAGroup: state.list.listOfExpiredScheduleInAGroup,
});

const StartPendingInspectionContainer = connect(mapStateToProps)(StartExpiredInspection);

export default StartPendingInspectionContainer;
