import { connect } from 'react-redux';
import LoginPresidentScreen from '../screens/LoginPresidentScreen';
import { asyncLoginCounselor } from '../actions/counselorActions';

const mapStateToProps = state => (
  {
    isLoading: state.application.isLoading,
    message_erro: state.application.message_erro,
  }
);

const mapDispachtoProps = dispatch => (
  {
    asyncLoginCounselor: userData => dispatch(asyncLoginCounselor(userData)),
  }
);

export default connect(mapStateToProps, mapDispachtoProps)(LoginPresidentScreen);
