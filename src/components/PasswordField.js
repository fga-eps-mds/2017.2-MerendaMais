import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../Styles';

const changePasswordStyleAccordingToInput = (password) => {
  const passwordRegex = /^(?=.{6,})(?!.*\s).*$/g;

  if (password === '') {
    return styles.InputFieldStyle;
  } else if (passwordRegex.test(password)) {
    return [styles.InputFieldStyle, { borderColor: '#80FF80', borderWidth: 2 }];
  }
  return [styles.InputFieldStyle, { borderColor: '#FF9999', borderWidth: 2 }];
};

const PasswordField = props => (
  <View style={changePasswordStyleAccordingToInput(props.password)}>
    <MaterialIcons name="lock" style={styles.icon} size={26} color="black" />
    <TextInput
      style={styles.InputStyle}
      placeholder="Digite sua senha"
      placeholderTextColor="#95a5a6"
      underlineColorAndroid="transparent"
      returnKeyLabel={'next'}
      maxLength={30}
      keyboardType={'default'}
      onChangeText={password => props.callback(password)}
      secureTextEntry
    />
  </View>
);

PasswordField.propTypes = {
  callback: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
};

export default PasswordField;
