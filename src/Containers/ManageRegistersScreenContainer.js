import { connect } from 'react-redux';
import ManageRegistersScreen from '../screens/ManageRegistersScreen';
import { asyncGetCounselorFromGroup } from '../actions/listActions';

const mapStateToProps = state => (
  {
    listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
    CAE: state.counselor.profile.CAE,
  }
);

const mapDispachtoProps = dispatch => (
  {
    asyncGetCounselorFromGroup: CAE => dispatch(asyncGetCounselorFromGroup(CAE)),
  }
);

export default connect(mapStateToProps, mapDispachtoProps)(ManageRegistersScreen);
