import { connect } from 'react-redux';
import TelaInicial from '../screens/TelaInicial';


const mapStateToProps = (state) => {
  return {
    counselor: state.counselor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const TelaInicialContainer = connect(mapStateToProps, mapDispatchToProps) (TelaInicial);

export default TelaInicialContainer;