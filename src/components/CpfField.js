import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../Styles/GeneralStyles';

const validateCpf = (cpf, callback) => {
  const validCpf = cpf.replace(/[^0-9]/g, '');
  callback(validCpf);
};

const CpfField = props => (
  <View style={styles.InputFieldStyle}>
    <FontAwesome name="user-circle" style={styles.icon} size={26} color="black" />
    <TextInput
      style={styles.InputStyle}
      placeholder="Digite o seu CPF"
      placeholderTextColor="#95a5a6"
      underlineColorAndroid="transparent"
      returnKeyLabel={'next'}
      maxLength={11}
      keyboardType={'numeric'}
      onChangeText={cpf => validateCpf(cpf, props.callback)}
      value={props.value}
    />
  </View>
);

CpfField.propTypes = {
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default CpfField;
