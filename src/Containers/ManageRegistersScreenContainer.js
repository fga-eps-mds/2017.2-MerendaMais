import { connect } from 'react-redux';
import ManageRegistersScreen from '../screens/ManageRegistersScreen';
import { asyncGetCounselorFromGroup } from '../actions/listActions';
import { disableCounselorFromGroup } from '../actions/ManagerRegisterActions';

const mapStateToProps = state => (
  {
    listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
    CAE: state.counselor.profile.CAE,
    cpf: state.counselor.profile.cpf,
    appToken: state.counselor.token,
    codGroup: state.counselor.profile.codGroup,
  }
);

const mapDispachtoProps = dispatch => (
  {
    asyncGetCounselorFromGroup: (CAE, CPF) => dispatch(asyncGetCounselorFromGroup(CAE, CPF)),
    disableCounselorFromGroup: (counselor, codGroup, appToken) =>
      dispatch(disableCounselorFromGroup(counselor, codGroup, appToken)),
  }
);

export default connect(mapStateToProps, mapDispachtoProps)(ManageRegistersScreen);
