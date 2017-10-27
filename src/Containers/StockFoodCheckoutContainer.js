import { connect } from 'react-redux';
import StockFoodCheckoutScreen from '../screens/StockFoodCheckoutScreen';
import { setStockFoodReport, setFoodStockObservation } from '../actions/reportActions';

const mapStateToProps = state => ({
  report: state.report.foodStock,
  observation: state.report.foodStockObservation,
});

const mapDispatchToProps = dispatch => ({
  setStockFoodReport: key => dispatch(setStockFoodReport(key)),
  setFoodStockObservation: observation => dispatch(setFoodStockObservation(observation)),
});

const StockFoodCheckoutContainer =
connect(mapStateToProps, mapDispatchToProps)(StockFoodCheckoutScreen);

export default StockFoodCheckoutContainer;
