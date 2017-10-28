import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Header from '../components/Header';

const styles = StyleSheet.create({

  principal: {
    flex: 1,
  },

  buttonContainer: {
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },

});


export default class SchedulingVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '27-10-2017',
      time: '01:00',
    };
  }
  render() {
    return (
      <View style={styles.principal}>
        <Header title={'Agendar Visita'} />

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>HORA SELECIONADA: {this.state.time}</Text>
          <Text>DATA SELECIONADA: {this.state.date}</Text>

          <DatePicker
            placeholder="escolha uma data"
            style={{ width: '90%' }}
            mode="date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            onDateChange={date => this.setState({ date })}
          />
          <DatePicker
            placeholder="escolha uma hora"
            style={{ width: '90%' }}
            mode="time"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            onDateChange={time => this.setState({ time })}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => Alert.alert('Clique realizado')}
          >
            <Text style={styles.buttonText}>Concluir Agendamento de Visita</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
