import { connect } from 'react-redux';
import StartPendingInspection from '../../screens/startInspection/StartPendingInspection';
import { asyncGetSchedule } from '../../actions/schedulingVisitActions';
import { asyncGetCounselorFromGroup } from '../../actions/listActions';

const mapStateToProps = state => ({
  counselor: state.counselor,
  listOfPendingScheduleInAGroup: state.list.listOfPendingScheduleInAGroup,
  listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
});

const mapDispatchToProps = dispatch => ({
  asyncGetSchedule: counselor => dispatch(asyncGetSchedule(counselor)),
  asyncGetCounselorFromGroup: (CAE, CPF) => dispatch(asyncGetCounselorFromGroup(CAE, CPF)),
});

const StartPendingInspectionContainer = connect(mapStateToProps,
  mapDispatchToProps)(StartPendingInspection);

export default StartPendingInspectionContainer;
