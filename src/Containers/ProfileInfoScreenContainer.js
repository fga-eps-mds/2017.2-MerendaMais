import { connect } from 'react-redux';
import { asyncGetCounselor } from '../actions/counselorActions';
import ProfileInfoScreen from '../screens/ProfileInfoScreen';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counselor: state.counselor,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    getCounselor(id) { dispatch(asyncGetCounselor(id)); },
  };
};

const ProfileInfoScreenContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoScreen);

export default ProfileInfoScreenContainer;
