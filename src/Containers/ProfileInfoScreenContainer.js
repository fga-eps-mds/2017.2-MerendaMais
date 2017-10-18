import { connect } from 'react-redux';
import { asyncGetCounselor } from '../actions/counselorActions';
import ProfileInfoScreen from '../screens/ProfileInfoScreen';

const mapStateToProps = (state) => {
  console.log('Profile Screen Conatiner');
  console.log(state);
  return {
    counselor: state.counselor,
  };
};

const mapDispatchToProps = dispatch => ({
  getCounselor: userData => dispatch(asyncGetCounselor(userData)),
});

const ProfileInfoScreenContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoScreen);

export default ProfileInfoScreenContainer;
