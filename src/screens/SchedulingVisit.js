import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import PopupDialog, { DialogTitle, DialogButton } from 'react-native-popup-dialog';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';
import Header from '../components/Header';
import SchoolData from '../components/SchoolData';
import InvitedCounselorsData from '../components/InvitedCounselorsData';
import Button from '../components/Button';


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

  textBox: {
    paddingLeft: 2,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 15,
    paddingVertical: 5,
  },

  listRegisters: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 3,
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
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
        listOfInvitees: {},
      },
      listOfInviteesWithCounselorInformations: {},
    };
  }

  componentWillMount() {
    this.props.asyncGetCounselorFromGroup(this.props.counselor.profile.CAE,
      this.props.counselor.profile.cpf);
  }

  componentWillReceiveProps(newProps) {
    const newVisit = {
      codSchool: newProps.school.schoolCode,
      date: this.state.visit.date,
      time: this.state.visit.time,
      listOfInvitees: this.state.visit.listOfInvitees,
    };

    this.setState({ visit: newVisit });
  }

  manageInvitedListState(counselor) {
    const newListWithInformations = this.state.listOfInviteesWithCounselorInformations;
    const newList = this.state.visit.listOfInvitees;

    // If the counselor is not at the list (undefined),
    // we will add him to the list, where its key is the counselor's nuvemCode
    if (newListWithInformations[counselor.nuvemCode] === undefined) {
      newListWithInformations[counselor.nuvemCode] = counselor;
      this.setState({ listOfInviteesWithCounselorInformations:
       newListWithInformations });

      newList[counselor.nuvemCode] = {
        nuvemCode: counselor.nuvemCode,
        confirmed: false,
      };
      this.setState({ visit: { ...this.state.visit, listOfInvitees: newList } });
    } else {
      delete newListWithInformations[counselor.nuvemCode];
      this.setState({ listOfInviteesWithCounselorInformations:
       newListWithInformations });

      delete newList[counselor.nuvemCode];
      this.setState({ visit: { ...this.state.visit, listOfInvitees: newList } });
    }
  }

  changeStyleAccordingToInput(counselor) {
    if (this.state.listOfInviteesWithCounselorInformations[counselor.nuvemCode] !== undefined) {
      return [styles.listRegisters, { borderColor: '#FF9500' }];
    }
    return styles.listRegisters;
  }

  cancelInviteList() {
    this.setState({ visit: { ...this.state.visit, listOfInvitees: {} } });

    this.setState({ listOfInviteesWithCounselorInformations: {} });

    this.popupDialog.dismiss();
  }

  showInvitedList() {
    if (this.statelistOfInviteesWithCounselorInformations !== {}) {
      return (
        Object.entries(this.state.listOfInviteesWithCounselorInformations)
          .map(counselor => (
            <InvitedCounselorsData {...counselor[1]} />
          ))
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
          style={{ flex: 1 }}
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          dialogTitle={<DialogTitle title="Conselheiros do seu CAE" />}
          actions={[
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <DialogButton
                buttonStyle={{ marginVertical: -18 }}
                text="ACEITAR"
                onPress={() => this.popupDialog.dismiss()}
                key="dialogButton1"
              />
              <DialogButton
                buttonStyle={{ marginVertical: -18 }}
                text="CANCELAR"
                onPress={() => this.cancelInviteList()}
                key="dialogButton2"
              />
            </View>,
          ]}
          height="80%"
          width="85%"
        >
          <ScrollView key="showInviteCounselorList">
            {this.renderCounselorList()}
          </ScrollView>
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
                onPress={() => this.popupDialog.show()}
              >
                <Text style={styles.buttonText}>Pesquisar Conselheiro</Text>
              </TouchableOpacity>
            </View>
          </View>

          {this.showInvitedList()}

          <View style={styles.Container}>
            <View>
              <TouchableOpacity
                key="searchAgentButton"
                style={styles.button}
                onPress={() => Alert.alert('Pesquisando')}
              >
                <Text style={styles.buttonText}>Pesquisar Agente Sanitário</Text>
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
  asyncGetCounselorFromGroup: PropTypes.func.isRequired,
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
    name: PropTypes.string,
    cpf: PropTypes.string,
    phone: PropTypes.string,
  })).isRequired,
};
