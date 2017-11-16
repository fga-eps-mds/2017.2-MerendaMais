import { connect } from 'react-redux';
import ManageRegistersScreen from '../screens/ManageRegistersScreen';
import { asyncGetCounselorFromGroup } from '../actions/listActions';

const mapStateToProps = state => (
  {
    listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
    CAE: state.counselor.profile.CAE,
    cpf: state.counselor.profile.cpf,
  }
);

const mapDispachtoProps = dispatch => (
  {
    asyncGetCounselorFromGroup: (CAE, CPF) => dispatch(asyncGetCounselorFromGroup(CAE, CPF)),
  }
);

export default connect(mapStateToProps, mapDispachtoProps)(ManageRegistersScreen);
