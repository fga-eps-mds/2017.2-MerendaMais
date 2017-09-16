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
}
};

export default class RegisterScreen extends React.Component {
  render(){
  return (
    <Text style={styles.Logo}>Merenda+</Text>
  );
}
}
