import React from 'react'
import {Text, ScrollView, View, TextInput, TouchableOpacity,Picker} from 'react-native'
var user
export default class RegisterScreen extends React.Component {

  constructor(props){
    super(props)


    this.state = {
      CPF: '',
      name: '',
      email:'',
      telefone: '',
      cargo: '',
      senha: '',
      segment: '',
      CAE_Type: '',
      CAE: '',
    }
  }

  saveRegister() {
     console.log(this.state.CPF);
     console.log(this.state.name);
     console.log(this.state.email);
     console.log(this.state.telefone);
     console.log(this.state.cargo);
     console.log(this.state.senha);
     console.log(this.state.segment);
     console.log(this.state.CAE_Type);
     console.log(this.state.CAE);
  }

  render() {
    console.log(this.state)
    const password = this.state.cargo === 'Presidente' ? (
      <View>
      <Text style={styles.container}>     Senha</Text>
      <TextInput
      placeholder = "Digite sua senha"
      placeholderTextColor = '#95a5a6'
      style={styles.InputStyle}
      returnKeyLabel = {"next"}
      onChangeText={(text) => this.setState({senha:text})}
      secureTextEntry
      />
      </View>
    ) : null;
  return (


<ScrollView>

    <Text style={styles.Logo}>Merenda+</Text>

    <Text style={styles.container}> </Text>

    <Text style={styles.container}>     CPF</Text>
    <TextInput
    placeholder = "Digite o seu CPF"
    placeholderTextColor = '#95a5a6'
    style={styles.InputStyle}
    returnKeyLabel = {"next"}
    onChangeText={(text) => this.setState({CPF:text})}
    />
    <Text style={styles.container}>     Nome</Text>
    <TextInput
    placeholder = "Digite o seu nome completo"
    placeholderTextColor = '#95a5a6'
    style={styles.InputStyle}
    returnKeyLabel = {"next"}
    onChangeText={(text) => this.setState({name:text})}
    />
    <Text style={styles.container}>     Email</Text>
    <TextInput
    placeholder = "Digite o seu email"
    placeholderTextColor = '#95a5a6'
    style={styles.InputStyle}
    returnKeyLabel = {"next"}
    onChangeText={(text) => this.setState({email:text})}
    />
    <Text style={styles.container}>     Telefone</Text>
    <TextInput
    placeholder = "Digite o seu telefone"
    placeholderTextColor = '#95a5a6'
    style={styles.InputStyle}
    returnKeyLabel = {"next"}
    onChangeText={(text) => this.setState({telefone:text})}
    />

    <Text style={styles.container}>     Cargo</Text>
    <View
    style={styles.InputDropdown}>
    <Picker
    onValueChange={(value) => this.setState({cargo: value})}
    selectedValue={this.state.cargo}

    >
    <Picker.Item value="" label=""  />
    <Picker.Item value="Presidente" label="Presidente" />
    <Picker.Item value="Conselheiro" label="Conselheiro" />
    </Picker>
    </View>
    {password}

    <Text style={styles.container}>     Segmento</Text>
    <View
    style={styles.InputDropdown}>
    <Picker
    onValueChange={(value) => this.setState({segmento: value})}
    selectedValue={this.state.segmento}
    >
    <Picker.Item value="" label="" />
    <Picker.Item value="Presidente" label="Suplente" />
    <Picker.Item value="Conselheiro" label="Titular" />
    </Picker>
    </View>
    <Text style={styles.container}>     Tipo do CAE</Text>
    <TextInput
    placeholder = "Escolha o tipo do seu CAE"
    placeholderTextColor = '#95a5a6'
    style={styles.InputStyle}
    returnKeyLabel = {"next"}
    onChangeText={(text) => this.setState({CAE_Type:text})}
    />
    <Text style={styles.container}>     CAE</Text>
    <TextInput
    placeholder = "Lista com o CAE do seu município/estado"
    placeholderTextColor = '#95a5a6'
    style={styles.InputStyle}
    returnKeyLabel = {"next"}
    onChangeText={(text) => this.setState({CAE:text})}
    />
    <TouchableOpacity  onPress={() => this.ajuda()}
      style= {styles.buttonContainer}>
      <Text style={styles.buttonText}>Concluir</Text>

    </TouchableOpacity>

    </ScrollView>
  );
  }
}

const styles = {
  Logo:{
  fontSize:40,
  backgroundColor: '#FF9500',
  paddingTop: 50,
  color: '#fff',
  fontStyle:'normal',
  fontWeight: 'bold',
  justifyContent: 'center',
  textAlign: 'center'

},

input: {
  paddingTop: 10,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 7,
  marginHorizontal: 15,
  marginBottom: 10
},

InputStyle: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginBottom: 10
},

InputDropdown: {
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 7,
  marginHorizontal: 15,
  marginBottom: 10

},

buttonContainer: {
    paddingVertical:10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FF9500'
},

buttonText:{
  textAlign: 'center',
  color: '#FFF'
}

};
