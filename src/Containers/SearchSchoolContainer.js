import { connect } from 'react-redux';
import SearchSchool from '../screens/SearchSchool';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counselor: state.counselor,
  };
};

const SearchSchoolContainer = connect(mapStateToProps)(SearchSchool);

export default SearchSchoolContainer;
