import { connect } from 'react-redux';
import MainReportsScreen from '../../screens/reports/MainReportsScreen';
import { isLoading, isNotLoading } from '../../actions/applicationActions';

const mapStateToProps = state => (
  {
    scheduleVisit: state.scheduleVisit,
    counselor: state.counselor,
    report: state.report,
    isLoading: state.application.isLoading,
    clickableView: state.application.clickableView,
  }
);

const mapDispatchToProps = dispatch => (
  {
    syncIsLoading: () => dispatch(isLoading()),
    syncIsNotLoading: () => dispatch(isNotLoading()),
  }
);

const MainReportsContainer = connect(mapStateToProps, mapDispatchToProps)(MainReportsScreen);

export default MainReportsContainer;
