import { connect } from 'react-redux';
import StartAlreadyInspectionedInspection from '../screens/StartAlreadyInspectionedInspection';

const mapStateToProps = state => ({
  counselor: state.counselor,
  listOfAlreadyInpectionedSchedueInAGroup:
   state.list.listOfAlreadyInpectionedSchedueInAGroup,
});

const StartAlreadyInspectionedInspectionContainer =
 connect(mapStateToProps)(StartAlreadyInspectionedInspection);

export default StartAlreadyInspectionedInspectionContainer;
