import { connect } from 'react-redux';
import { asyncRegisterCounselor } from '../actions/counselorActions';
import RegisterScreen from '../screens/RegisterScreen';

const mapStateToProps = state => (
  {
    isLoading: state.application.isLoading,
    message_erro: state.application.message_erro,
  }
);

const mapDispatchToProps = dispatch => ({
  asyncRegisterCounselor: userData => dispatch(asyncRegisterCounselor(userData)),
});

const RegisterScreenContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

export default RegisterScreenContainer;
