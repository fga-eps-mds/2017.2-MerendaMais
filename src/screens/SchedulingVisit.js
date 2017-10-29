import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Header from '../components/Header';

const SearchIcon = require('../images/ic_search_48pt.png');

const styles = StyleSheet.create({

  principal: {
    flex: 1,
  },

  buttonContainer: {
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },
  Input: {
    marginTop: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 7,
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
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
        <Header
          title={'AGENDAR'}
          subTitle={'VISITA'}
        />
        <View style={styles.Input}>
          <Image source={SearchIcon} style={styles.icon} />
          <TextInput
            width={280}
            returnKeyType="go"
            maxLength={50}
            keyboardType={'default'}
            onChangeText={text => this.validateName(text)}
            value={this.state.name}
            underlineColorAndroid="transparent"
            placeholder="Nome da escola"
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <DatePicker
            placeholder="Data"
            style={{ width: '70%' }}
            mode="date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            onDateChange={date => this.setState({ date })}
          />
          <Text> Data escolhida: {this.state.date}</Text>

          <DatePicker
            placeholder="Hora"
            style={{ width: '70%' }}
            mode="time"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            onDateChange={time => this.setState({ time })}
          />
          <Text> Hora escolhida: {this.state.time}</Text>

        </View>
        <Text>     Convidar Conselheiro</Text>
        <View style={styles.Input}>
          <Image source={SearchIcon} style={styles.icon} />
          <TextInput
            width={280}
            returnKeyType="go"
            maxLength={50}
            keyboardType={'default'}
            onChangeText={text => this.validateName(text)}
            value={this.state.name}
            underlineColorAndroid="transparent"
            placeholder="Nome do Conselheiro"
          />
        </View>
        <Text>     Convidar Agente Sanitário</Text>
        <View style={styles.Input}>
          <Image source={SearchIcon} style={styles.icon} />
          <TextInput
            width={280}
            returnKeyType="go"
            maxLength={50}
            keyboardType={'default'}
            onChangeText={text => this.validateName(text)}
            value={this.state.name}
            underlineColorAndroid="transparent"
            placeholder="Digite o e-mail do Agente"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => Alert.alert('Agendamento realizado com sucesso!')}
          >
            <Text style={styles.buttonText}>Agendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
