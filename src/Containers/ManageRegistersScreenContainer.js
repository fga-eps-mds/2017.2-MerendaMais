import { connect } from 'react-redux';
import { Alert } from 'react-native';
import ManageRegistersScreen from '../screens/ManageRegistersScreen';
import { asyncGetCounselorFromGroup } from '../actions/listActions';


const disableCounselor = (counselor) => {
  Alert.alert(
    'Desativar Conselheiro',
    'Você deseja realmente desassociar esse Conselheiro da Aplicação?',
    [
      { text: 'Cancelar', onPress: () => console.log('Cancelar') },
      { text: 'Desassociar', onPress: () => console.log(counselor.nuvemCode) },
    ]);
};
const mapStateToProps = state => (
  {
    listOfCounselorsInAGroup: state.list.listOfCounselorsInAGroup,
    CAE: state.counselor.profile.CAE,
    cpf: state.counselor.profile.cpf,
    disableCounselor: counselor => disableCounselor(counselor),
  }
);

const mapDispachtoProps = dispatch => (
  {
    asyncGetCounselorFromGroup: (CAE, CPF) => dispatch(asyncGetCounselorFromGroup(CAE, CPF)),
  }
);

export default connect(mapStateToProps, mapDispachtoProps)(ManageRegistersScreen);
