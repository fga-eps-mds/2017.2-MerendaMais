import { connect } from 'react-redux';
import { LoginCounselorScreen } from '../screens';
import { modifyCPF, asyncLoginCounselor } from '../actions/counselorActions';

const mapStatetoProps = state => (
  {
    cpf: state.counselor.cpf,
    message_erro: state.counselor.message_erro,
    isLoading: state.counselor.isLoading,
  }
);

const mapDispachtoProps = dispatch => (
  {
    modifyCPF: CPF => dispatch(modifyCPF(CPF)),
    asyncLoginCounselor: userData => dispatch(asyncLoginCounselor(userData)),
  }
);

export default connect(mapStatetoProps, mapDispachtoProps)(LoginCounselorScreen);
