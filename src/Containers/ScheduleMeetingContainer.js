import { connect } from 'react-redux';
import ScheduleMeeting from '../screens/ScheduleMeeting';
import { asyncGetCounselorFromGroup } from '../actions/listActions';

const mapStateToProps = state => ({
  listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
  listOfInviteesWithCounselorInformations: state.list.listOfInviteesWithCounselorInformations,
  listOfInvitees: state.list.listOfInvitees,
  counselor: state.counselor,
  school: state.school,
});

const mapDispatchToProps = dispatch => ({
  asyncGetCounselorFromGroup: (CAE, CPF) => dispatch(asyncGetCounselorFromGroup(CAE, CPF)),
});

const ScheduleMeetingContainer = connect(mapStateToProps, mapDispatchToProps)(ScheduleMeeting);

export default ScheduleMeetingContainer;
