import { connect } from 'react-redux';
import ManageRegistersScreen from '../screens/ManageRegistersScreen';
import { asyncGetCounselorFromGroup } from '../actions/listActions';
import { disableCounselor } from '../actions/ManagerRegisterActions';

const mapStateToProps = state => (
  {
    listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
    CAE: state.counselor.profile.CAE,
    cpf: state.counselor.profile.cpf,
    appToken: state.counselor.token,
    codGroup: state.counselor.profile.codGroup,
  }
);

const mapDispatchToProps = dispatch => (
  {
    asyncGetCounselorFromGroup: (CAE, CPF) => dispatch(asyncGetCounselorFromGroup(CAE, CPF)),
    disableCounselor: (counselor, codGroup) =>
      dispatch(disableCounselor(counselor, codGroup)),
  }
);

const ManageRegistersScreenContainer =
  connect(mapStateToProps, mapDispatchToProps)(ManageRegistersScreen);

export default ManageRegistersScreenContainer;
