import { connect } from 'react-redux';
import MainReportsScreen from '../../screens/reports/MainReportsScreen';

const mapStateToProps = state => (
  {
    scheduleVisit: state.scheduleVisit,
    counselor: state.counselor,
  }
);

const RegisterScreenContainer = connect(mapStateToProps)(MainReportsScreen);

export default RegisterScreenContainer;
