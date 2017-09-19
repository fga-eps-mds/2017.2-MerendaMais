import React from 'react'
import {AppRegistry, Button,Text, TextInput, View } from 'react-native'


class RegisterScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      phone:''
    };
  }
  render(){
    return(
        <View style={{padding: 60,  flex: 3, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
          <TextInput
            style={{height: 60, width: 350, borderWidth: 2, borderRadius: 10}}
            placeholder="nome@exemplo.com"
            placeholderTextColor="black"
            onChangeText={(email) => this.setState({email})}>
          </TextInput>
          <TextInput
            style={{height: 60, width:350, borderWidth: 2, borderRadius: 10}}
            placeholder="(00)00000-0000"
            placeholderTextColor="black"
            onChangeText={(phone) => this.setState({phone})}>
          </TextInput>
          <Button
            style = {{height: 90, width: 390, position: 'absolute', bottom:0, left:0}}
            title="Concluir"
            color="#FF9500"
            />
      </View>

    )
  }
}

export default RegisterScreen;
