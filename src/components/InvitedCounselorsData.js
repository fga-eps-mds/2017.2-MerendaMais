import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listRegisters: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
  },
  title: {
    marginHorizontal: 15,
    marginVertical: 10,
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textBox: {
    paddingLeft: 5,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 15,
    paddingVertical: 5,
  },
});

const InvitedCounselorsData = counselor => (

  <View style={styles.listRegisters}>
    <View style={styles.textBox}>
      <Text style={styles.title}>CONSELHEIRO SELECIONADO</Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>Nome: </Text>
        {counselor.name}
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>CPF: </Text>
        {counselor.cpf}
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>Telefone: </Text>
        {counselor.phone}
      </Text>
    </View>
  </View>
);


export default InvitedCounselorsData;
