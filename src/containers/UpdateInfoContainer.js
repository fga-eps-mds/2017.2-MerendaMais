import { connect } from 'react-redux';
import UpdateInfoScreen from '../screens/UpdateInfoScreen';

const mapStateToProps = (state) =>{
  return{
    counselor: state.counselor
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{

  }
}

const UpdateInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateInfoScreen);

export default UpdateInfoContainer;
