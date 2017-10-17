import { connect } from 'react-redux';
import { asyncSearchSchool } from '../actions/schoolActions';
import SearchSchool from '../screens/SearchSchool';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    counselor: state.counselor,
  };
};

const mapDispatchToProps = dispatch => ({
  searchSchool: searchData => dispatch(asyncSearchSchool(searchData)),
});

const SearchSchoolContainer = connect(mapStateToProps, mapDispatchToProps)(SearchSchool);

export default SearchSchoolContainer;
