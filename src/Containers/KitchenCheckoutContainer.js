import { connect } from 'react-redux';
import KitchenCheckoutScreen from '../screens/KitchenCheckoutScreen';
import { setKitchenReportPositive, setKitchenReportNegative, setKitchenObservation } from '../actions/reportActions';

const mapStateToProps = state => ({
  report: state.report.kitchen,
  observation: state.report.kitchenObservation,
});

const mapDispatchToProps = dispatch => ({
  setKitchenReportPositive: key => dispatch(setKitchenReportPositive(key)),
  setKitchenReportNegative: key => dispatch(setKitchenReportNegative(key)),
  setKitchenObservation: observation => dispatch(setKitchenObservation(observation)),
});

const kitchenCheckoutContainer =
connect(mapStateToProps, mapDispatchToProps)(KitchenCheckoutScreen);

export default kitchenCheckoutContainer;
