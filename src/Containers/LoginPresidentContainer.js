import { connect } from 'react-redux';
import LoginPresidentScreen from '../screens/LoginPresidentScreen';
import { modifyCPF, modifyPassword, asyncLoginCounselor } from '../actions/counselorActions';

const mapStatetoProps = state => (
  {
    cpf: state.counselor.cpf,
    password: state.counselor.password,
    message_erro: state.application.message_erro,
    isLoading: state.application.isLoading,
  }
);

const mapDispachtoProps = dispatch => (
  {
    modifyCPF: CPF => dispatch(modifyCPF(CPF)),
    modifyPassword: password => dispatch(modifyPassword(password)),
    asyncLoginCounselor: userData => dispatch(asyncLoginCounselor(userData)),
  }
);

export default connect(mapStatetoProps, mapDispachtoProps)(LoginPresidentScreen);
