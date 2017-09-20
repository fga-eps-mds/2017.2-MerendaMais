import React from 'react'
import {Text, ScrollView, View, TextInput, TouchableOpacity} from 'react-native'

export default class RegisterScreen extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      CPF: '',
      name: '',
      email:'',
      telefone: '',
      cargo: '',
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
     console.log(this.state.segment);
     console.log(this.state.CAE_Type);
     console.log(this.state.CAE);
  }

  render() {
  return (

    <ScrollView>

      <View style={styles.principal}>
        <View style={styles.topo}>
            <Text style={styles.textLogo}>Merenda +</Text>
        </View>
      </View>

      <Text style={styles.container}> </Text>

      <Text style={styles.container}>     CPF</Text>
      <TextInput
        placeholder = "Digite o seu CPF"
        placeholderTextColor = '#95a5a6'
        style={styles.InputInfo}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({CPF:text})}
      />
      <Text style={styles.container}>     Nome</Text>
      <TextInput
        placeholder = "Digite o seu nome completo"
        placeholderTextColor = '#95a5a6'
        style={styles.InputInfo}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({name:text})}
      />
      <Text style={styles.container}>     Email</Text>
      <TextInput
        placeholder = "Digite o seu email"
        placeholderTextColor = '#95a5a6'
        style={styles.InputInfo}
        returnKeyLabel = {"next"}
      />
      <Text style={styles.container}>     Telefone</Text>
      <TextInput
        placeholder = "Digite o seu telefone"
        placeholderTextColor = '#95a5a6'
        onChangeText={(text) => this.setState({email:text})}
        style={styles.InputInfo}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({telefone:text})}
      />
      <Text style={styles.container}>     Cargo</Text>
      <TextInput
        placeholder = "Escolha seu cargo"
        placeholderTextColor = '#95a5a6'
        style={styles.InputInfo}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({cargo:text})}
      />
     <Text style={styles.container}>     Segmento</Text>
      <TextInput
        placeholder = "Escolha seu segmento"
        placeholderTextColor = '#95a5a6'
        style={styles.InputInfo}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({segment:text})}
      />
      <Text style={styles.container}>     Tipo do CAE</Text>
      <TextInput
        placeholder = "Escolha o tipo do seu CAE"
        placeholderTextColor = '#95a5a6'
        style={styles.InputInfo}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({CAE_Type:text})}
      />
      <Text style={styles.container}>     CAE</Text>
      <TextInput
        placeholder = "Lista com o CAE do seu município/estado"
        placeholderTextColor = '#95a5a6'
        style={styles.InputInfo}
        returnKeyLabel = {"next"}
        onChangeText={(text) => this.setState({CAE:text})}
      />
      <TouchableOpacity  onPress={() => this.saveRegister()}
        style= {styles.buttonContainer}>
        <Text style={styles.buttonText}>Concluir</Text>
      </TouchableOpacity>

      <View style={styles.rodape}>
        <TouchableOpacity
          activeOpacity = {0.6}
        >
        <Text>Já tem um cadastro?
          <Text style={{color: 'blue'}}> Entrar</Text>
        </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
  }
}

const styles = {
principal: {
      flex: 1
  },

topo: {
      flex: 1.2,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#FF9500',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowRadius: 6,
      justifyContent: 'center',
      alignItems: 'center'

  },

textLogo: {
      fontSize: 35,
      color:'white',
      fontWeight:'bold',
      marginTop:10
  },

rodape: {
       flex: 0.7,
       borderTopColor: '#a9a9a9',
       borderTopWidth: 1,
       justifyContent: 'center',
       alignItems: 'center',
       padding: 10
   },

InputInfo: {
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