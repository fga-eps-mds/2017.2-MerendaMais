import React, { PropTypes } from 'react';
import { StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image }
  from 'react-native';
import Header from '../components/Header';

const iconEmail = require('../images/ic_email.png');
const iconPhone = require('../images/ic_phone.png');
const iconName = require('../images/ic_account_circle.png');

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

  inputs: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'gray',
    marginHorizontal: 15,
    marginBottom: 30,
    justifyContent: 'flex-start',
    paddingLeft: 2,
    paddingRight: 4,
    flexDirection: 'row',
    alignItems: 'center',

  },


  icon: {
    width: 30,
    height: 30,
    margin: 5,
  },
});

export default class UpdateInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      name: '',
    };
  }
  handleFieldOnChange(field, value) {
    this.setState({
      [field]: value,
    });
  }
  fetchCounselorData() {
    return {
      email: this.state.email,
      phone: this.state.phone,
      name: this.state.name,
      id: this.props.id,
    };
  }
  render() {
    return (

      <View style={styles.principal}>
        <Header
          title={'Editar Informações'}
          backButton
        />
        <View style={styles.content}>
          <View style={styles.inputs}>
            <Image source={iconName} style={styles.icon} />
            <TextInput
              width={280}
              maxLength={60}
              keyboardType={'default'}
              placeholder="Digite seu nome"
              underlineColorAndroid="transparent"
              onChangeText={text => this.handleFieldOnChange('name', text)}
            />
          </View>
          <View style={styles.inputs}>
            <Image source={iconEmail} style={styles.icon} />
            <TextInput
              width={280}
              maxLength={50}
              keyboardType={'email-address'}
              placeholder="nome@exemplo.com"
              underlineColorAndroid="transparent"
              onChangeText={text => this.handleFieldOnChange('email', text)}
            />
          </View>
          <View style={styles.inputs}>
            <Image source={iconPhone} style={styles.icon} />
            <TextInput
              width={280}
              maxLength={11}
              keyboardType={'phone-pad'}
              placeholder="(00)00000-0000"
              underlineColorAndroid="transparent"
              onChangeText={text => this.handleFieldOnChange('phone', text)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.editUser(this.fetchCounselorData())}
        >
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

UpdateInfoScreen.propTypes = {
  editUser: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
