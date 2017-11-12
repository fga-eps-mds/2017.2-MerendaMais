import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View, Alert } from 'react-native';
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

  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },

  fieldStyle: {
    padding: 15,
    backgroundColor: '#FF9500',
    flexDirection: 'row',
    borderColor: '#e68a00',
    borderWidth: 1,
  },

  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },

  icon: {
    marginRight: 10,
  },

  item: {
    fontSize: 16,
    fontWeight: '300',
    padding: 5,
  },
});

class Menu extends React.PureComponent {
  render() {
    return (
      <View style={styles.menu}>
        <MenuButton
          key="searchSchool"
          text="Pesquisar Escola"
          iconName="search"
          onPress={() => { Actions.searchSchool(); }}
        />
        <MenuButton
          key="updateInfoScreen"
          text="Editar Dados"
          iconName="settings"
          onPress={() => { Actions.updateInfoScreen(); }}
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
        {this.props.counselor.profile.isPresident && (
          <MenuButton
            key="manageRegisters"
            text="Gerenciar Conselheiros"
            iconName="group-work"
            onPress={() => { Actions.manageRegisters(); }}
          />
        )}
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
