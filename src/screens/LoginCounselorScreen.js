import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const iconAccount = require('../images/account_circle.png');
const iconLock = require('../images/ic_lock.png');

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },
  content: {
    flex: 6,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

  },
  footer: {
    flex: 0.7,
    borderTopColor: '#a9a9a9',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  Inputemail: {
    paddingLeft: 2,
    paddingRight: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 7,
  },
  InputPassword: {
    paddingLeft: 2,
    paddingRight: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    borderColor: 'gray',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 7,
  },
  buttonLogin: {
    paddingHorizontal: 133,
    paddingVertical: 18,
    marginTop: 50,
    marginBottom: 0,
    backgroundColor: '#FF9500',
    borderRadius: 8,
    borderWidth: 1,
  },

});

export default class LoginCounselorScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  renderBtnLogin() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#FF9500" />
      );
    }
    return (
      <TouchableOpacity
        style={styles.buttonLogin}
        activeOpacity={0.7}
        key="LoginCounselor"
        onPress={() => this.props.asyncLoginCounselor(this.state)}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>Entrar</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.principal}>
        <Header />
        <View style={styles.content}>
          <View style={styles.Inputemail}>
            <Image source={iconAccount} style={styles.icon} />
            <TextInput
              style={styles.styleInput}
              width={280}
              returnKeyType="next"
              onChangeText={email => this.setState({ email })}
              value={this.email}
              underlineColorAndroid="transparent"
              placeholder="email"
              keyboardType={'email-address'}
              onSubmitEditing={() => this.passwordInput.focus()}
            />
          </View>

          <View style={styles.InputPassword}>
            <Image source={iconLock} style={styles.icon} />
            <TextInput
              style={styles.styleInput}
              width={280}
              underlineColorAndroid="transparent"
              returnKeyType="go"
              value={this.password}
              secureTextEntry
              onChangeText={password => this.setState({ password })}
              placeholder="Senha"
              ref={(passwordInput) => { this.passwordInput = passwordInput; }}
            />
          </View>

          {this.renderBtnLogin()}

        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => Actions.registerScreen()}
          >
            <Text>Ainda não se cadastrou?
              <Text style={{ color: 'blue' }}> Cadastrar-se</Text>
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

LoginCounselorScreen.propTypes = {
  asyncLoginCounselor: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
