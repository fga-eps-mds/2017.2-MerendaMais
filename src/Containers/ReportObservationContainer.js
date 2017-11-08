import { connect } from 'react-redux';
import ReportObservationScreen from '../screens/ReportObservationScreen';
import { setReportObservation } from '../actions/reportActions';

const mapStateToProps = state => ({
  observation: state.report.otherObservation,
});

const mapDispatchToProps = dispatch => ({
  setReportObservation: observation => dispatch(setReportObservation(observation)),
});

const ReportObservationContainer =
connect(mapStateToProps, mapDispatchToProps)(ReportObservationScreen);

export default ReportObservationContainer;
