import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';
import Header from '../components/Header';
// import PropTypes from 'prop-types';

const iconName = require('../images/ic_face.png');
const iconCpf = require('../images/ic_account_circle.png');
const iconPhone = require('../images/ic_phone.png');
const iconEmail = require('../images/ic_email.png');
const iconJob = require('../images/ic_work.png');
const iconSegment = require('../images/ic_supervisor_account.png');
const iconCAE = require('../images/ic_location_city.png');
const iconCaeType = require('../images/ic_domain.png');

const styles = StyleSheet.create({
  field: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'gray',
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 15,
    justifyContent: 'flex-start',
    paddingLeft: 2,
    paddingRight: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfoScreen: {
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

  infoProfileBox: {
    backgroundColor: 'white',
    marginBottom: 9,
    flex: 6,
    flexDirection: 'column',
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
  },
});

export default class ProfileInfoScreen extends React.Component {
  componentWillMount() {
    this.props.getCounselor(this.props.counselor.id);
  }
  verifyCharge() {
    if (this.props.counselor.profile.isPresident) {
      return 'Cargo: Presidente';
    }
    return 'Cargo: Conselheiro';
  }
  render() {
    return (
      <ScrollView style={styles.profileInfoScreen}>
        <Header
          title={'PERFIL'}
          backButton={'<'}
        />
        <View style={styles.infoProfileBox}>
          <View style={styles.field}>
            <Image source={iconName} style={styles.icon} />
            <Text>Nome: {this.props.counselor.name}</Text>
          </View>
          <View style={styles.field}>
            <Image source={iconCpf} style={styles.icon} />
            <Text>CPF: {this.props.counselor.profile.cpf}</Text>
          </View>
          <View style={styles.field}>
            <Image source={iconPhone} style={styles.icon} />
            <Text>Telefone: {this.props.counselor.profile.phone}</Text>
          </View>
          <View style={styles.field}>
            <Image source={iconEmail} style={styles.icon} />
            <Text>Email: {this.props.counselor.email}</Text>
          </View>
          <View key="is_president" style={styles.field}>
            <Image source={iconJob} style={styles.icon} />
            <Text>{this.verifyCharge()}</Text>
          </View>
          <View style={styles.field}>
            <Image source={iconSegment} style={styles.icon} />
            <Text>Segmento: {this.props.counselor.profile.segment}</Text>
          </View>
          <View style={styles.field}>
            <Image source={iconCAE} style={styles.icon} />
            <Text>CAE: {this.props.counselor.profile.CAE}</Text>
          </View>
          <View style={styles.field}>
            <Image source={iconCaeType} style={styles.icon} />
            <Text>Tipo do CAE: {this.props.counselor.profile.CAE_Type}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const { shape, string } = React.PropTypes;

ProfileInfoScreen.propTypes = {
  getCounselor: PropTypes.func.isRequired,
  counselor: shape({
    name: string.isRequired,
    cpf: string.isRequired,
    phone: string.isRequired,
    email: string.isRequired,
    segment: string.isRequired,
    CAE: string.isRequired,
    CAE_Type: string,
  }).isRequired,
};
