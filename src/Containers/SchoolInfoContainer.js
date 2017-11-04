import { connect } from 'react-redux';
import SchoolInfoScreen from '../screens/SchoolInfoScreen';
import { setSchoolInfo } from '../actions/schoolActions';

const mapStateToProps = state => (
  {
    school: state.school,
    isLoading: state.application.isLoading,
    message_erro: state.application.message_erro,
  }
);

const mapDispatchToProps = dispatch => ({
  setSchoolInfo: schoolData => dispatch(setSchoolInfo(schoolData)),
});


const SchoolInfoContainer = connect(mapStateToProps, mapDispatchToProps)(SchoolInfoScreen);

export default SchoolInfoContainer;
