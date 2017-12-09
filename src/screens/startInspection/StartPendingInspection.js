import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import PopupDialog, {
  DialogTitle,
  DialogButton,
} from 'react-native-popup-dialog';

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingTop: 6,
    backgroundColor: 'white',
  },

  listSchedule: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textBox: {
    flex: 4,
    paddingLeft: 4,
    justifyContent: 'flex-start',
    marginRight: 15,
  },

  text: {
    fontSize: 15,
    paddingVertical: 2,
  },

  buttonBox: {
    borderColor: 'black',
    borderWidth: 0.8,
    borderRadius: 7,
    backgroundColor: '#4cd964',
    padding: 8,
    justifyContent: 'center',
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },

  buttonInvitees: {
    borderColor: 'black',
    borderWidth: 0.8,
    borderRadius: 7,
    backgroundColor: 'white',
    padding: 8,
    justifyContent: 'center',
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },

  buttonText: {
    fontSize: 12,
    textAlign: 'center',
  },

  popUp: {
    marginBottom: 120,
  },

  footerPopUp: {
    backgroundColor: '#F9F9FB',
    borderColor: '#DAD9DC',
    borderTopWidth: 0.5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listRegisters: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 7,
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
  },

  noneScheduleTextBox: {
    flex: 1,
    marginHorizontal: 28,
    marginVertical: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
  },

  noneScheduleText: {
    fontSize: 18,
  },
});

class StartPendingInspection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invitees: [],
    };
  }

  componentDidMount() {
    this.props.resetStore('report');
    this.props.asyncGetSchedule(this.props.counselor);
    this.props.asyncGetCounselorFromGroup(this.props.counselor.profile.CAE,
      this.props.counselor.profile.cpf);
  }

  mountvisitListOfInvitees(visitListOfInvitees) {
    const list = [];
    this.setState({ invitees: [] });
    // Faz um map da list de conselheiros do CAE
    this.props.listOfCounselorsInAGroup.map((counselor) => {
      /* caso o conselheiro do CAE esteja na lista de convidados
      ele será adicionado numa lista com suas informações
      O conselheiro da sessão não será mostrado por que ele não é colocado em
      listOfCounselorsInAGroup */
      if (visitListOfInvitees[counselor.nuvemCode] !== undefined) {
        const completeCounselor = {
          ...counselor,
          confirmed: visitListOfInvitees[counselor.nuvemCode].confirmed,
          realizedVisit: visitListOfInvitees[counselor.nuvemCode].realizedVisit,
        };
        list.push(completeCounselor);
        return this.setState({ invitees: list });
      }

      return null;
    });
    this.popupDialog.show();
  }

  verification(visitListOfInvitees, visitSchedule) {
    if (visitListOfInvitees[this.props.counselor.nuvemCode] === undefined) {
      return (
        <View style={[styles.buttonBox, { backgroundColor: '#ff3b30' }]}>
          <TouchableOpacity
            disabled
          >
            <Text style={styles.buttonText}>NÃO CONVIDADO</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (!visitListOfInvitees[this.props.counselor.nuvemCode].confirmed) {
      return (
        <View style={[styles.buttonBox, { backgroundColor: '#ffcc00' }]}>
          <TouchableOpacity
            disabled
          >
            <Text style={styles.buttonText}>NÃO CONFIRMOU</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.buttonBox}>
        <TouchableOpacity
          onPress={() => {
            this.props.setCurrentInspection(visitSchedule);
            Actions.mainReportsScreen();
          }}
        >
          <Text style={styles.buttonText}>FISCALIZAR</Text>
        </TouchableOpacity>
      </View>
    );
  }

  arrayScheduleList() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#FF9500" />
      );
    } else if (this.props.listOfPendingScheduleInAGroup.length === 0) {
      return (
        <View style={styles.noneScheduleTextBox}>
          <Text style={styles.noneScheduleText}>Nenhum Agendamento Pendente!</Text>
        </View>
      );
    }
    return (
      this.props.listOfPendingScheduleInAGroup.map(visitSchedule => (
        <View style={styles.listSchedule} key={`PE${visitSchedule.codPostagem}`}>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Escola: </Text>
              {visitSchedule.content.schoolName}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Data: </Text>
              {visitSchedule.content.date}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Horário: </Text>
              {visitSchedule.content.time}
            </Text>
            {
              visitSchedule.content.invitedAgent ? (
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Um agente foi convidado</Text>
                </Text>
              ) :
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Agente não convidado</Text>
                </Text>
            }
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Número de participantes: </Text>
              {Object.keys(visitSchedule.content.visitListOfInvitees).length}
            </Text>
          </View>
          <View style={{ flex: 3 }}>
            {this.verification(visitSchedule.content.visitListOfInvitees, visitSchedule)}
            <View style={styles.buttonInvitees}>
              <TouchableOpacity
                onPress={() =>
                  this.mountvisitListOfInvitees(visitSchedule.content.visitListOfInvitees)}
              >
                <Text style={styles.buttonText}>PARTICIPANTES</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))
    );
  }

  renderCounselorList() {
    return (
      this.state.invitees.map(counselor => (
        <View style={styles.listRegisters} key={counselor.nuvemCode}>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Nome: </Text>
              {counselor.name}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Email: </Text>
              {counselor.email}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Telefone: </Text>
              {counselor.profile.phone}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Status da Visita: </Text>
              { counselor.confirmed ?
                <Text> Confirmado </Text>
                : <Text> Não Confirmado </Text>
              }
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Status da Fiscalização: </Text>
              { counselor.confirmed ?
                <Text> Realizada </Text>
                : <Text> Não Realizada </Text>
              }
            </Text>
          </View>
        </View>
      ))
    );
  }

  render() {
    return (
      <View style={styles.principal}>
        <PopupDialog
          /* Popup para mostrar a lista de convidados */
          ref={(popupDialog) => {
            this.popupDialog = popupDialog;
          }}
          dialogTitle={<DialogTitle title="Convidados" />}
          dialogStyle={styles.popUp}
          overlayPointerEvents="none"
          height="70%"
          width="85%"
          actions={[
            <View style={styles.footerPopUp}>
              <DialogButton
                buttonStyle={styles.dialogButtonStyle}
                text="OK"
                onPress={() => this.popupDialog.dismiss()}
                key="dialogButton1"
              />
            </View>,
          ]}
        >
          <ScrollView key="showInviteCounselorList">
            {this.renderCounselorList()}
          </ScrollView>
        </PopupDialog>

        <ScrollView style={styles.content}>
          {this.arrayScheduleList()}
        </ScrollView>
      </View>
    );
  }
}

const { shape, func } = PropTypes;

StartPendingInspection.propTypes = {
  resetStore: func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  asyncGetCounselorFromGroup: func.isRequired,
  asyncGetSchedule: func.isRequired,
  setCurrentInspection: func.isRequired,
  listOfPendingScheduleInAGroup: PropTypes.arrayOf(PropTypes.shape({
    codSchool: PropTypes.number,
    date: PropTypes.string,
    time: PropTypes.string,
  })).isRequired,
  counselor: shape({
  }).isRequired,
  listOfCounselorsInAGroup: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    cpf: PropTypes.string,
    phone: PropTypes.string,
  })).isRequired,
};

export default StartPendingInspection;
