import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginConselheiro from './src/screens/LoginConselheiro';
import InitialScreen from './src/screens/InitialScreen';
import LoginPresidente from './src/screens/LoginPresidente';
import ProfileInfoScreenContainer from './src/Containers/ProfileInfoScreenContainer';
import RegisterScreenContainer from './src/Containers/RegisterScreenContainer';
import MainScreen from './src/screens/MainScreen';
import SearchSchoolContainer from './src/Containers/SearchSchoolContainer';

const Routes = () => ({
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="mainScreen" component={MainScreen} hideNavBar />
          <Scene key="searchSchool" component={SearchSchoolContainer} hideNavBar />
          <Scene key="initialScreen" component={InitialScreen} hideNavBar />
          <Scene key="registerScreen" component={RegisterScreenContainer} hideNavBar />
          <Scene key="loginConselheiro" component={LoginConselheiro} hideNavBar />
          <Scene key="loginPresidente" component={LoginPresidente} hideNavBar />
          <Scene key="profileInfoScreen" component={ProfileInfoScreenContainer} hideNavBar />
        </Scene>
      </Router>
    );
  },
});

export default Routes;
