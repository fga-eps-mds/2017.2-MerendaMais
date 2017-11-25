import { connect } from 'react-redux';
import ManageNotAcceptedRegistersScreen from '../screens/ManageNotAcceptedRegistersScreen';
import { asyncGetCounselorFromGroup } from '../actions/listActions';
import { disableCounselor, asyncAcceptCounselor } from '../actions/ManagerRegisterActions';

const mapStateToProps = state => (
  {
    listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
    counselor: state.counselor,
  }
);

const mapDispatchToProps = dispatch => (
  {
    asyncGetCounselorFromGroup: (CAE, CPF) => dispatch(asyncGetCounselorFromGroup(CAE, CPF)),
    disableCounselor: (counselor, codGroup) =>
      dispatch(disableCounselor(counselor, codGroup)),
    asyncAcceptCounselor: userData => dispatch(asyncAcceptCounselor(userData)),
  }
);

const ManageNotAcceptedRegistersScreenContainer =
  connect(mapStateToProps, mapDispatchToProps)(ManageNotAcceptedRegistersScreen);

export default ManageNotAcceptedRegistersScreenContainer;
