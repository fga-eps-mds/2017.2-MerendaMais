import { connect } from 'react-redux';
import Menu from '../components/Menu';

const mapStateToProps = state => (
  {
    counselor: state.counselor,
  }
);

export default connect(mapStateToProps)(Menu);
