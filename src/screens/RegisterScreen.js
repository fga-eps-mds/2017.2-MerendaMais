import React, { PropTypes } from 'react';
import { Text, ScrollView, View, TextInput, TouchableOpacity, Picker } from 'react-native';
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
        <TextInput
          placeholder="Escolha o tipo do seu CAE"
          placeholderTextColor="#95a5a6"
          style={styles.InputStyle}
          underlineColorAndroid="transparent"
          returnKeyLabel={'next'}
          onChangeText={text => this.setState({ CAE_Type: text })}
        />
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
