import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Picker, TouchableOpacity, Alert, ScrollView } from 'react-native';
import PopupDialog, {
  DialogTitle,
  DialogButton,
} from 'react-native-popup-dialog';
import { EvilIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';
import Header from '../components/Header';
import SchoolData from '../components/SchoolData';
import InvitedCounselorsData from '../components/InvitedCounselorsData';
import Button from '../components/Button';

const styles = StyleSheet.create({

  principal: {
    flex: 1,
    backgroundColor: 'white',
  },

  icon: {
    marginRight: 15,
  },

  button: {
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 10,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },

  Container: {
    marginTop: 15,
    marginHorizontal: 20,
  },

  Picker: {
    marginHorizontal: 15,
    width: '95%',
  },

  popUp: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },

  popUpText: {
    fontSize: 15,
    textAlign: 'justify',
    lineHeight: 20,
  },

  textBox: {
    margin: 1.5,
    paddingLeft: 2,
    justifyContent: 'flex-start',
  },

  text: {
    fontSize: 15,
    paddingVertical: 3,
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

  invitedList: {
    borderColor: 'black',
    height: 250,
    borderWidth: 1.5,
    padding: 1,
    marginHorizontal: 20,
    borderRadius: 5,
  },

  dialogButtonStyle: {
    marginVertical: -16,
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

  TopListText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 8,
  },

});

export default class SchedulingVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appToken: this.props.counselor.token,
      nuvemCode: this.props.counselor.nuvemCode,
      codGrupoDestino: this.props.counselor.profile.codGroup,
      visit: {
        codSchool: 0,
        schoolName: '',
        date: '',
        time: '',
        invitedAgent: false,
        agentEmail: '',
        visitListOfInvitees: this.props.visitListOfInvitees,
      },
    };
  }

  componentWillMount() {
    this.props.asyncGetCounselorFromGroup(this.props.counselor.profile.CAE,
      this.props.counselor.profile.cpf);
  }

  componentWillReceiveProps(newProps) {
    const newVisit = {
      codSchool: newProps.school.schoolCode,
      schoolName: newProps.school.schoolName,
      date: this.state.visit.date,
      time: this.state.visit.time,
      invitedAgent: this.state.visit.invitedAgent,
      agentEmail: this.state.visit.agentEmail,
      visitListOfInvitees: newProps.visitListOfInvitees,
    };

    this.setState({ visit: newVisit });
  }

  invitingAgent() {
    this.setState({ visit: { ...this.state.visit, invitedAgent: true } });
    this.popupDialogAgent.dismiss();
  }

  notInvitingAgent() {
    this.setState({ visit: { ...this.state.visit, invitedAgent: false } });
    this.popupDialogAgent.dismiss();
  }

  buttonActivation() {
    if (this.state.visit.agentEmail > '') {
      return (
        <DialogButton
          enabled
          key="invitingButton"
          text="Convidar"
          onPress={() => { this.invitingAgent(); }}
        />
      );
    }
    return (
      <DialogButton
        enabled
        key="notInvitingButton"
        text="Cancelar"
        onPress={() => { this.notInvitingAgent(); }}
      />
    );
  }

  manageInvitedListState(counselor) {
    const visitNewLists = {
      visitNewListWithInformations: this.props.visitListOfInviteesWithCounselorInformations,
      visitNewList: this.state.visit.visitListOfInvitees,
    };

    // If the counselor is not at the list (undefined),
    // we will add him to the list, where its key is the counselor's nuvemCode
    if (visitNewLists.visitNewListWithInformations[counselor.nuvemCode] === undefined) {
      visitNewLists.visitNewListWithInformations[counselor.nuvemCode] = counselor;

      visitNewLists.visitNewList[counselor.nuvemCode] = {
        nuvemCode: counselor.nuvemCode,
        confirmed: false,
        realizedVisit: false,
      };
      this.props.setVisitNewLists(visitNewLists);
    } else {
      delete visitNewLists.visitNewListWithInformations[counselor.nuvemCode];
      delete visitNewLists.visitNewList[counselor.nuvemCode];

      this.props.setVisitNewLists(visitNewLists);
    }

    this.forceUpdate();
  }

  changeStyleAccordingToInput(counselor) {
    if
    (this.props.visitListOfInviteesWithCounselorInformations[counselor.nuvemCode] !== undefined) {
      return [styles.listRegisters, { borderColor: '#FF9500' }];
    }
    return styles.listRegisters;
  }

  cancelInviteList() {
    const visitNewLists = {
      visitNewListWithInformations: {},
      visitNewList: {},
    };

    this.props.setVisitNewLists(visitNewLists);

    this.popupDialogCounselor.dismiss();
  }

  deleteSpecificCounselor(counselorNuvemCode) {
    const visitNewLists = {
      visitNewListWithInformations: this.props.visitListOfInviteesWithCounselorInformations,
      visitNewList: this.state.visit.visitListOfInvitees,
    };

    delete visitNewLists.visitNewListWithInformations[counselorNuvemCode];
    delete visitNewLists.visitNewList[counselorNuvemCode];

    this.props.setVisitNewLists(visitNewLists);

    this.forceUpdate();
  }

  showInvitedList() {
    // Check if the Object is empty
    if (Object.keys(this.props.visitListOfInviteesWithCounselorInformations)
      .length !== 0) {
      return (
        <View>
          <Text style={styles.TopListText}>Lista de conselheiros convidados</Text>
          <View style={styles.invitedList}>
            <ScrollView>
              {
                Object.entries(this.props.visitListOfInviteesWithCounselorInformations)
                  .map(counselor => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                      <InvitedCounselorsData
                        key={counselor[0]}
                        {...counselor[1]}
                      />
                      <TouchableOpacity
                        onPress={() => this.deleteSpecificCounselor(counselor[0])}
                      >
                        <EvilIcons name="close" style={styles.icon} size={26} color="red" />
                      </TouchableOpacity>
                    </View>
                  ))
              }
            </ScrollView>
          </View>
        </View>
      );
    }
    return null;
  }

  renderCounselorList() {
    return (
      this.props.listOfCounselorsInAGroup.map(counselor => (
        <View style={this.changeStyleAccordingToInput(counselor)} key={counselor.nuvemCode}>
          <TouchableOpacity
            onPress={() => this.manageInvitedListState(counselor)}
          >
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
          </TouchableOpacity>
        </View>
      ))
    );
  }

  render() {
    return (
      <View style={styles.principal}>
        <Header
          title={'AGENDAR'}
          subTitle={'VISITA'}
          backButton
        />

        <PopupDialog
          ref={(popupDialogAgent) => { this.popupDialogAgent = popupDialogAgent; }}
          height="70%"
          width="90%"
          dialogTitle={<DialogTitle
            title="Convidar um Agente?"
          />}
          actions={[this.buttonActivation()]}
        >
          <View style={styles.popUp}>
            <Text style={styles.popUpText}>Escolha algum dos agentes abaixo para poder convidá-lo.
            Para isso, é necessário possuir um aplicativo de email instalado
            no seu celular. Caso não possua ou não deseje convidar um agente,
            não selecione nenhum agente e clique em cancelar.</Text>

            <Picker
              style={styles.Picker}
              selectedValue={this.state.visit.agentEmail}
              onValueChange={
                value => this.setState({ visit: { ...this.state.visit, agentEmail: value } })}
            >
              <Picker.Item value="" label="Escolha o agente" color="#95a5a6" />
              <Picker.Item value={'outroemail@email.com'} label={'Agente Sanitário'} />
              <Picker.Item value={'email@email.com'} label={'Poder Executivo'} />
            </Picker>

          </View>
        </PopupDialog>

        <PopupDialog
          ref={(popupDialogCounselor) => {
            this.popupDialogCounselor = popupDialogCounselor;
          }}
          dialogTitle={<DialogTitle title="Escolha quem deseja convidar" />}
          overlayPointerEvents="none"
          height="80%"
          width="85%"
          actions={[
            <View style={styles.footerPopUp}>
              <DialogButton
                buttonStyle={styles.dialogButtonStyle}
                text="ACEITAR"
                onPress={() => this.popupDialogCounselor.dismiss()}
                key="dialogButton1"
              />
              <DialogButton
                buttonStyle={styles.dialogButtonStyle}
                text="CANCELAR"
                onPress={() => this.cancelInviteList()}
                key="dialogButton2"
              />
            </View>,
          ]}
        >
          <ScrollView key="showInviteCounselorList">
            {this.renderCounselorList()}
          </ScrollView>
        </PopupDialog>

        <ScrollView>
          <View>
            <View style={styles.Container}>
              <TouchableOpacity
                key="searchSchoolButton"
                style={styles.button}
                onPress={() => Actions.searchSchool()}
              >
                <Text style={styles.buttonText}>Pesquisar escola</Text>
              </TouchableOpacity>
            </View>

            {this.props.school.schoolSelected && (
              <SchoolData {...this.props.school} />
            )}

            <View style={[styles.Container, { marginVertical: 10 }]}>
              <DatePicker
                style={styles.Picker}
                placeholder="Data"
                date={this.state.visit.date}
                mode="date"
                format="DD-MM-YYYY"
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                customStyles={{
                  dateInput: {
                    borderRadius: 7,
                  },
                }}
                onDateChange={date => this.setState({ visit: { ...this.state.visit, date } })}
              />
            </View>

            <View style={styles.Container}>
              <DatePicker
                style={styles.Picker}
                placeholder="Horário"
                date={this.state.visit.time}
                mode="time"
                confirmBtnText="Confirmar"
                cancelBtnText="Cancelar"
                customStyles={{
                  dateInput: {
                    borderRadius: 7,
                  },
                }}
                onDateChange={time => this.setState({ visit: { ...this.state.visit, time } })}
              />
            </View>

            <View style={styles.Container}>
              <TouchableOpacity
                key="searchCounselorButton"
                style={styles.button}
                onPress={() => this.popupDialogCounselor.show()}
              >
                <Text style={styles.buttonText}>Adicionar Conselheiro</Text>
              </TouchableOpacity>
            </View>

            {this.showInvitedList()}

            <View style={styles.Container}>
              <TouchableOpacity
                key="searchAgentButton"
                style={styles.button}
                onPress={() => this.popupDialogAgent.show()}
              >
                <Text style={styles.buttonText}>Convidar Agente</Text>
              </TouchableOpacity>
            </View>

            <View>
              {this.props.school.schoolSelected &&
                this.state.visit.date !== '' && this.state.visit.time !== '' && (
                  <Button
                    enabled
                    key="scheduleButton"
                    text="Agendar"
                    onPress={() => {
                      Alert.alert(
                        'Agendamento Realizado',
                        'O agendamento foi realizado com sucesso! Caso tenha convidado um agente, seu aplicativo de email abrirá.',
                        [
                          { text: 'Ok', onPress: () => this.props.asyncSchedulingVisit(this.state), style: 'cancel' },
                        ],
                        { cancelable: false });
                    }}
                  />
                )}
              <Button
                enabled={false}
                text="Agendar"
                key="scheduleButton"
                onPress={() => ({})}
                disabled
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


const { shape, string, number, bool, func } = PropTypes;

SchedulingVisit.propTypes = {
  asyncSchedulingVisit: func.isRequired,
  asyncGetCounselorFromGroup: func.isRequired,
  setVisitNewLists: func.isRequired,
  counselor: shape({
    token: string.isRequired,
    nuvemCode: number.isRequired,
  }).isRequired,
  school: shape({
    schoolCode: number.isRequired,
    schoolName: string.isRequired,
    schoolPhone: string.isRequired,
    schoolEmail: string.isRequired,
  }).isRequired,
  listOfCounselorsInAGroup: PropTypes.arrayOf(PropTypes.shape({
    name: string.isRequired,
    cpf: string.isRequired,
    phone: string.isRequired,
  })).isRequired,
  visitListOfInviteesWithCounselorInformations: shape({
    nuvemCode: number.isRequired,
    name: string.isRequired,
    cpf: string.isRequired,
    phone: string.isRequired,
  }).isRequired,
  visitListOfInvitees: shape({
    nuvemCode: number.isRequired,
    confirmed: bool.isRequired,
    realizedVisit: bool.isRequired,
  }).isRequired,
};
