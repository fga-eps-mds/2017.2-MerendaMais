import React from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';

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
import MainReportsScreen from './src/screens/MainReportsScreen';
import RefectoryCheckoutContainer from './src/Containers/RefectoryCheckoutContainer';
import MenuContainer from './src/Containers/MenuContainer';
import KitchenCheckoutContainer from './src/Containers/KitchenCheckoutContainer';
import FoodQualityCheckoutContainer from './src/Containers/FoodQualityCheckoutContainer';
import DocCheckoutContainer from './src/Containers/DocCheckoutContainer';
import ReportObservationContainer from './src/Containers/ReportObservationContainer';
import SchoolSurroundingsCheckoutContainer from './src/Containers/SchoolSurroundingsCheckoutContainer';
import FoodHandlerCheckoutContainer from './src/Containers/FoodHandlerCheckoutContainer';
import WaterSewerSupplyCheckoutContainer from './src/Containers/WaterSewerSupplyCheckoutContainer';
import FoodPreparationCheckoutContainer from './src/Containers/FoodPreparationCheckoutContainer';
import PrincipalStartInspection from './src/screens/PrincipalStartInspection';
import ScheduleMeetingContainer from './src/Containers/ScheduleMeetingContainer';
import ScheduleMeetingMapContainer from './src/Containers/ScheduleMeetingMapContainer';
import PrincipalManageRegister from './src/screens/PrincipalManageRegister';
import MainLegislationScreen from './src/screens/MainLegislationScreen';
import Resolution26Screen from './src/screens/Resolution26Screen';
import Resolution1Screen from './src/screens/Resolution1Screen';
import LawNumber11947Screen from './src/screens/LawNumber11947Screen';
import LawNumber12982Screen from './src/screens/LawNumber12982Screen';

const Routes = () => ({
  render() {
    return (
      <Router>
        <Drawer
          hideNavBar
          key="drawer"
          drawerLockMode="locked-closed"
          contentComponent={MenuContainer}
          drawerWidth={270}
          drawerPosition="right"
        >
          <Scene key="root">
            <Scene key="initialScreen" component={InitialScreen} type="reset" hideNavBar />
            <Scene key="StartPendingInspection" component={PrincipalStartInspection} hideNavBar />
            <Scene
              key="scheduleMeetingMap"
              component={ScheduleMeetingMapContainer}
              hideNavBar
            />
            <Scene key="schedulingVisit" component={SchedulingVisitContainer} hideNavBar />
            <Scene
              key="scheduleMeeting"
              component={ScheduleMeetingContainer}
              type="reset"
              hideNavBar
            />
            <Scene key="manageRegisters" component={PrincipalManageRegister} hideNavBar />
            <Scene key="mainScreen" component={MainScreen} type="reset" hideNavBar />
            <Scene key="searchSchool" component={SearchSchoolContainer} hideNavBar />
            <Scene key="registerScreen" component={RegisterScreenContainer} hideNavBar />
            <Scene key="loginScreen" component={LoginContainer} hideNavBar />
            <Scene key="profileInfoScreen" component={ProfileInfoScreenContainer} hideNavBar />
            <Scene key="updateInfoScreen" component={UpdateInfoScreenContainer} hideNavBar />
            <Scene
              key="schedulingVisit"
              component={SchedulingVisitContainer}
              type="reset"
              hideNavBar
            />
            <Scene key="mainReportsScreen" component={MainReportsScreen} type="reset" hideNavBar />
            <Scene key="kitchenCheckoutScreen" component={KitchenCheckoutContainer} hideNavBar />
            <Scene key="DocCheckoutScreen" component={DocCheckoutContainer} hideNavBar />
            <Scene
              key="ReportObservationScreen"
              component={ReportObservationContainer}
              hideNavBar
            />
            <Scene
              key="stockFoodCheckoutScreen"
              component={StockFoodCheckoutScreenContainer}
              hideNavBar
            />
            <Scene
              key="refectoryCheckoutScreen"
              component={RefectoryCheckoutContainer}
              hideNavBar
            />
            <Scene
              key="foodQualityCheckoutScreen"
              component={FoodQualityCheckoutContainer}
              hideNavBar
            />
            <Scene
              key="schoolSurroundingsCheckoutScreen"
              component={SchoolSurroundingsCheckoutContainer}
              hideNavBar
            />
            <Scene
              key="foodHandlerCheckoutScreen"
              component={FoodHandlerCheckoutContainer}
              hideNavBar
            />
            <Scene
              key="waterSewerSupplyCheckoutScreen"
              component={WaterSewerSupplyCheckoutContainer}
              hideNavBar
            />
            <Scene
              key="foodPreparationCheckoutScreen"
              component={FoodPreparationCheckoutContainer}
              hideNavBar
            />
            <Scene key="schoolInfoScreen" component={SchoolInfoContainer} hideNavBar />
            <Scene key="lesgislationScreen" component={MainLegislationScreen} hideNavBar />
            <Scene key="resolution26Screen" component={Resolution26Screen} hideNavBar />
            <Scene key="resolution1Screen" component={Resolution1Screen} hideNavBar />
            <Scene key="lawNumber11947Screen" component={LawNumber11947Screen} hideNavBar />
            <Scene key="lawNumber12982Screen" component={LawNumber12982Screen} hideNavBar />
          </Scene>
        </Drawer>
      </Router>
    );
  },
});

export default Routes;
