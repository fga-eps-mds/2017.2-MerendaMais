import React from 'react'
import {Text, ScrollView,View, TextInput, TouchableOpacity} from 'react-native'

export default class RegisterScreen extends React.Component {


  _onChange = (item) => {
          // the full item as defined in the list of items is passed to the onChange handler to give full
          // flexibility on what to do...
      }




  render() {


    const items = [
              { key: 0, label: 'Fruits', value:'some value' },
              { key: 1, label: 'Fruits', value:{this: "could", be:"anything"} },
          ];





  return (

    <ScrollView>
    <Text style={styles.Logo}>Merenda+</Text>

    <Text style={styles.container}> </Text>

    <Text style={styles.container}>     CPF</Text>
    <TextInput
    placeholder = "Digite o seu CPF"
    placeholderTextColor = '#95a5a6'
    style={styles.InputCPF}
    />
    <Text style={styles.container}>     Nome</Text>
    <TextInput
    placeholder = "Digite o seu nome completo"
    placeholderTextColor = '#95a5a6'
    style={styles.InputCPF}
    />
    <Text style={styles.container}>     Email</Text>
    <TextInput
    placeholder = "Digite o seu email"
    placeholderTextColor = '#95a5a6'
    style={styles.InputCPF}
    />
    <Text style={styles.container}>     Telefone</Text>
    <TextInput
    placeholder = "Digite o seu telefone"
    placeholderTextColor = '#95a5a6'
    style={styles.InputCPF}
    />
    <Text style={styles.container}>     Cargo</Text>
    <TextInput
    placeholder = "Escolha seu cargo"
    placeholderTextColor = '#95a5a6'
    style={styles.InputCPF}
    />
    <Text style={styles.container}>     Segmento</Text>
    <TextInput
    placeholder = "Escolha seu segmento"
    placeholderTextColor = '#95a5a6'
    style={styles.InputCPF}
    />
    <Text style={styles.container}>     Tipo do CAE</Text>
    <TextInput
    placeholder = "Escolha o tipo do seu CAE"
    placeholderTextColor = '#95a5a6'
    style={styles.InputCPF}
    />
    <Text style={styles.container}>     CAE</Text>
    <TextInput
    placeholder = "Lista com o CAE do seu município/estado"
    placeholderTextColor = '#95a5a6'
    style={styles.InputCPF}
    />
    <TouchableOpacity style= {styles.buttonContainer}>
    <Text style={styles.buttonText}>Concluir</Text>
    </TouchableOpacity>




    <Selectbox
                        selectedItem=this.props.selectedItem
                        onChange={this._onChange}
                        items=items />







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
  height: 40,
  backgroundColor: '#FFF',
  marginBottom: 20,
  color: '#e67e22',
  paddngHorizontal: 10,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 7
},

InputCPF: {
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
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: '#FF9500'
},
buttonText:{
  textAlign: 'center',
  color: '#FFF'
}

};