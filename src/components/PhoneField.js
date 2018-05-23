import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import styles from '../Styles/GeneralStyles';

const validatePhone = (phone, callback) => {
  const validPhone = phone.replace(/[^0-9]/g, '');
  callback(validPhone);
};


const PhoneField = props => (
  <View style={styles.InputFieldStyle}>
    <MaterialIcons name="phone" style={styles.icon} size={26} color="black" />
    <TextInput
      style={styles.InputStyle}
      placeholder="Digite o seu telefone"
      placeholderTextColor="#95a5a6"
      underlineColorAndroid="transparent"
      returnKeyLabel={'next'}
      maxLength={11}
      keyboardType={'phone-pad'}
      onChangeText={phone => validatePhone(phone, props.callback)}
      value={props.value}
    />
  </View>
);

PhoneField.propTypes = {
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default PhoneField;
