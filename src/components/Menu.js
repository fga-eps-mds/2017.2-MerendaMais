import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import store from '../Reducers/store';

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

const Menu = () => {
  const newState = store.getState();
  if (newState.counselor.profile.isPresident) {
    return (
      <View style={styles.menu}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Actions.searchSchool()}
        >
          <View style={styles.fieldStyle}>
            <MaterialIcons name="search" style={styles.icon} size={32} color="black" />
            <Text
              style={styles.item}
            >
              Pesquisar Escola
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Actions.updateInfoScreen()}
        >
          <View style={styles.fieldStyle}>
            <MaterialIcons name="settings" style={styles.icon} size={32} color="black" />
            <Text
              style={styles.item}
            >
              Editar Dados
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Actions.profileInfoScreen()}
        >
          <View style={styles.fieldStyle}>
            <MaterialIcons name="account-box" style={styles.icon} size={32} color="black" />
            <Text
              style={styles.item}
            >
              Perfil
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Actions.schedulingVisit()}
        >
          <View style={styles.fieldStyle}>
            <MaterialIcons name="access-time" style={styles.icon} size={32} color="black" />
            <Text
              style={styles.item}
            >
              Agendar visita
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Actions.manageRegisters()}
        >
          <View style={styles.fieldStyle}>
            <MaterialIcons name="group-work" style={styles.icon} size={32} color="black" />
            <Text
              style={styles.item}
            >
              Gerenciar Conselheiros
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Alert.alert(
            'Sair',
            'Realmente deseja sair da sua conta?',
            [
              { text: 'Não', onPress: () => Actions.drawerOpen(), style: 'cancel' },
              { text: 'Sim', onPress: () => Actions.initialScreen() },
            ],
            { cancelable: false },
          )}
        >
          <View style={styles.fieldStyle}>
            <MaterialCommunityIcons name="logout" style={styles.icon} size={32} color="black" />
            <Text
              style={styles.item}
            >
              Sair
            </Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Actions.searchSchool()}
      >
        <View style={styles.fieldStyle}>
          <MaterialIcons name="search" style={styles.icon} size={32} color="black" />
          <Text
            style={styles.item}
          >
            Pesquisar Escola
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Actions.updateInfoScreen()}
      >
        <View style={styles.fieldStyle}>
          <MaterialIcons name="settings" style={styles.icon} size={32} color="black" />
          <Text
            style={styles.item}
          >
            Editar Dados
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Actions.profileInfoScreen()}
      >
        <View style={styles.fieldStyle}>
          <MaterialIcons name="account-box" style={styles.icon} size={32} color="black" />
          <Text
            style={styles.item}
          >
            Perfil
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Actions.schedulingVisit()}
      >
        <View style={styles.fieldStyle}>
          <MaterialIcons name="access-time" style={styles.icon} size={32} color="black" />
          <Text
            style={styles.item}
          >
            Agendar visita
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Alert.alert(
          'Sair',
          'Realmente deseja sair da sua conta?',
          [
            { text: 'Não', onPress: () => Actions.drawerOpen(), style: 'cancel' },
            { text: 'Sim', onPress: () => Actions.initialScreen() },
          ],
          { cancelable: false },
        )}
      >
        <View style={styles.fieldStyle}>
          <MaterialCommunityIcons name="logout" style={styles.icon} size={32} color="black" />
          <Text
            style={styles.item}
          >
            Sair
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

export default Menu;
