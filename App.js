import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import TelaInicial from './src/screens/TelaInicial'
import RegisterScreen from './src/screens/RegisterScreen'
//import LoginConselheiro from './src/screens/LoginConselheiro'
//import LoginPresidente from './src/screens/LoginPresidente'
import { Provider } from 'react-redux';
import store from './src/ReduxStuffs/store';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RegisterScreen />
      </Provider>
    );
  }
}