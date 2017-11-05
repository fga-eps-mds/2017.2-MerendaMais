import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import InitialScreen from './src/screens/InitialScreen';
import LoginContainer from './src/Containers/LoginContainer';
import ProfileInfoScreenContainer from './src/Containers/ProfileInfoScreenContainer';
import RegisterScreenContainer from './src/Containers/RegisterScreenContainer';
import MainScreen from './src/screens/MainScreen';
import SearchSchoolContainer from './src/Containers/SearchSchoolContainer';
import UpdateInfoScreenContainer from './src/Containers/UpdateInfoScreenContainer';
import StockFoodCheckoutScreenContainer from './src/Containers/StockFoodCheckoutContainer';
import SchedulingVisitContainer from './src/Containers/SchedulingVisitContainer';
import SchoolInfoContainer from './src/Containers/SchoolInfoContainer';
import ManageRegistersScreenContainer from './src/Containers/ManageRegistersScreenContainer';


const Routes = () => ({
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="initialScreen" component={InitialScreen} hideNavBar />
          <Scene key="manageRegisters" component={ManageRegistersScreenContainer} hideNavBar />
          <Scene key="mainScreen" component={MainScreen} hideNavBar />
          <Scene key="searchSchool" component={SearchSchoolContainer} hideNavBar />
          <Scene key="registerScreen" component={RegisterScreenContainer} hideNavBar />
          <Scene key="loginScreen" component={LoginContainer} hideNavBar />
          <Scene key="profileInfoScreen" component={ProfileInfoScreenContainer} hideNavBar />
          <Scene key="updateInfoScreen" component={UpdateInfoScreenContainer} hideNavBar />
          <Scene key="schedulingVisit" component={SchedulingVisitContainer} hideNavBar />
          <Scene
            key="stockFoodCheckoutScreen"
            component={StockFoodCheckoutScreenContainer}
            hideNavBar
          />
          <Scene key="schoolInfoScreen" component={SchoolInfoContainer} hideNavBar />
        </Scene>
      </Router>
    );
  },
});

export default Routes;
