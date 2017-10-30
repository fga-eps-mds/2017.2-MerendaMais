import React from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { SCHOOL_ENDPOINT } from '../constants';
import { logInfo, logWarn } from '../../logConfig/loggers';

const FILE_NAME = 'SchoolInfoScreen.js';

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },

  listInfo: {
    flex: 4,
    marginHorizontal: 10,
    paddingTop: 5,
    // justifyContent: 'center',
    width: 340,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
  },
  text: {
    flexDirection: 'row',
    color: '#95a5a6',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },

});

class SchoolInfoScreen extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      name: '',
      phone: '',
      email: '',
    };
  }

  componentWillMount() {
    logInfo(FILE_NAME, 'componentWillMount',
      `URL:${SCHOOL_ENDPOINT}/${this.props.school.schoolCode}`);

    axios.get(`${SCHOOL_ENDPOINT}/${this.props.school.schoolCode}`, {
      params: {
        campos: 'nome,email,telefone',
      },
    })
      .then((response) => {
        logInfo(FILE_NAME, 'componentWillMount',
          `Successfully got school data: ${JSON.stringify(response.data, null, 2)}`);

        // Since we get the response in portuguese, we need to "translate" it so we
        // can add it in the store.
        this.props.setSchoolInfo(
          {
            schoolCode: response.data.codEscola,
            schoolName: response.data.nome,
            schoolPhone: response.data.telefone,
            schoolEmail: response.data.email,
          });
      })
      .catch((error) => {
        logWarn(FILE_NAME, 'componentWillMount', error);
      });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Header
          title={'Pesquisar Escola'}
        />

        <Text style={styles.text}>  Infomações</Text>
        <View style={styles.listInfo}>
          <Text style={{ color: '#95a5a6', fontSize: 20 }}>Nome: </Text>
          <Text style={{ color: 'black', fontSize: 19 }}>{this.props.school.schoolName}</Text>
          <Text style={{ color: '#95a5a6', fontSize: 20 }}>Email: </Text>
          <Text style={{ color: 'black', fontSize: 19 }}>{this.props.school.schoolEmail}</Text>
          <Text style={{ color: '#95a5a6', fontSize: 20 }}>Telefone: </Text>
          <Text style={{ color: 'black', fontSize: 19 }}>{this.props.school.schoolPhone}</Text>
          <Text style={{ color: '#95a5a6', fontSize: 20 }}>Localização: </Text>
        </View>

        <TouchableOpacity
          // onPress={}
          style={styles.buttonContainer}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Agendar Visita</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={}
          style={styles.buttonContainer}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Acessar Visitas</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { shape, func, number } = React.PropTypes;

SchoolInfoScreen.propTypes = {
  setSchoolInfo: func.isRequired,
  school: shape({
    schoolCode: number.isRequired,
  }).isRequired,
};

export default SchoolInfoScreen;
