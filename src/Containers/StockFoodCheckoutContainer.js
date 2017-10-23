import { connect } from 'react-redux';
import StockFoodCheckoutScreen from '../screens/StockFoodCheckoutScreen';
import setStockFoodReport from '../actions/reportActions';

const mapStateToProps = (state) => {
  console.log('StockFoodCheckoutContainer: ');
  console.log(state.report);

  return {
    report: state.report.foodStock,
  };
};

const mapDispatchToProps = dispatch => ({
  setStockFoodReport: key => dispatch(setStockFoodReport(key)),
});

const StockFoodCheckoutContainer =
connect(mapStateToProps, mapDispatchToProps)(StockFoodCheckoutScreen);

export default StockFoodCheckoutContainer;
