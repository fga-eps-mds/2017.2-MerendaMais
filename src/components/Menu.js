import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, Alert, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MenuButton from './MenuButton';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    height: window.height,
    backgroundColor: '#FF9500',
    paddingTop: 20,
    borderLeftColor: 'black',
    borderLeftWidth: 1,
  },
});

class Menu extends React.PureComponent {
  render() {
    return (
      <View style={styles.menu}>
        <ScrollView>
          <MenuButton
            key="searchSchool"
            text="Pesquisar Escola"
            iconName="search"
            onPress={() => { Actions.searchSchool(); }}
          />
          <MenuButton
            key="profileInfoScreen"
            text="Perfil"
            iconName="account-box"
            onPress={() => { Actions.profileInfoScreen(); }}
          />
          <MenuButton
            key="schedulingVisit"
            text="Agendar visita"
            iconName="access-time"
            onPress={() => { Actions.schedulingVisit(); }}
          />
          <MenuButton
            key="scheduleMeeting"
            text="Agendar reunião"
            iconName="insert-invitation"
            onPress={() => { Actions.scheduleMeeting(); }}
          />
          <MenuButton
            key="notifications"
            text="Notificações"
            iconName="notifications"
            onPress={() => { Actions.PrincipalNotifications(); }}
          />
          {this.props.counselor.profile.isPresident && (
            <MenuButton
              key="manageRegisters"
              text="Gerenciar Conselheiros"
              iconName="group-work"
              onPress={() => { Actions.manageRegisters(); }}
            />
          )}
          <MenuButton
            key="seeLegislation"
            text="Consultar Legislação"
            iconName="gavel"
            onPress={() => { Actions.lesgislationScreen(); }}
          />
          <MenuButton
            key="doComplaint"
            text="Denunciar"
            iconName="report-problem"
            onPress={() => { Actions.complaintScreen(); }}
          />
          <MenuButton
            key="logout"
            text="Sair"
            iconName="logout"
            onPress={() => Alert.alert(
              'Sair',
              'Realmente deseja sair da sua conta?',
              [
                { text: 'Não', onPress: () => Actions.drawerOpen(), style: 'cancel' },
                { text: 'Sim', onPress: () => Actions.initialScreen() },
              ],
              { cancelable: false },
            )}
            isLogout
          />
        </ScrollView>
      </View>
    );
  }
}

Menu.propTypes = {
  counselor: PropTypes.shape({
    profile: {
      isPresident: PropTypes.bool.isRequired,
    },
  }),
};

Menu.defaultProps = {
  counselor: PropTypes.shape({
    prifle: {
      isPresident: false,
    },
  }),
};

export default Menu;
