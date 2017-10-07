import { connect } from 'react-redux';
import { LoginPresidente } from '../screens';
import { modifyCPF, modifyPassword, asyncLoginCounselor } from '../actions/counselorActions';

const mapStatetoProps = state => (
  {
    cpf: state.counselor.cpf,
    password: state.counselor.password,
    message_erro: state.counselor.message_erro,
    isLoading: state.counselor.isLoading,
  }
);

export default connect(mapStatetoProps,
  { modifyCPF, modifyPassword, asyncLoginCounselor },
)(LoginPresidente);
