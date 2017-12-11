import { connect } from 'react-redux';
import { resetStore } from '../actions/applicationActions';
import MainScreen from '../screens/MainScreen';

const mapStateToProps = state => (
  {
    application: state.application,
  }
);

const mapDispatchToProps = dispatch => (
  {
    resetStore: (...states) => dispatch(resetStore(...states)),
  }
);

const MainScreenContainer = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

export default MainScreenContainer;
