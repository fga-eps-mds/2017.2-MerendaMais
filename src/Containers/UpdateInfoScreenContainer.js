import { connect } from 'react-redux';
import UpdateInfoScreen from '../screens/UpdateInfoScreen';
import { asyncEditCounselor } from '../actions/counselorActions';

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
