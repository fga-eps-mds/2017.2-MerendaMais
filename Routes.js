import React from 'react';
import { Router,Scene } from 'react-native-router-flux';

import RegisterScreen from './src/screens/RegisterScreen'
import LoginCounselorScreen from './src/screens/LoginCounselorScreen'
import InitialScreen from './src/screens/InitialScreen'
import LoginPresidentScreen from './src/screens/LoginPresidentScreen'
import ProfileInfoScreen from './src/screens/ProfileInfoScreen'


export default class Routes extends React.Component {
  render() {
    return (
        <Router>
          <Scene key = 'root'>
            <Scene key = 'initialScreen' component = {InitialScreen} hideNavBar/>
            <Scene key = 'registerScreen' component = {RegisterScreen} hideNavBar/>
            <Scene key = 'loginCounselorScreen' component = {LoginCounselorScreen} hideNavBar/>
            <Scene key = 'loginPresidentScreen' component = {LoginPresidentScreen} hideNavBar/>
            <Scene key = 'profileInfoScreen' component = {ProfileInfoScreen} hideNavBar/>
            <Scene key = 'registerScreen' component = {RegisterScreen} hideNavBar/>
          </Scene>
        </Router>
    );
  }
}
