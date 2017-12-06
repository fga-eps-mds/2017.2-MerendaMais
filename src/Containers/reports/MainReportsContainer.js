import { connect } from 'react-redux';
import MainReportsScreen from '../../screens/reports/MainReportsScreen';

const mapStateToProps = state => (
  {
    scheduleVisit: state.scheduleVisit,
  }
);

const RegisterScreenContainer = connect(mapStateToProps)(MainReportsScreen);

export default RegisterScreenContainer;
