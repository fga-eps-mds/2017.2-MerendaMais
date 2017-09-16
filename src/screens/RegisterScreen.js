import React from 'react'
import {Text, View, TextInput} from 'react-native'

const styles = {
  Logo:{
  fontSize:40,
  backgroundColor: '#FF9500',
  paddingTop: 15,
  color: '#fff',
  fontStyle:'stencil',
  fontWeight: 'bold',
  textAlign: "center",
  justifyContent: "center"
},
  input:{
    height:40,
    backgroundColor: '#fff',
    marginBotton: 20,
    color: '#000000',
  }
};

export default class RegisterScreen extends React.Component {
  render(){
  return (
    <View>
    <Text style={styles.Logo}>Merenda+</Text>
    <TextInput
    placeholder = "Digite o seu CPF"
    style={styles.input}
    />
    <TextInput
    placeholder = "Digite o seu nome completo"
    style={styles.input}
    />
    <TextInput
    placeholder = "Digite o seu email"
    style={styles.input}
    />
    <TextInput
    placeholder = "Digite o seu telefone"
    style={styles.input}
    />
    <TextInput
    placeholder = "Escolha seu segmento"
    style={styles.input}
    />
    <TextInput
    placeholder = "Digite sua senha"
    style={styles.input}
    />
    </View>
  );
}
