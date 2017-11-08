import { connect } from 'react-redux';
import MainReportsScreen from '../screens/MainReportsScreen';

const mapStateToProps = state => ({
  statusFoodQuality: state.report.statusFoodQuality,
});

const MainReportContainer =
connect(mapStateToProps)(MainReportsScreen);

export default MainReportContainer;
