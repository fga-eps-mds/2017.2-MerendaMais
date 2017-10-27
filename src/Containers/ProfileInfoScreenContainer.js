import { connect } from 'react-redux';
import ProfileInfoScreen from '../screens/ProfileInfoScreen';

const mapStateToProps = state => (
  {
    counselor: state.counselor,
  }
);

const ProfileInfoScreenContainer = connect(mapStateToProps)(ProfileInfoScreen);

export default ProfileInfoScreenContainer;
