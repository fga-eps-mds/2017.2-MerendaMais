import { connect } from 'react-redux';
import MeetingInvites from '../screens/MeetingInvites';
import { asyncGetScheduleMeeting } from '../actions/schedulingMeetingActions';
import { asyncGetCounselorFromGroup } from '../actions/listActions';

const mapStateToProps = state => (
  {
    isLoading: state.application.isLoading,
    counselor: state.counselor,
    listOfScheduleMeetingInAGroup: state.list.listOfScheduleMeetingInAGroup,
    listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
  }
);

const mapDispatchToProps = dispatch => ({
  asyncGetScheduleMeeting: counselor => dispatch(asyncGetScheduleMeeting(counselor)),
  asyncGetCounselorFromGroup: (CAE, CPF) => dispatch(asyncGetCounselorFromGroup(CAE, CPF)),
});

const MeetingInvitesContainer = connect(mapStateToProps,
  mapDispatchToProps)(MeetingInvites);

export default MeetingInvitesContainer;
