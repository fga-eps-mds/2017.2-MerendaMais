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
import { SEND_EMAIL_ALERT_BODY } from '../constants';


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
    paddingLeft: 10,
    width: '95%',
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
    };

    this.setState({ visit: newVisit });
  }

  invitingAgent() {
    this.setState({ invitedAgent: true });
    return (
      <View>
        <Picker
          selectedValue={this.state.agentEmail}
          onValueChange={value => this.setState({ agentEmail: value })}
        >
          <Picker.Item value="" label="Escolha o agente" color="#95a5a6" />
          <Picker.Item value={'outroemail@email.com'} label={'Agente Sanitário'} />
          <Picker.Item value={'email@email.com'} label={'Poder Executivo'} />
        </Picker>
        <Button
          text="Ok"
          onPress={() => { this.popupDialog.dismiss(); }}
        />
      </View>
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
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          dialogTitle={<DialogTitle title="Convidar um Agente?" />}
        >
          <View>
            <Text>Deseja convidar um agente para essa visita? Se a resposta for sim,
             seu aplicativo de email padrão será aberto com as informações já preenchidas.
              Caso não tenha um aplicativo de email, será necessário baixar algum.</Text>
            <DialogButton
              enabled
              key="notInvitingButton"
              text="Não"
              onPress={() => { this.popupDialog.dismiss(); }}
            />
            <DialogButton
              enabled
              key="invitingButton"
              text="Sim"
              onPress={() => { this.invitingAgent(); }}
            />
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
                onPress={() => { this.props.asyncSchedulingVisit(this.state); }}
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
