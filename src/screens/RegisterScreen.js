import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
  Alert,
  ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';
import {
  REGISTER_FAIL_TITLE,
  TITULAR_COUNSELOR,
  SURROGATE_COUNSELOR,
  MUNICIPAL_COUNSELOR_CAE,
  STATE_COUNSELOR_CAE,
  PRESIDENT_COUNSELOR,
  COMMON_COUNSELOR,
  EXECUTIVE_POWER,
  EDUCATION_WORKERS,
  STUDENT_PARENTS,
  CIVILIAN_ENTITIES } from '../constants';
import { logInfo } from '../../logConfig/loggers';
import brazilianStates from '../brazilianStates';
import municipalDistricts from '../municipalDistricts';

const FILE_NAME = 'RegisterScreen.js';

const styles = StyleSheet.create({

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

  icon: {
    marginRight: 6,
  },

  InputFieldStyle: {
    padding: 8,
    marginTop: 1,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },

  InputFieldDropdown: {
    marginTop: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 10,
  },

  InputStyle: {
    flex: 1,
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

});

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: '',
      profile: {
        cpf: '',
        phone: '',
        isPresident: '',
        counselorType: '',
        segment: '',
        CAE_Type: '',
        CAE_UF: '',
        CAE_municipalDistrict: '',
        CAE: '',
      },
      passwordCompared: '',
    };

    /* Bind is used in this functions, because they
    use inside them React functions like: this.setState. */
    this.validateCpf = this.validateCpf.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
    this.register = this.register.bind(this);
  }

  // Functions that erase invalid caracteres.
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


  // Verify if there's a error in some field form.
  register() {
    const cpfRegex = /[0-9]{11}/g;
    const nameRegex = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.{6,})(?!.*\s).*$/g;
    const phoneRegex1 = /[0-9]{11}/g;
    const phoneRegex2 = /[0-9]{10}/g;

    let error = false;
    let errorMessage = '';

    // Validating CPF.
    if (!cpfRegex.test(this.state.profile.cpf)) {
      error = true;
      errorMessage += 'CPF inválido.\n';
    }

    // Validating Name.
    if (!nameRegex.test(this.state.name) || this.state.name.trim() === '') {
      error = true;
      errorMessage += 'Nome inválido.\n';
    }

    // Validating Password.
    if (!passwordRegex.test(this.state.password)) {
      error = true;
      errorMessage += 'Senha Inválida (*Não deve ter espaços *Tamanho mínimo 6 caracteres).\n';
    }

    // Validating Match Password
    if (this.state.password !== this.state.passwordCompared) {
      error = true;
      errorMessage += 'Senhas digitadas devem ser iguais.\n';
    }

    // Validating Email.
    if (!emailRegex.test(this.state.email)) {
      error = true;
      errorMessage += 'Email inválido.\n';
    }

    // Validating Phone.
    if (!phoneRegex1.test(this.state.profile.phone) &&
    !phoneRegex2.test(this.state.profile.phone)) {
      error = true;
      errorMessage += 'Telefone inválido.\n';
    }

    // Validating is President.
    if (this.state.profile.isPresident === '') {
      error = true;
      errorMessage += 'Cargo não selecionado.\n';
    }

    // Validating Counselor Type
    if (this.state.profile.counselorType === '') {
      error = true;
      errorMessage += 'Tipo de Conselheiro não selecionado\n';
    }

    // Validating Segment.
    if (this.state.profile.segment === '') {
      error = true;
      errorMessage += 'Segmento não selecionado.\n';
    }

    // Validating CAE type.
    if (this.state.profile.CAE_Type === '') {
      error = true;
      errorMessage += 'Tipo de CAE não selecionado.\n';
    }

    // Validating CAE UF.
    if (this.state.profile.CAE_UF === '') {
      error = true;
      errorMessage += 'UF não selecionada\n';
    }

    // Validating CAE municipal district.
    if (this.state.profile.CAE_Type === MUNICIPAL_COUNSELOR_CAE && this.state.profile.CAE_municipalDistrict === '') {
      error = true;
      errorMessage += 'Município não selecionado\n';
    }

    // Checking if was found a irregularity in register fields.
    if (error === false) {
      this.props.asyncRegisterCounselor(this.state);
    } else {
      Alert.alert(REGISTER_FAIL_TITLE, errorMessage);
    }
  }

  changePasswordStyleAccordingToInput() {
    const passwordRegex = /^(?=.{6,})(?!.*\s).*$/g;

    if (this.state.password === '') {
      return styles.InputFieldStyle;
    } else if (passwordRegex.test(this.state.password)) {
      return [styles.InputFieldStyle, { borderColor: '#80FF80', borderWidth: 2 }];
    }
    return [styles.InputFieldStyle, { borderColor: '#FF9999', borderWidth: 2 }];
  }

  changeStyleIfPasswordsMatch(passwordCompared) {
    if (passwordCompared === '') {
      return styles.InputFieldStyle;
    } else if (this.state.password === passwordCompared) {
      return [styles.InputFieldStyle, { borderColor: '#80FF80', borderWidth: 2 }];
    }
    return [styles.InputFieldStyle, { borderColor: '#FF9999', borderWidth: 2 }];
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

    const UfInitials = this.state.profile.CAE_UF.substr(0, 2);

    const municipalDistrict = this.state.profile.CAE_Type === MUNICIPAL_COUNSELOR_CAE && this.state.profile.CAE_UF !== '' ? (
      <View >
        <Text>Municipio do CAE</Text>
        <View
          key="municipalDistrict"
          style={styles.InputFieldDropdown}
        >
          <Picker
            selectedValue={this.state.profile.CAE_municipalDistrict}
            onValueChange={value => this.setState({ profile: { ...this.state.profile,
              CAE_municipalDistrict: value,
              CAE: `${value} ${UfInitials}`.trim() } })}
          >
            <Picker.Item value="" label="Escolha o Municipio do seu CAE" color="#95a5a6" />
            {municipalDistricts[UfInitials].cidades.map(item =>
              (<Picker.Item label={item} value={`${item} -`} color="#000000" />))}
          </Picker>
        </View>
      </View>
    ) : null;

    return (
      <View style={styles.principal}>
        <Header />
        <View style={styles.content}>
          <ScrollView>
            <View style={{ paddingHorizontal: 15 }}>

              <Text>CPF</Text>
              <View style={styles.InputFieldStyle}>
                <FontAwesome name="user-circle" style={styles.icon} size={26} color="black" />
                <TextInput
                  style={styles.InputStyle}
                  placeholder="Digite o seu CPF"
                  placeholderTextColor="#95a5a6"
                  underlineColorAndroid="transparent"
                  returnKeyLabel={'next'}
                  maxLength={11}
                  keyboardType={'numeric'}
                  onChangeText={text => this.validateCpf(text)}
                  value={this.state.profile.cpf}
                />
              </View>

              <Text>Nome</Text>
              <View style={styles.InputFieldStyle}>
                <MaterialIcons name="face" style={styles.icon} size={26} color="black" />
                <TextInput
                  style={styles.InputStyle}
                  placeholder="Digite o seu nome completo"
                  placeholderTextColor="#95a5a6"
                  underlineColorAndroid="transparent"
                  returnKeyLabel={'next'}
                  maxLength={60}
                  keyboardType={'default'}
                  autoCapitalize={'words'}
                  onChangeText={text => this.validateName(text)}
                  value={this.state.name}
                />
              </View>

              <Text>Email</Text>
              <View style={styles.InputFieldStyle}>
                <MaterialIcons name="email" style={styles.icon} size={26} color="black" />
                <TextInput
                  style={styles.InputStyle}
                  placeholder="Digite o seu email"
                  placeholderTextColor="#95a5a6"
                  underlineColorAndroid="transparent"
                  returnKeyLabel={'next'}
                  maxLength={50}
                  keyboardType={'email-address'}
                  autoCapitalize={'none'}
                  onChangeText={text => this.setState({ email: text })}
                  value={this.state.email}
                />
              </View>

              <Text>Senha</Text>
              <View style={this.changePasswordStyleAccordingToInput()}>
                <MaterialIcons name="lock" style={styles.icon} size={26} color="black" />
                <TextInput
                  style={styles.InputStyle}
                  placeholder="Digite sua senha"
                  placeholderTextColor="#95a5a6"
                  underlineColorAndroid="transparent"
                  returnKeyLabel={'next'}
                  maxLength={30}
                  keyboardType={'default'}
                  onChangeText={text => this.setState({ password: text })}
                  secureTextEntry
                />
              </View>

              <Text>Confirmar Senha</Text>
              <View style={this.changeStyleIfPasswordsMatch(this.state.passwordCompared)}>
                <MaterialIcons name="lock" style={styles.icon} size={26} color="gray" />
                <TextInput
                  style={styles.InputStyle}
                  placeholder="Digite sua senha novamente"
                  placeholderTextColor="#95a5a6"
                  underlineColorAndroid="transparent"
                  returnKeyLabel={'next'}
                  keyboardType={'default'}
                  onChangeText={text => this.setState({ passwordCompared: text })}
                  secureTextEntry
                />
              </View>

              <Text>Telefone</Text>
              <View style={styles.InputFieldStyle}>
                <MaterialIcons name="phone" style={styles.icon} size={26} color="black" />
                <TextInput
                  style={styles.InputStyle}
                  placeholder="Digite o seu telefone"
                  placeholderTextColor="#95a5a6"
                  underlineColorAndroid="transparent"
                  returnKeyLabel={'next'}
                  maxLength={11}
                  keyboardType={'phone-pad'}
                  onChangeText={text => this.validatePhone(text)}
                  value={this.state.profile.phone}
                />
              </View>

              <Text>Cargo</Text>
              <View
                style={styles.InputFieldDropdown}
              >
                <Picker
                  onValueChange={value => this.setState(
                    { profile: { ...this.state.profile, isPresident: value } },
                  )}
                  selectedValue={this.state.profile.isPresident}
                >
                  <Picker.Item value="" label="Escolha seu cargo" color="#95a5a6" />
                  <Picker.Item value label={PRESIDENT_COUNSELOR} />
                  <Picker.Item value={false} label={COMMON_COUNSELOR} />
                </Picker>
              </View>

              <Text>Tipo de Conselheiro</Text>
              <View
                style={styles.InputFieldDropdown}
              >
                <Picker
                  onValueChange={value => this.setState({
                    profile: { ...this.state.profile,
                      counselorType: value } })}
                  selectedValue={this.state.profile.counselorType}
                >
                  <Picker.Item value="" label="Escolha seu cargo" color="#95a5a6" />
                  <Picker.Item value={TITULAR_COUNSELOR} label={TITULAR_COUNSELOR} />
                  <Picker.Item value={SURROGATE_COUNSELOR} label={SURROGATE_COUNSELOR} />
                </Picker>
              </View>

              <Text>Segmento</Text>
              <View
                style={styles.InputFieldDropdown}
              >
                <Picker
                  onValueChange={value => this.setState({ profile: { ...this.state.profile,
                    segment: value } })}
                  selectedValue={this.state.profile.segment}
                >
                  <Picker.Item value="" label="Escolha seu segmento" color="#95a5a6" />
                  <Picker.Item value={EXECUTIVE_POWER} label={EXECUTIVE_POWER} />
                  <Picker.Item value={EDUCATION_WORKERS} label={EDUCATION_WORKERS} />
                  <Picker.Item value={STUDENT_PARENTS} label={STUDENT_PARENTS} />
                  <Picker.Item value={CIVILIAN_ENTITIES} label={CIVILIAN_ENTITIES} />
                </Picker>
              </View>

              <Text>Tipo do CAE</Text>
              <View
                style={styles.InputFieldDropdown}
              >
                <Picker
                  onValueChange={
                    value => (
                      value === STATE_COUNSELOR_CAE ?
                        this.setState({ profile: { ...this.state.profile,
                          CAE_Type: value,
                          CAE_municipalDistrict: '',
                          CAE: `${UfInitials}`.trim() },
                        })
                        :
                        this.setState({ profile: { ...this.state.profile,
                          CAE_Type: value,
                          CAE: `${this.state.profile.CAE_municipalDistrict} ${UfInitials}`.trim() },
                        })
                    )
                  }
                  selectedValue={this.state.profile.CAE_Type}
                >

                  <Picker.Item value="" label="Escolha o Tipo do seu CAE" color="#95a5a6" />
                  <Picker.Item value={MUNICIPAL_COUNSELOR_CAE} label={MUNICIPAL_COUNSELOR_CAE} />
                  <Picker.Item value={STATE_COUNSELOR_CAE} label={STATE_COUNSELOR_CAE} />
                </Picker>
              </View>

              <Text>UF do CAE</Text>
              <View
                style={styles.InputFieldDropdown}
              >
                <Picker
                  selectedValue={this.state.profile.CAE_UF}
                  onValueChange={value => this.setState({ profile: { ...this.state.profile,
                    CAE_UF: value,
                    CAE: `${this.state.profile.CAE_municipalDistrict} ${value.substr(0, 2)}`.trim() } })}
                >
                  <Picker.Item value="" label="Escolha a UF do seu CAE" color="#95a5a6" />
                  {brazilianStates.estados.map(item =>
                    (<Picker.Item label={item} value={item} color="#000000" />))}
                </Picker>
              </View>

              {municipalDistrict}

              <Text>CAE</Text>
              <View style={[styles.InputFieldStyle, { justifyContent: 'center' }]}>
                <Text>{this.state.profile.CAE_municipalDistrict} {UfInitials}</Text>
              </View>

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
