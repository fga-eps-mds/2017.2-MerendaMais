import React from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import { SCHOOL_ENDPOINT } from '../constants';
import { logInfo, logWarn } from '../../logConfig/loggers';

const FILE_NAME = 'SchoolInfoScreen.js';

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },

  buttonContainer: {
    paddingVertical: 10,
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

  content: {

    marginBottom: 9,
    flex: 6,
    flexDirection: 'column',
  },

  checkbox: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    flexWrap: 'wrap',
  },
  text: {
    flexDirection: 'row',
  },
  label: {
    paddingTop: 15,
    flex: 1,
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
      <ScrollView style={styles.content}>
        <Header
          title={'Pesquisar Escola'}
        />
        <Text />
        <Text> Infomações </Text>
        <Text style={{ color: 'black', fontSize: 20 }}>Nome:{this.props.school.schoolName}</Text>
        <Text style={{ color: 'black', fontSize: 20 }}>Email:{this.props.school.schoolEmail}</Text>
        <Text style={{ color: 'black', fontSize: 20 }}>Telefone:{this.props.school.schoolPhone}</Text>
      </ScrollView>
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
