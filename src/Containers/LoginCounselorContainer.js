import { connect } from 'react-redux';
import { LoginCounselorScreen } from '../screens';
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

export default connect(mapStatetoProps, mapDispachtoProps)(LoginCounselorScreen);
