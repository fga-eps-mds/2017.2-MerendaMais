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
    paddingLeft: 4,
    justifyContent: 'flex-start',
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
    padding: 7,
    marginBottom: 20,
    justifyContent: 'center',
    marginRight: 20,
  },

  buttonInvitees: {
    borderColor: 'black',
    borderWidth: 0.8,
    borderRadius: 7,
    backgroundColor: 'white',
    padding: 8,
    justifyContent: 'center',
    marginRight: 20,
    marginTop: 5,
  },

  buttonText: {
    fontSize: 12,
    textAlign: 'center',
  },

  popUp: {
    marginBottom: 120,
  },

  popUpText: {
    fontSize: 15,
    textAlign: 'justify',
    lineHeight: 20,
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
});

class StartPendingInspection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      invitees: [],
    };
  }

  componentWillMount() {
    this.props.asyncGetSchedule(this.props.counselor);
    this.props.asyncGetCounselorFromGroup(this.props.counselor.profile.CAE,
      this.props.counselor.profile.cpf);
  }

  mountListOfInvitees(listOfInvitees) {
    this.setState({ invitees: [] });
    let list = this.state.invitees;

    // Faz um map da list de conselheiros do CAE
    this.props.listOfCounselorsInAGroup.map((counselor) => {
      /* caso o conselheiro do CAE esteja na lista de convidados
      ele será adicionado numa lista com suas informações
      O conselheiro da cessão não será mostrado por que ele não é colocado em
      listOfCounselorsInAGroup */
      if (listOfInvitees[counselor.nuvemCode] !== undefined) {
        list.push(counselor);
        return this.setState({ invitees: list });
      }

      return null;
    });
    list = [];
    this.popupDialog.show();
  }

  verification(listOfInvitees) {
    if (listOfInvitees[this.props.counselor.nuvemCode] === undefined) {
      return (
        <View style={[styles.buttonBox, { backgroundColor: '#ff3b30' }]}>
          <TouchableOpacity
            disabled
          >
            <Text style={styles.buttonText}>NÃO CONVIDADO</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (!listOfInvitees[this.props.counselor.nuvemCode].confirmed) {
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
          onPress={() => Actions.mainReportsScreen()}
        >
          <Text style={styles.buttonText}>FISCALIZAR</Text>
        </TouchableOpacity>
      </View>
    );
  }

  arrayScheduleList() {
    if (this.props.listOfPendingScheduleInAGroup.length === 0) {
      return (
        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#FF9500" />
      );
    }
    return (
      this.props.listOfPendingScheduleInAGroup.map(schedule => (
        <View style={styles.listSchedule}>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Escola: </Text>
              {schedule.schoolName}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Data: </Text>
              {schedule.date}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Horário: </Text>
              {schedule.time}
            </Text>
            {
              schedule.invitedAgent ? (
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Um agente foi convidado</Text>
                </Text>
              ) :
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Agente não convidado</Text>
                </Text>
            }
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Número de convidados: </Text>
              {Object.keys(schedule.listOfInvitees).length}
            </Text>
          </View>
          <View>
            {this.verification(schedule.listOfInvitees)}
            <View style={styles.buttonInvitees}>
              <TouchableOpacity
                onPress={() => this.mountListOfInvitees(schedule.listOfInvitees)}
              >
                <Text style={styles.buttonText}>CONVIDADOS</Text>
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
              <Text style={{ fontWeight: 'bold' }}>CPF: </Text>
              {counselor.cpf}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Telefone: </Text>
              {counselor.phone}
            </Text>
          </View>
        </View>
      ))
    );
  }

  render() {
    console.log('listOfPendingScheduleInAGroup');
    console.log(this.props.listOfPendingScheduleInAGroup);
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
  asyncGetCounselorFromGroup: func.isRequired,
  asyncGetSchedule: func.isRequired,
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
