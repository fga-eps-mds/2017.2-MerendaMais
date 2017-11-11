import { connect } from 'react-redux';
import SchedulingVisit from '../screens/SchedulingVisit';
import asyncSchedulingVisit from '../actions/schedulingActions';
import { asyncGetCounselorFromGroup } from '../actions/listActions';

const mapStateToProps = state => ({
  listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
  counselor: state.counselor,
  school: state.school,
});

const mapDispatchToProps = dispatch => ({
  asyncGetCounselorFromGroup: (CAE, CPF) => dispatch(asyncGetCounselorFromGroup(CAE, CPF)),
  asyncSchedulingVisit: visitData => dispatch(asyncSchedulingVisit(visitData)),
});

const SchedulingVisitContainer = connect(mapStateToProps, mapDispatchToProps)(SchedulingVisit);

export default SchedulingVisitContainer;
