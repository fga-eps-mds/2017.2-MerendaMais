import { connect } from 'react-redux';
import FoodQualityCheckoutScreen from '../screens/FoodQualityCheckoutScreen';
import { setFoodQualityReportPositive, setFoodQualityReportNegative, setFoodQualityObservation } from '../actions/reportActions';

const mapStateToProps = state => ({
  report: state.report.foodQuality,
  observation: state.report.foodQualityObservation,
});

const mapDispatchToProps = dispatch => ({
  setFoodQualityReportPositive: key => dispatch(setFoodQualityReportPositive(key)),
  setFoodQualityReportNegative: key => dispatch(setFoodQualityReportNegative(key)),
  setFoodQualityObservation: observation => dispatch(setFoodQualityObservation(observation)),
});

const FoodQualityCheckoutContainer =
connect(mapStateToProps, mapDispatchToProps)(FoodQualityCheckoutScreen);

export default FoodQualityCheckoutContainer;
