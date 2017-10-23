import React from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';
import { TITULAR_COUNSELOR,
  SURROGATE_COUNSELOR,
  MUNICIPAL_COUNSELOR_CAE,
  STATE_COUNSELOR_CAE,
  PRESIDENT_COUNSELOR,
  COMMON_COUNSELOR } from '../constants';

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
          onChangeText={text => this.setState({ cpf: text })}
        />
        <Text>     Nome</Text>
        <TextInput
          placeholder="Digite o seu nome completo"
          placeholderTextColor="#95a5a6"
          style={styles.InputStyle}
          underlineColorAndroid="transparent"
          returnKeyLabel={'next'}
          onChangeText={text => this.setState({ name: text })}
        />
        <Text>     Email</Text>
        <TextInput
          placeholder="Digite o seu email"
          placeholderTextColor="#95a5a6"
          style={styles.InputStyle}
          underlineColorAndroid="transparent"
          returnKeyLabel={'next'}
          onChangeText={text => this.setState({ email: text })}
        />
        <Text>     Telefone</Text>
        <TextInput
          placeholder="Digite o seu telefone"
          placeholderTextColor="#95a5a6"
          style={styles.InputStyle}
          underlineColorAndroid="transparent"
          returnKeyLabel={'next'}
          onChangeText={text => this.setState({ phone: text })}
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
            <Picker.Item value label={PRESIDENT_COUNSELOR} />
            <Picker.Item value={false} label={COMMON_COUNSELOR} />
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
            <Picker.Item value={SURROGATE_COUNSELOR} label={SURROGATE_COUNSELOR} />
            <Picker.Item value={TITULAR_COUNSELOR} label={TITULAR_COUNSELOR} />
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
            <Picker.Item value="" label="Escolha o Tipo do seu CAE" color="#95a5a6" />
            <Picker.Item value={MUNICIPAL_COUNSELOR_CAE} label={MUNICIPAL_COUNSELOR_CAE} />
            <Picker.Item value={STATE_COUNSELOR_CAE} label={STATE_COUNSELOR_CAE} />
          </Picker>
        </View>
        <Text>     CAE</Text>
        <TextInput
          placeholder="Lista com o CAE do seu município/estado"
          placeholderTextColor="#95a5a6"
          style={styles.InputStyle}
          underlineColorAndroid="transparent"
          returnKeyLabel={'next'}
          onChangeText={text => this.setState({ CAE: text })}
        />
        <TouchableOpacity
          onPress={() => this.props.createUser(this.state)}
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
