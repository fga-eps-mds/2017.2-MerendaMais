import React from 'react';
import { Router,Scene } from 'react-native-router-flux';

import RegisterScreen from './src/screens/RegisterScreen'
import LoginConselheiro from './src/screens/LoginConselheiro'
import InitialScreen from './src/screens/InitialScreen'
import LoginPresidente from './src/screens/LoginPresidente'


export default class Routes extends React.Component {
  render() {
    return (
        <Router>
          <Scene key = 'root'>
            <Scene key = 'initialScreen' component = {InitialScreen} hideNavBar/>
            <Scene key = 'registerScreen' component = {RegisterScreen} hideNavBar/>
            <Scene key = 'loginConselheiro' component = {LoginConselheiro} hideNavBar/>
            <Scene key = 'loginPresidente' component = {LoginPresidente} hideNavBar/>
          </Scene>
        </Router>
    );
  }
}
