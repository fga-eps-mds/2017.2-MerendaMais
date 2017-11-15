import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Picker, TouchableOpacity, Alert, ScrollView } from 'react-native';
import PopupDialog, {
  DialogTitle,
  DialogButton,
} from 'react-native-popup-dialog';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';
import Header from '../components/Header';
import SchoolData from '../components/SchoolData';
import Button from '../components/Button';

import store from '../Reducers/store';

const styles = StyleSheet.create({

  principal: {
    flex: 1,
  },

  schedullingButton: {
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },

  disabledSchedullingButton: {
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#DEDEDE',
    justifyContent: 'flex-end',
  },

  button: {
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },

  Container: {
    flex: 1,
    marginTop: 20,
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

  popUpTitle: {
    fontSize: 30,
  },

  icon: {
    width: 20,
    height: 20,
    margin: 5,
  },

});

export default class SchedulingVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appToken: this.props.counselor.token,
      nuvemCode: this.props.counselor.nuvemCode,
      visit: {
        codSchool: 0,
        date: '',
        time: '',
        invitedAgent: false,
        agentEmail: '',
      },
    };
  }

  componentWillReceiveProps(newProps) {
    const newVisit = {
      codSchool: newProps.school.schoolCode,
      date: this.state.visit.date,
      time: this.state.visit.time,
      invitedAgent: this.state.visit.invitedAgent,
      agentEmail: this.state.visit.agentEmail,
    };

    this.setState({ visit: newVisit });
  }

  invitingAgent() {
    this.setState({ visit: { ...this.state.visit, invitedAgent: true } });
    this.popupDialog.dismiss();
  }

  notInvitingAgent() {
    this.setState({ visit: { ...this.state.visit, invitedAgent: false } });
    this.popupDialog.dismiss();
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

  testa() {
    console.log('DEFINITIVO');
    console.log(this.state.visit);
  }
  render() {
    const newStateDoc = store.getState();
    console.log(newStateDoc.schedule);

    return (
      <View style={styles.principal}>
        <Header
          title={'AGENDAR'}
          subTitle={'VISITA'}
          backButton
        />

        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          dialogTitle={<DialogTitle
            title="Convidar um Agente?"
            titleStyle={styles.popUpTitle}
          />}
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
            {this.buttonActivation()}
          </View>
        </PopupDialog>

        <ScrollView>
          <View style={styles.Container}>
            <View>
              <TouchableOpacity
                key="searchSchoolButton"
                style={styles.button}
                onPress={() => Actions.searchSchool()}
              >
                <Text style={styles.buttonText}>Pesquisar escola</Text>
              </TouchableOpacity>
            </View>
          </View>

          {this.props.school.schoolSelected && (
            <SchoolData {...this.props.school} />
          )}

          <View style={styles.Container}>
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
            <View>
              <TouchableOpacity
                key="searchCounselorButton"
                style={styles.button}
                onPress={() => Alert.alert('Pesquisando')}
              >
                <Text style={styles.buttonText}>Pesquisar Conselheiro</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.Container}>
            <View>
              <TouchableOpacity
                key="searchAgentButton"
                style={styles.button}
                onPress={() => this.popupDialog.show()}
              >
                <Text style={styles.buttonText}>Convidar Agente</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Container}>
            {this.props.school.schoolSelected && (
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
        </ScrollView>
      </View>
    );
  }
}

const { shape, string, number } = PropTypes;

SchedulingVisit.propTypes = {
  asyncSchedulingVisit: PropTypes.func.isRequired,
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
};
