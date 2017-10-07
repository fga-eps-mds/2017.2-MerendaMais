import { connect } from 'react-redux';
import { LoginConselheiro } from '../screens';
import { modifyCPF, asyncLoginCounselor } from '../actions/counselorActions';

const mapStatetoProps = state => (
  {
    cpf: state.counselor.cpf,
    message_erro: state.counselor.message_erro,
    isLoading: state.counselor.isLoading,
  }
);

export default connect(mapStatetoProps,
  { modifyCPF, asyncLoginCounselor },
)(LoginConselheiro);
