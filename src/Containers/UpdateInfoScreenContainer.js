import { connect } from 'react-redux';
import { asyncEditCounselor } from '../actions/counselorActions';
import UpdateInfoScreen from '../screens/UpdateInfoScreen';

const mapStateToProps = state => (
  {
    counselor: state.counselor,
    application: state.application.isLoading,
  }
);

const mapDispatchToProps = dispatch => (
  {
    asyncEditCounselor: async userData => dispatch(await asyncEditCounselor(userData)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UpdateInfoScreen);
