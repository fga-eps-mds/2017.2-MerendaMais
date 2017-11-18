import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import EmailField from '../components/EmailField';
import PasswordField from '../components/PasswordField';

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
    margin: 5,
  },

  Inputemail: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 7,
  },

  InputPassword: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
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
        <KeyboardAvoidingView style={styles.content} behavior="padding">
          <EmailField
            callback={email => this.setState({ email })}
            placeholder="Email"
            onSubmitEditing={() => this.passwordInput.focus()}
            value={this.state.email}
            size={28}
          />

          <PasswordField
            callback={validPassword => this.setState({ validPassword })}
            password={this.state.password}
            placeholder="Digite sua senha"
            isPassword
            size={28}
            value={this.state.password}
            ref={(passwordInput) => { this.passwordInput = passwordInput; }}
          />

          {this.renderBtnLogin()}

        </KeyboardAvoidingView>

        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => Actions.registerScreen()}
          >
            <Text>Ainda não se cadastrou?
              <Text style={{ color: '#0000FF' }}> Cadastrar-se</Text>
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
