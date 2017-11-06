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
    paddingHorizontal: 18,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  footer: {
    flex: 0.5,
    borderTopColor: '#a9a9a9',
    borderTopWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  Inputemail: {
    paddingHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 7,
  },
  InputPassword: {
    paddingHorizontal: 2,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: 'gray',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 7,
  },
  buttonLogin: {
    paddingVertical: 18,
    marginTop: 50,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#FF9500',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
  },

  loading: {
    marginTop: 50,
    paddingVertical: 13,
  },

});

export default class LoginScreen extends React.Component {
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
        <ActivityIndicator style={styles.loading} size="large" color="#FF9500" />
      );
    }
    return (
      <TouchableOpacity
        style={styles.buttonLogin}
        activeOpacity={0.7}
        key="LoginCounselor"
        onPress={() => this.props.asyncLoginCounselor(this.state)}
      >
        <Text style={styles.buttonText}>Entrar</Text>
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
              width={280}
              returnKeyType="next"
              onChangeText={email => this.setState({ email })}
              value={this.email}
              underlineColorAndroid="transparent"
              placeholder="Email"
              keyboardType={'email-address'}
              onSubmitEditing={() => this.passwordInput.focus()}
            />
          </View>

          <View style={styles.InputPassword}>
            <Image source={iconLock} style={styles.icon} />
            <TextInput
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

LoginScreen.propTypes = {
  asyncLoginCounselor: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
