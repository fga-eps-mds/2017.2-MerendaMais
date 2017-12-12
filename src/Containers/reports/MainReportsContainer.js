import { connect } from 'react-redux';
import MainReportsScreen from '../../screens/reports/MainReportsScreen';
import { isLoading, isNotLoading } from '../../actions/applicationActions';
import { asyncGetCurrentSchedule, asyncUpdateSchedule } from '../../actions/schedulingVisitActions';

const mapStateToProps = state => (
  {
    scheduleVisit: state.scheduleVisit,
    counselor: state.counselor,
    report: state.report,
    isLoading: state.application.isLoading,
    clickableView: state.application.clickableView,
  }
);

const mapDispatchToProps = dispatch => (
  {
    syncIsLoading: () => dispatch(isLoading()),
    syncIsNotLoading: () => dispatch(isNotLoading()),
    asyncGetCurrentSchedule: getData => dispatch(asyncGetCurrentSchedule(getData)),
    asyncUpdateSchedule: postData => dispatch(asyncUpdateSchedule(postData)),
  }
);

const MainReportsContainer = connect(mapStateToProps, mapDispatchToProps)(MainReportsScreen);

export default MainReportsContainer;
