import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listRegisters: {
    marginVertical: 5,
    backgroundColor: 'white',
    paddingLeft: 5,
    justifyContent: 'flex-start',
  },

  text: {
    fontSize: 15,
    paddingVertical: 2,
  },
});

const InvitedCounselorsData = counselor => (

  <View style={styles.listRegisters}>
    <Text style={styles.text}>
      <Text style={{ fontWeight: 'bold' }}>Nome: </Text>
      {counselor.name}
    </Text>
    <Text style={styles.text}>
      <Text style={{ fontWeight: 'bold' }}>CPF: </Text>
      {counselor.profile.cpf}
    </Text>
    <Text style={styles.text}>
      <Text style={{ fontWeight: 'bold' }}>Telefone: </Text>
      {counselor.profile.phone}
    </Text>
  </View>
);


export default InvitedCounselorsData;
