import { connect } from 'react-redux';
import { asyncCreateCounselor } from '../actions/counselorActions';
import RegisterScreen from '../screens/RegisterScreen';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state.counselor,
  };
};

const mapDispatchToProps = dispatch => ({
  createUser: userData => dispatch(asyncCreateCounselor(userData)),
});

const RegisterScreenContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

export default RegisterScreenContainer;
