import { connect } from 'react-redux';
import SchedulingVisit from '../screens/SchedulingVisit';
import asyncSchedulingVisit from '../actions/schedulingActions';

const mapStateToProps = state => ({
  counselor: state.counselor,
});

const mapDispatchToProps = dispatch => ({
  asyncSchedulingVisit: visitData => dispatch(asyncSchedulingVisit(visitData)),
});

const SchedulingVisitContainer = connect(mapStateToProps, mapDispatchToProps)(SchedulingVisit);

export default SchedulingVisitContainer;
