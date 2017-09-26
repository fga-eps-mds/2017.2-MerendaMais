import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TelaInicial from './src/screens/TelaInicial'
import RegisterScreen from './src/screens/RegisterScreen'
import LoginConselheiro from './src/screens/LoginConselheiro'
import LoginPresidente from './src/screens/LoginPresidente'
import UpdateInfoScreen from './src/screens/UpdateInfoScreen'
import ProfileInfoScreen from './src/screens/ProfileInfoScreen'

import { Provider } from 'react-redux';
import store from './src/Reducers/store';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ProfileInfoScreen />
      </Provider>
    );
  }
}
