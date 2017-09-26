import React from 'react';
import { Router, Scene } from 'react-native-router-flux'

//import TelaInicial from './src/screens/TelaInicial'
import RegisterScreen from './src/screens/RegisterScreen'
//import LoginConselheiro from './src/screens/LoginConselheiro'
//import LoginPresidente from './src/screens/LoginPresidente'
import { Provider } from 'react-redux';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
          <Scene key = 'root'>
            <Scene key = 'registerScreen' component = {RegisterScreen} hideNavBar/>
          </Scene>
        </Router>
    );
  }
}
