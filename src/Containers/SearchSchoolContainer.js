import { connect } from 'react-redux';
import SearchSchool from '../screens/SearchSchool';
import { asyncChangeToSchoolInfoScreen } from '../actions/schoolActions';

const mapStateToProps = state => ({
  counselor: state.counselor,
});

const mapDispatchToProps = dispatch => ({
  setSchoolInfo: selectedSchoolCode =>
    dispatch(asyncChangeToSchoolInfoScreen({ schoolCode: selectedSchoolCode })),
});

const SearchSchoolContainer = connect(mapStateToProps, mapDispatchToProps)(SearchSchool);

export default SearchSchoolContainer;
