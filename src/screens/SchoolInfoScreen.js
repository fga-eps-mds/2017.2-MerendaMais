import React from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';

import { SCHOOL_ENDPOINT } from '../constants';
import { logInfo, logWarn } from '../../logConfig/loggers';

const FILE_NAME = 'SchoolInfoScreen.js';

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
      <View>
        <Text style={{ color: 'black', fontSize: 20 }}>Nome:{this.props.school.schoolName}</Text>
        <Text style={{ color: 'black', fontSize: 20 }}>Email:{this.props.school.schoolEmail}</Text>
        <Text style={{ color: 'black', fontSize: 20 }}>Telefone:{this.props.school.schoolPhone}</Text>
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
