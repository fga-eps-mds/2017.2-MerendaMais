import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginConselheiro from './src/screens/LoginConselheiro';
import InitialScreen from './src/screens/InitialScreen';
import LoginPresidente from './src/screens/LoginPresidente';
import RegisterScreenContainer from './src/Containers/RegisterScreenContainer';
import UpdateInfoScreenContainer from './src/Containers/UpdateInfoScreenContainer';
import ProfileInfoScreenContainer from './src/Containers/ProfileInfoScreenContainer';

const Routes = () => ({
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="initialScreen" component={InitialScreen} hideNavBar />
          <Scene key="registerScreen" component={RegisterScreenContainer} hideNavBar />
          <Scene key="loginConselheiro" component={LoginConselheiro} hideNavBar />
          <Scene key="loginPresidente" component={LoginPresidente} hideNavBar />
          <Scene key="updateInfo" component={UpdateInfoScreenContainer} hideNavBar />
          <Scene key="profileInfo" component={ProfileInfoScreenContainer} hideNavBar />
        </Scene>
      </Router>
    );
  },
});

export default Routes;
