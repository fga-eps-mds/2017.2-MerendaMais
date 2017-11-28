import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Header from '../components/Header';

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    alignItems: 'center',
  },

  button: {
    width: 320,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9500',
    borderRadius: 10,
    borderColor: 'black',
    marginTop: 120,
  },
});

const PrincipalNotifications = () => (
  <View style={styles.principal}>
    <Header
      title={'Editar Informações'}
      backButton
    />

    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      // onPress={() => Actions.visiteInvites()}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>Convites de visitas</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      // onPress={() => Actions.meetingsInvites()}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>Convites de reuniões</Text>
    </TouchableOpacity>
  </View>
);

export default PrincipalNotifications;
