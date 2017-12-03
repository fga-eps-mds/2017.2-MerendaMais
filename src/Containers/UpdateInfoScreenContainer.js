import { connect } from 'react-redux';
import { asyncEditCounselor } from '../actions/counselorActions';
import UpdateInfoScreen from '../screens/UpdateInfoScreen';

const mapStateToProps = state => (
  {
    counselor: state.counselor,
  }
);

const mapDispatchToProps = dispatch => (
  {
    asyncEditCounselor: userData => dispatch(asyncEditCounselor(userData)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UpdateInfoScreen);
