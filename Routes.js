import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginCounselorContainer from './src/Containers/LoginCounselorContainer';
import InitialScreen from './src/screens/InitialScreen';
import LoginPresidentContainer from './src/Containers/LoginPresidentContainer';
import ProfileInfoScreenContainer from './src/Containers/ProfileInfoScreenContainer';
import RegisterScreenContainer from './src/Containers/RegisterScreenContainer';
import MainScreen from './src/screens/MainScreen';
import SearchSchoolContainer from './src/Containers/SearchSchoolContainer';
import UpdateInfoScreenContainer from './src/Containers/UpdateInfoScreenContainer';
import StockFoodCheckoutScreenContainer from './src/Containers/StockFoodCheckoutContainer';
import SchedulingVisitContainer from './src/Containers/SchedulingVisitContainer';
import SchoolInfoContainer from './src/Containers/SchoolInfoContainer';
import MainReportsScreen from './src/screens/MainReportsScreen';
import RefectoryCheckoutScreenContainer from './src/Containers/RefectoryCheckoutScreenContainer';
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
          <Scene key="loginCounselorScreen" component={LoginCounselorContainer} hideNavBar />
          <Scene key="loginPresidentScreen" component={LoginPresidentContainer} hideNavBar />
          <Scene key="profileInfoScreen" component={ProfileInfoScreenContainer} hideNavBar />
          <Scene key="updateInfoScreen" component={UpdateInfoScreenContainer} hideNavBar />
          <Scene key="schedulingVisit" component={SchedulingVisitContainer} hideNavBar />
          <Scene key="mainReportsScreen" component={MainReportsScreen} hideNavBar />
          <Scene
            key="stockFoodCheckoutScreen"
            component={StockFoodCheckoutScreenContainer}
            hideNavBar
          />
          <Scene
            key="refectoryCheckoutScreen"
            component={RefectoryCheckoutScreenContainer}
            hideNavBar
          />
          <Scene key="schoolInfoScreen" component={SchoolInfoContainer} hideNavBar />
        </Scene>
      </Router>
    );
  },
});

export default Routes;
