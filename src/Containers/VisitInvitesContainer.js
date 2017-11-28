import { connect } from 'react-redux';
import VisitInvites from '../screens/VisitInvites';


const mapStateToProps = state => (
  {
    counselor: state.counselor,
  }
);

const mapDispachtoProps = () => (
  {}
);

export default connect(mapStateToProps, mapDispachtoProps)(VisitInvites);
