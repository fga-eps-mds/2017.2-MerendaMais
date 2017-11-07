import { connect } from 'react-redux';
import DocCheckoutScreen from '../screens/DocCheckoutScreen';
import { setDocReportPositive,
  setDocReportNegative,
  setDocObservation } from '../actions/reportActions';

const mapStateToProps = state => ({
  report: state.report.doc,
  observation: state.report.docObservation,
});

const mapDispatchToProps = dispatch => ({
  setDocReportPositive: key => dispatch(setDocReportPositive(key)),
  setDocReportNegative: key => dispatch(setDocReportNegative(key)),
  setDocObservation: observation => dispatch(setDocObservation(observation)),
});

const DocCheckoutContainer =
connect(mapStateToProps, mapDispatchToProps)(DocCheckoutScreen);

export default DocCheckoutContainer;
