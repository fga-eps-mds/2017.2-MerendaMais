import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen'
import LoginConselheiro from './src/screens/LoginConselheiro'

export default class App extends React.Component {
  render() {
    return (
      <LoginConselheiro />
    );
  }
}
