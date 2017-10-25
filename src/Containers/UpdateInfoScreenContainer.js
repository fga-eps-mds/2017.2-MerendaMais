import { connect } from 'react-redux';
import UpdateInfoScreen from '../screens/UpdateInfoScreen';
import { asyncEditCounselor } from '../actions/counselorActions';

const mapStateToProps = state => (
  {
    counselor: state.counselor,
    profile: state.counselor.profile,
  }
);

const mapDispatchToProps = dispatch => (
  {
    editUser: userData => dispatch(asyncEditCounselor(userData)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UpdateInfoScreen);
