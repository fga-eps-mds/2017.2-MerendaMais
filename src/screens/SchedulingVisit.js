import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView, Dimensions, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';
import SchoolData from '../components/SchoolData';
import Button from '../components/Button';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

  principal: {
    flex: 1,
  },
  textLogo: {
    // Font size 30 looks nice on 360 width phone.
    // (x * widthYourPhone = fontSize) where x is the proportion used in fontSize above.
    fontSize: width * 0.08,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 60,
  },
  wrapper: {
    height: 100,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FF9500',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
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
  icon_header: {
    marginLeft: 20,
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
      },
      verification: true,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.mainScreen());
  }

  componentWillReceiveProps(newProps) {
    const newVisit = {
      codSchool: newProps.school.schoolCode,
      date: this.state.visit.date,
      time: this.state.visit.time,
    };

    this.setState({ visit: newVisit });
  }

  render() {
    return (
      <View style={styles.principal}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => Actions.mainScreen()} >
            <Ionicons
              name="ios-arrow-back-outline"
              style={styles.icon_header}
              size={45}
              color="black"
            />
          </TouchableOpacity>
          <Text style={styles.textLogo}>Agendar Visita</Text>
        </View>
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
