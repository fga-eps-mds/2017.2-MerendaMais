import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen'
import LoginConselheiro from './src/screens/LoginConselheiro'
import TelaInicial from './src/screens/TelaInicial'
import LoginPresidente from './src/screens/LoginPresidente'

import { Provider } from 'react-redux';
import store from './src/ReduxStuffs/store';

import TelaInicialContainer from './src/containers/TelaInicialContainer';

export default class App extends React.Component {
  render() {
    return (

      <TelaInicial />





    );
  }
}
