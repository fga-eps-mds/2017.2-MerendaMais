import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Header from '../components/Header';


const iconAccount = require('../images/account_circle.png');

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

  InputCPF: {
    paddingLeft: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  asyncLoginCounselor() {
    const CPF = this.props.cpf;
    const userData = {
      username: CPF,
      password: 'senha',
    };

    this.props.asyncLoginCounselor(userData);
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
        onPress={() => this.asyncLoginCounselor()}
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
          <View style={styles.InputCPF}>
            <Image source={iconAccount} style={styles.icon} />
            <TextInput
              width={280}
              returnKeyType="go"
              onChangeText={CPF => this.props.modifyCPF(CPF)}
              maxLength={11}
              keyboardType={'numeric'}
              value={this.props.cpf}
              underlineColorAndroid="transparent"
              placeholder="CPF"
            />
          </View>


          {this.renderBtnLogin()}

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => Actions.loginPresidentScreen()}
          >
            <Text style={{ marginTop: 30 }}>É um presidente?
              <Text style={{ color: 'blue' }}> Clique aqui</Text>
            </Text>
          </TouchableOpacity>
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
  modifyCPF: PropTypes.func.isRequired,
  asyncLoginCounselor: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  cpf: PropTypes.string.isRequired,
};
