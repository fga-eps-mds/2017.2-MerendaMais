import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../Styles';

const EmailField = props => (
  <View style={styles.InputFieldStyle}>
    <MaterialIcons name="email" style={styles.icon} size={26} color="black" />
    <TextInput
      style={styles.InputStyle}
      placeholder="Digite o seu email"
      placeholderTextColor="#95a5a6"
      underlineColorAndroid="transparent"
      returnKeyLabel={'next'}
      maxLength={50}
      keyboardType={'email-address'}
      autoCapitalize={'none'}
      onChangeText={email => props.callback(email)}
      value={props.value}
    />
  </View>
);

EmailField.propTypes = {
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default EmailField;
