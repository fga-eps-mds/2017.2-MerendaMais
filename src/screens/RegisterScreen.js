import React from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView, View, TextInput, TouchableOpacity, Picker, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';

const styles = {

  principal: {
    backgroundColor: 'white',
    flex: 1,
  },

  footer: {
    flex: 0.7,
    borderTopColor: '#a9a9a9',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  InputStyle: {
    padding: 10,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginBottom: 10,
  },

  InputDropdown: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginBottom: 10,
  },

  buttonContainer: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FF9500',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },

};

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      cpf: '',
      name: '',
      email: '',
      phone: '',
      isPresident: '',
      password: '',
      segment: '',
      CAE_Type: '',
      CAE: '',
    };
    this.validateCpf = this.validateCpf.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
    this.validateCae = this.validateCae.bind(this);
    this.register = this.register.bind(this);
  }

  validateCpf(cpf) {
    const validCpf = cpf.replace(/[^0-9]/g, '');
    this.setState({ cpf: validCpf });
  }

  validateName(name) {
    const validName = name.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, '');
    this.setState({ name: validName });
  }

  validatePhone(phone) {
    const validPhone = phone.replace(/[^0-9]/g, '');
    this.setState({ phone: validPhone });
  }

  validateCae(CAE) {
    const validCae = CAE.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, '');
    this.setState({ CAE: validCae });
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
    if (!cpfRegex.test(this.state.cpf)) {
      error = true;
      errorMessage += 'CPF inválido\n';
    }
    if (!nameRegex.test(this.state.name)) {
      error = true;
      errorMessage += 'Nome inválido\n';
    }
    if (!emailRegex.test(this.state.email)) {
      error = true;
      errorMessage += 'Email inválido\n';
    }
    if (!phoneRegex1.test(this.state.phone) && !phoneRegex2.test(this.state.phone)) {
      error = true;
      errorMessage += 'Telefone inválido\n';
    }
    if (this.state.isPresident === '') {
      error = true;
      errorMessage += 'Cargo não selecionado\n';
    }
    if (this.state.segment === '') {
      error = true;
      errorMessage += 'Segmento não selecionado\n';
    }
    if (this.state.CAE_Type === '') {
      error = true;
      errorMessage += 'Tipo de CAE não selecionado\n';
    }
    if (!caeRegex.test(this.state.CAE)) {
      error = true;
      errorMessage += 'CAE inválido\n';
    }
    if (error === false) {
      this.props.createUser(this.state);
    } else {
      Alert.alert('FALHA NO CADASTRO', errorMessage);
    }
  }
  render() {
    console.log(this.state);
    const password = this.state.isPresident === true ? (
      <View>
        <Text style={styles.container}>     Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#95a5a6"
          style={styles.InputStyle}
          underlineColorAndroid="transparent"
          returnKeyLabel={'next'}
          keyboardType={'default'}
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry
        />
      </View>
    ) : null;

    return (
      <ScrollView style={styles.principal}>
        <Header />
        <Text>     CPF</Text>
        <TextInput
          placeholder="Digite o seu CPF"
          placeholderTextColor="#95a5a6"
          style={styles.InputStyle}
          underlineColorAndroid="transparent"
          returnKeyLabel={'next'}
          maxLength={11}
          keyboardType={'numeric'}
          onChangeText={text => this.validateCpf(text)}
          value={this.state.cpf}
        />
        <Text>     Nome</Text>
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
        <Text>     Email</Text>
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
        <Text>     Telefone</Text>
        <TextInput
          placeholder="Digite o seu telefone"
          placeholderTextColor="#95a5a6"
          style={styles.InputStyle}
          underlineColorAndroid="transparent"
          returnKeyLabel={'next'}
          maxLength={11}
          keyboardType={'phone-pad'}
          onChangeText={text => this.validatePhone(text)}
          value={this.state.phone}
        />
        <Text>     Cargo</Text>
        <View
          style={styles.InputDropdown}
        >
          <Picker
            onValueChange={value => this.setState({ isPresident: value, password: 'senha' })}
            selectedValue={this.state.isPresident}
          >
            <Picker.Item value="" label="Escolha seu cargo" color="#95a5a6" />
            <Picker.Item value label="Presidente" />
            <Picker.Item value={false} label="Conselheiro" />
          </Picker>
        </View>
        {password}
        <Text>     Segmento</Text>
        <View
          style={styles.InputDropdown}
        >
          <Picker
            onValueChange={value => this.setState({ segment: value })}
            selectedValue={this.state.segment}
          >
            <Picker.Item value="" label="Escolha seu segmento" color="#95a5a6" />
            <Picker.Item value="Suplente" label="Suplente" />
            <Picker.Item value="Titular" label="Titular" />
          </Picker>
        </View>
        <Text>     Tipo do CAE</Text>
        <View
          style={styles.InputDropdown}
        >
          <Picker
            onValueChange={value => this.setState({ CAE_Type: value })}
            selectedValue={this.state.CAE_Type}
          >
            <Picker.Item value="" label="Escolha o tipo do seu CAE" color="#95a5a6" />
            <Picker.Item value="Estadual" label="Estadual" />
            <Picker.Item value="Municipal" label="Municipal" />
          </Picker>
        </View>
        <Text>     CAE</Text>
        <TextInput
          placeholder="Lista com o CAE do seu município/estado"
          placeholderTextColor="#95a5a6"
          style={styles.InputStyle}
          underlineColorAndroid="transparent"
          returnKeyLabel={'next'}
          maxLength={40}
          keyboardType={'default'}
          onChangeText={text => this.validateCae(text)}
          value={this.state.CAE}
        />
        <TouchableOpacity
          onPress={() => this.register()}
          style={styles.buttonContainer}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => Actions.loginCounselorScreen()}
            activeOpacity={0.6}
          >
            <Text>Já tem um cadastro?
              <Text style={{ color: 'blue' }}> Entrar</Text>
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

RegisterScreen.propTypes = {
  createUser: PropTypes.func.isRequired,

};
