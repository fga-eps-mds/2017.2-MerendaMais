import { connect } from 'react-redux';
import SchedulingVisit from '../screens/SchedulingVisit';
import asyncSchedulingVisit from '../actions/schedulingActions';
import { asyncGetCounselorFromGroup,
  setlistOfInviteesWithCounselorInformations } from '../actions/listActions';

const mapStateToProps = state => ({
  listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
  listOfInviteesWithCounselorInformations: state.list.listOfInviteesWithCounselorInformations,
  listOfInvitees: state.schedule.listOfInvitees,
  counselor: state.counselor,
  school: state.school,
});

const mapDispatchToProps = dispatch => ({
  asyncGetCounselorFromGroup: (CAE, CPF) => dispatch(asyncGetCounselorFromGroup(CAE, CPF)),

  asyncSchedulingVisit: visitData => dispatch(asyncSchedulingVisit(visitData)),

  setlistOfInviteesWithCounselorInformations: newListWithInformations =>
    dispatch(setlistOfInviteesWithCounselorInformations(newListWithInformations)),
});

const SchedulingVisitContainer = connect(mapStateToProps, mapDispatchToProps)(SchedulingVisit);

export default SchedulingVisitContainer;
