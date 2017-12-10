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
    asyncEditCounselor: async userData => dispatch(await asyncEditCounselor(userData)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UpdateInfoScreen);
