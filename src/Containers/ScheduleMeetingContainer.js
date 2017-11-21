import { connect } from 'react-redux';
import ScheduleMeeting from '../screens/ScheduleMeeting';
import { asyncGetCounselorFromGroup, setNewLists } from '../actions/listActions';

const mapStateToProps = state => ({
  listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
  listOfInviteesWithCounselorInformations: state.list.listOfInviteesWithCounselorInformations,
  listOfInvitees: state.list.listOfInvitees,
  counselor: state.counselor,
  school: state.school,
});

const mapDispatchToProps = dispatch => ({
  asyncGetCounselorFromGroup: (CAE, CPF) => dispatch(asyncGetCounselorFromGroup(CAE, CPF)),

  setNewLists: newListWithInformations =>
    dispatch(setNewLists(newListWithInformations)),
});

const ScheduleMeetingContainer = connect(mapStateToProps, mapDispatchToProps)(ScheduleMeeting);

export default ScheduleMeetingContainer;
