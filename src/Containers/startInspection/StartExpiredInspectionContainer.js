import { connect } from 'react-redux';
import StartExpiredInspection from '../../screens/startInspection/StartExpiredInspection';

const mapStateToProps = state => (
  {
    isLoading: state.application.isLoading,
    counselor: state.counselor,
    listOfExpiredScheduleInAGroup: state.list.listOfExpiredScheduleInAGroup,
  }
);

const StartExpiredInspectionContainer = connect(mapStateToProps)(StartExpiredInspection);

export default StartExpiredInspectionContainer;
