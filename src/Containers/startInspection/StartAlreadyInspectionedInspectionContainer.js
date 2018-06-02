import { connect } from 'react-redux';
import StartAlreadyInspectionedInspection from '../../screens/startInspection/StartAlreadyInspectionedInspection';
import { resetStore } from '../../actions/applicationActions';
import { asyncGetCurrentPost } from '../../actions/reportResultActions';

const mapStateToProps = state => (
  {
    isLoading: state.application.isLoading,
    counselor: state.counselor,
    listOfAlreadyInpectionedSchedueInAGroup:
      state.list.listOfAlreadyInpectionedSchedueInAGroup,
  }
);

const mapDispatchToProps = dispatch => ({
  asyncGetCurrentPost: getData => dispatch(asyncGetCurrentPost(getData)),
  resetStore: (...states) => dispatch(resetStore(...states)),
});

const StartAlreadyInspectionedInspectionContainer = connect(mapStateToProps,
  mapDispatchToProps)(StartAlreadyInspectionedInspection);

export default StartAlreadyInspectionedInspectionContainer;
