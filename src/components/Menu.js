import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import store from '../Reducers/store';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    height: window.height,
    backgroundColor: '#FF9500',
    padding: 20,
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
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default function Menu() {
  const newState = store.getState();
  if (newState.counselor.profile.isPresident) {
    return (
      <View style={styles.menu}>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Actions.searchSchool()}
          >
            <Text
              style={styles.item}
            >
              Pesquisar Escola
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Actions.updateInfoScreen()}
          >
            <Text
              style={styles.item}
            >
              Editar Dados
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Actions.profileInfoScreen()}
          >
            <Text
              style={styles.item}
            >
              Perfil
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => Actions.manageRegisters()}
          >
            <Text
              style={styles.item}
            >
              Gerenciar Conselheiros
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
  return (
    <View style={styles.menu}>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Actions.searchSchool()}
        >
          <Text
            style={styles.item}
          >
            Pesquisar Escola
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Actions.updateInfoScreen()}
        >
          <Text
            style={styles.item}
          >
            Editar Dados
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Actions.profileInfoScreen()}
        >
          <Text
            style={styles.item}
          >
            Perfil
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
