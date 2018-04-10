import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../Styles';


const GenericField = props => (

  <View>
    <Text> {props.header.toUpperCase()} </Text>
    <TextInput
      style={styles.InputFieldStyle}
      placeholder={props.message}
    >
      <FontAwesome name={props.icon} style={styles.icon} size={26} color="black" />
    </TextInput>
  </View>


);

GenericField.propTypes = {
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};


export default GenericField;
