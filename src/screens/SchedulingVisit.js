import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Header from '../components/Header';


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

  Input: {
    marginHorizontal: 15,
    paddingLeft: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: 'gray',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 7,
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
      date: '',
      time: '',
    };
  }
  render() {
    return (
      <View style={styles.principal}>
        <Header
          title={'AGENDAR'}
          subTitle={'VISITA'}
        />
        <View style={styles.Container}>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Pesquisando')}
            >
              <Text style={styles.buttonText}>Pesquisar escola</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Container}>
          <DatePicker
            style={styles.Picker}
            placeholder="Data"
            date={this.state.date}
            mode="date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateInput: {
                borderRadius: 7,
              },
            }}
            onDateChange={date => this.setState({ date })}
          />
        </View>


        <View style={styles.Container}>
          <DatePicker
            style={styles.Picker}
            placeholder="Horário"
            date={this.state.time}
            mode="time"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateInput: {
                borderRadius: 7,
              },
            }}
            onDateChange={time => this.setState({ time })}
          />
        </View>

        <View style={styles.Container}>
          <View>
            <TouchableOpacity
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
              style={styles.button}
              onPress={() => Alert.alert('Pesquisando')}
            >
              <Text style={styles.buttonText}>Pesquisar Agente Sanitário</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Container}>
          <TouchableOpacity
            style={styles.schedullingButton}
            onPress={() => Alert.alert('Agendamento realizado com sucesso!')}
          >
            <Text style={styles.buttonText}>Agendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
