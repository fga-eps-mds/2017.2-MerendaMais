import { connect } from 'react-redux';
import RefectoryCheckoutScreen from '../screens/RefectoryCheckoutScreen';
import { setRefectoryReportPositive, setRefectoryReportNegative, setRefectoryObservation } from '../actions/reportActions';

const mapStateToProps = state => ({
  report: state.report.refectory,
  observation: state.report.refectoryObservation,
});

const mapDispatchToProps = dispatch => ({
  setRefectoryReportPositive: key => dispatch(setRefectoryReportPositive(key)),
  setRefectoryReportNegative: key => dispatch(setRefectoryReportNegative(key)),
  setRefectoryObservation: observation => dispatch(setRefectoryObservation(observation)),
});

const RefectoryCheckoutScreenContainer =
connect(mapStateToProps, mapDispatchToProps)(RefectoryCheckoutScreen);

export default RefectoryCheckoutScreenContainer;
