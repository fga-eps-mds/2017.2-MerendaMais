import { connect } from 'react-redux';
import UpdateInfoScreen from '../screens/UpdateInfoScreen';
import { asyncEditCounselor } from '../actions/counselorActions';

const mapStateToProps = (state) => {
  console.debug(state.counselor);
  return {
    email: state.counselor.email,
    phone: state.counselor.phone,
    id: state.counselor.id,
    name: state.counselor.name,
  };
};

const mapDispatchToProps = dispatch => ({
  editUser: userData => dispatch(asyncEditCounselor(userData)),
});

const UpdateInfoScreenContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateInfoScreen);

export default UpdateInfoScreenContainer;
