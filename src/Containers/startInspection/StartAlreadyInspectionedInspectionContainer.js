import { connect } from 'react-redux';
import StartAlreadyInspectionedInspection from '../../screens/startInspection/StartAlreadyInspectionedInspection';
import { resetStore } from '../../actions/applicationActions';
import {
  asyncGetCurrentPost,
  isLoadingResult,
  isNotLoadingResult,
} from '../../actions/reportResultActions';

const mapStateToProps = state => (
  {
    isLoading: state.application.isLoading,
    getIsLoadingResult: state.reportResult.isLoadingResult,
    counselor: state.counselor,
    reportResult: state.reportResult,
    listOfAlreadyInpectionedSchedueInAGroup:
      state.list.listOfAlreadyInpectionedSchedueInAGroup,
  }
);

const mapDispatchToProps = dispatch => ({
  asyncGetCurrentPost: getData => dispatch(asyncGetCurrentPost(getData)),
  isLoadingResult: () => dispatch(isLoadingResult()),
  isNotLoadingResult: () => dispatch(isNotLoadingResult()),
  resetStore: (...states) => dispatch(resetStore(...states)),
});

const StartAlreadyInspectionedInspectionContainer = connect(mapStateToProps,
  mapDispatchToProps)(StartAlreadyInspectionedInspection);

export default StartAlreadyInspectionedInspectionContainer;
