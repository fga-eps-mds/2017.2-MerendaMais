import { connect } from 'react-redux';
import StockFoodCheckoutScreen from '../screens/StockFoodCheckoutScreen';
import { setStockFoodReportPositive, setStockFoodReportNegative, setFoodStockObservation } from '../actions/reportActions';

const mapStateToProps = state => ({
  report: state.report.foodStock,
  observation: state.report.foodStockObservation,
});

const mapDispatchToProps = dispatch => ({
  setStockFoodReportPositive: key => dispatch(setStockFoodReportPositive(key)),
  setStockFoodReportNegative: key => dispatch(setStockFoodReportNegative(key)),
  setFoodStockObservation: observation => dispatch(setFoodStockObservation(observation)),
});

const StockFoodCheckoutContainer =
connect(mapStateToProps, mapDispatchToProps)(StockFoodCheckoutScreen);

export default StockFoodCheckoutContainer;
