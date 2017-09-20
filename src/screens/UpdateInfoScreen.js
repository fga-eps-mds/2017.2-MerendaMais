import React from 'react'
import {StyleSheet, TouchableOpacity, Button, Text, TextInput, View} from 'react-native'


export default class UpdateInfoScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      phone:''
    };
  }
  render(){
    return(

        <View style={styles.principal}>

          <View style={styles.topo}>
            <Text style={styles.textLogo}>EDITAR INFORMAÇÕES</Text>
          </View>

          <View style={styles.conteudo}>
            <View style={styles.inputs}>
              <TextInput
                placeholder="   nome@exemplo.com"
                placeholderTextColor="black"
                onChangeText={(email) => this.setState({email})}>
              </TextInput>
            </View>
            <View style={styles.inputs}>
              <TextInput
                placeholder="   (00)00000-0000"
                placeholderTextColor="black"
                onChangeText={(phone) => this.setState({phone})}>
              </TextInput>
              </View>
            </View>
            <TouchableOpacity
              style= {styles.buttonContainer}>
              <Text style={styles.buttonText}>Concluir</Text>
            </TouchableOpacity>
        </View>

    )
  }
}

const styles = StyleSheet.create({

  topo: {
      flex: 1.2,
      backgroundColor: '#FF9500',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowRadius: 6,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom:50
    },

    textLogo: {
        fontSize: 30,
        color:'white',
        fontWeight:'bold',
        marginTop:30,
    },

    principal: {
      flex: 1,
    },

    buttonContainer: {
      paddingVertical:10,
      borderWidth: 1,
      borderRadius: 7,
      marginHorizontal: 15,
      marginTop: 30,
      marginBottom: 20,
      backgroundColor: '#FF9500',
      justifyContent: 'flex-end'
    },

    buttonText:{
      textAlign: 'center',
      color: '#FFF'
    },

    conteudo: {

        marginBottom: 9,
        flex: 6,
        flexDirection: 'column'

    },

    inputs: {
      backgroundColor : '#FAFAFA',
      paddingVertical:10,
      borderWidth: 1,
      borderRadius: 7,
      justifyContent: 'flex-start',
      borderColor: 'gray',
      marginHorizontal: 15,
      marginBottom: 30
    }
});
