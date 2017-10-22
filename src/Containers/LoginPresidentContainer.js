import { connect } from 'react-redux';
import LoginPresidentScreen from '../screens/LoginPresidentScreen';
import { asyncLoginCounselor } from '../actions/counselorActions';

const mapStatetoProps = state => (
  {
    message_erro: state.application.message_erro,
    isLoading: state.application.isLoading,
  }
);

const mapDispachtoProps = dispatch => (
  {
    asyncLoginCounselor: userData => dispatch(asyncLoginCounselor(userData)),
  }
);

export default connect(mapStatetoProps, mapDispachtoProps)(LoginPresidentScreen);
