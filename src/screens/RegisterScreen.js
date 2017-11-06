import React from 'react';
import PropTypes from 'prop-types';
import { Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
  Alert,
  ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';
import { TITULAR_COUNSELOR,
  SURROGATE_COUNSELOR,
  MUNICIPAL_COUNSELOR_CAE,
  STATE_COUNSELOR_CAE,
  PRESIDENT_COUNSELOR,
  COMMON_COUNSELOR,
  COUNSELOR_DEFAULT_PASSWORD } from '../constants';
import { logInfo } from '../../logConfig/loggers';

const FILE_NAME = 'RegisterScreen.js';

const styles = {

  principal: {
    flex: 1,
    backgroundColor: 'white',
  },

  content: {
    flex: 6,
    marginTop: 8,
  },

  footer: {
    flex: 0.5,
    borderTopColor: '#a9a9a9',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  InputStyle: {
    padding: 10,
    marginTop: 1,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 10,
  },

  InputStyleCorrect: {
    padding: 10,
    marginTop: 1,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#80FF80',
    borderWidth: 3,
    borderRadius: 7,
    marginBottom: 10,
  },

  InputStyleWrong: {
    padding: 10,
    marginTop: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 7,
    borderColor: '#FF9999',
    marginBottom: 10,
  },

  InputDropdown: {
    marginTop: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 10,
  },

  buttonContainer: {
    paddingVertical: 14,
    marginVertical: 20,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: '#FF9500',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  },

};

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: '',
      passwordCompared: '',
      profile: {
        cpf: '',
        phone: '',
        isPresident: '',
        segment: '',
        CAE_Type: '',
        CAE: '',
      },
    };
    this.validateCpf = this.validateCpf.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
    this.validateCae = this.validateCae.bind(this);
    this.register = this.register.bind(this);
  }

  validateCpf(cpf) {
    const validCpf = cpf.replace(/[^0-9]/g, '');
    this.setState({ profile: { ...this.state.profile, cpf: validCpf } });
  }

  validateName(name) {
    const validName = name.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, '');
    this.setState({ name: validName });
  }

  validatePhone(phone) {
    const validPhone = phone.replace(/[^0-9]/g, '');
    this.setState({ profile: { ...this.state.profile, phone: validPhone } });
  }

  validateCae(CAE) {
    const validCae = CAE.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, '');
    this.setState({ profile: { ...this.state.profile, CAE: validCae } });
  }

  register() {
    const cpfRegex = /[0-9]{11}/g;
    const nameRegex = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex1 = /[0-9]{11}/g;
    const phoneRegex2 = /[0-9]{10}/g;
    const caeRegex = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;
    let error = false;
    let errorMessage = '';
    if (!cpfRegex.test(this.state.profile.cpf)) {
      error = true;
      errorMessage += 'CPF inválido\n';
    }
    if (!nameRegex.test(this.state.name) || this.state.name.trim() === '') {
      error = true;
      errorMessage += 'Nome inválido\n';
    }
    if (this.state.password.length <= 6) {
      error = true;
      errorMessage += 'Senha deve possuir no mínimo seis caracteres\n';
    }
    if (!emailRegex.test(this.state.email)) {
      error = true;
      errorMessage += 'Email inválido\n';
    }
    if (!phoneRegex1.test(this.state.profile.phone) &&
    !phoneRegex2.test(this.state.profile.phone)) {
      error = true;
      errorMessage += 'Telefone inválido\n';
    }
    if (this.state.profile.isPresident === '') {
      error = true;
      errorMessage += 'Cargo não selecionado\n';
    }
    if (this.state.profile.segment === '') {
      error = true;
      errorMessage += 'Segmento não selecionado\n';
    }
    if (this.state.profile.CAE_Type === '') {
      error = true;
      errorMessage += 'Tipo de CAE não selecionado\n';
    }
    if (!caeRegex.test(this.state.profile.CAE) || this.state.profile.CAE.trim() === '') {
      error = true;
      errorMessage += 'CAE inválido\n';
    }
    if (error === false) {
      this.props.asyncRegisterCounselor(this.state);
    } else {
      Alert.alert('FALHA NO CADASTRO', errorMessage);
    }
  }

  validatePassword() {
    if (this.state.password.length === 0) {
      return styles.InputStyle;
    } else if (this.state.password.length >= 6) {
      return styles.InputStyleCorrect;
    }
    return styles.InputStyleWrong;
  }

  comparePassword(passwordCompared) {
    if (passwordCompared === '') {
      return styles.InputStyle;
    } else if (this.state.password === passwordCompared && passwordCompared.length >= 6) {
      return styles.InputStyleCorrect;
    }
    return styles.InputStyleWrong;
  }

  renderBtnLogin() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator
          style={{ marginTop: 15, marginBottom: 15 }}
          size="large"
          color="#FF9500"
        />
      );
    }
    return (
      <TouchableOpacity
        onPress={() => this.register()}
        style={styles.buttonContainer}
        activeOpacity={0.7}
        key="userCreation"
      >
        <Text style={styles.buttonText}>Concluir</Text>
      </TouchableOpacity>
    );
  }

  render() {
    logInfo(FILE_NAME, 'render()',
      `State of register page: ${JSON.stringify(this.state, null, 2)}`);

    return (
      <View style={styles.principal}>
        <Header />
        <View style={styles.content}>
          <ScrollView>
            <View style={{ paddingHorizontal: 15 }}>

              <Text>CPF</Text>
              <TextInput
                placeholder="Digite o seu CPF"
                placeholderTextColor="#95a5a6"
                style={styles.InputStyle}
                underlineColorAndroid="transparent"
                returnKeyLabel={'next'}
                maxLength={11}
                keyboardType={'numeric'}
                onChangeText={text => this.validateCpf(text)}
                value={this.state.profile.cpf}
              />

              <Text>Nome</Text>
              <TextInput
                placeholder="Digite o seu nome completo"
                placeholderTextColor="#95a5a6"
                style={styles.InputStyle}
                underlineColorAndroid="transparent"
                returnKeyLabel={'next'}
                maxLength={60}
                keyboardType={'default'}
                onChangeText={text => this.validateName(text)}
                value={this.state.name}
              />

              <Text>Email</Text>
              <TextInput
                placeholder="Digite o seu email"
                placeholderTextColor="#95a5a6"
                style={styles.InputStyle}
                underlineColorAndroid="transparent"
                returnKeyLabel={'next'}
                maxLength={50}
                keyboardType={'email-address'}
                onChangeText={text => this.setState({ email: text })}
                value={this.state.email}
              />

              <Text>Senha</Text>
              <TextInput
                placeholder="Digite sua senha"
                placeholderTextColor="#95a5a6"
                style={this.validatePassword()}
                underlineColorAndroid="transparent"
                returnKeyLabel={'next'}
                keyboardType={'default'}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry
              />

              <Text>Confirmar Senha</Text>
              <TextInput
                placeholder="Digite sua senha novamente"
                placeholderTextColor="#95a5a6"
                style={this.comparePassword(this.state.passwordCompared)}
                underlineColorAndroid="transparent"
                returnKeyLabel={'next'}
                keyboardType={'default'}
                onChangeText={text => this.setState({ passwordCompared: text })}
                secureTextEntry
              />

              <Text>Telefone</Text>
              <TextInput
                placeholder="Digite o seu telefone"
                placeholderTextColor="#95a5a6"
                style={styles.InputStyle}
                underlineColorAndroid="transparent"
                returnKeyLabel={'next'}
                maxLength={11}
                keyboardType={'phone-pad'}
                onChangeText={text => this.validatePhone(text)}
                value={this.state.profile.phone}
              />

              <Text>Cargo</Text>
              <View
                style={styles.InputDropdown}
              >
                <Picker
                  onValueChange={value => this.setState({
                    profile: { ...this.state.profile,
                      isPresident: value },
                    password: COUNSELOR_DEFAULT_PASSWORD })}
                  selectedValue={this.state.profile.isPresident}
                >
                  <Picker.Item value="" label="Escolha seu cargo" color="#95a5a6" />
                  <Picker.Item value label={PRESIDENT_COUNSELOR} />
                  <Picker.Item value={false} label={COMMON_COUNSELOR} />
                </Picker>
              </View>

              <Text>Segmento</Text>
              <View
                style={styles.InputDropdown}
              >
                <Picker
                  onValueChange={value => this.setState({ profile: { ...this.state.profile,
                    segment: value } })}
                  selectedValue={this.state.profile.segment}
                >
                  <Picker.Item value="" label="Escolha seu segmento" color="#95a5a6" />
                  <Picker.Item value={SURROGATE_COUNSELOR} label={SURROGATE_COUNSELOR} />
                  <Picker.Item value={TITULAR_COUNSELOR} label={TITULAR_COUNSELOR} />
                </Picker>
              </View>

              <Text>Tipo do CAE</Text>
              <View
                style={styles.InputDropdown}
              >
                <Picker
                  onValueChange={value => this.setState({ profile: { ...this.state.profile,
                    CAE_Type: value } })}
                  selectedValue={this.state.profile.CAE_Type}
                >
                  <Picker.Item value="" label="Escolha o Tipo do seu CAE" color="#95a5a6" />
                  <Picker.Item value={MUNICIPAL_COUNSELOR_CAE} label={MUNICIPAL_COUNSELOR_CAE} />
                  <Picker.Item value={STATE_COUNSELOR_CAE} label={STATE_COUNSELOR_CAE} />
                </Picker>
              </View>

              <Text>CAE</Text>
              <TextInput
                placeholder="Lista com o CAE do seu município/estado"
                placeholderTextColor="#95a5a6"
                style={styles.InputStyle}
                underlineColorAndroid="transparent"
                returnKeyLabel={'next'}
                maxLength={40}
                keyboardType={'default'}
                onChangeText={text => this.validateCae(text)}
                value={this.state.profile.CAE}
              />

              {this.renderBtnLogin()}

            </View>
          </ScrollView>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => Actions.loginScreen()}
          >
            <Text>Já tem um cadastro?
              <Text style={{ color: 'blue' }}> Entrar</Text>
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

RegisterScreen.propTypes = {
  asyncRegisterCounselor: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
