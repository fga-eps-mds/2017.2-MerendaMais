import React from 'react';
import PropTypes from 'prop-types';
import { View, Picker } from 'react-native';
import styles from '../Styles';
import { PRESIDENT_COUNSELOR, COMMON_COUNSELOR } from '../constants';

const RoleField = props => (
  <View
    style={styles.InputFieldDropdown}
  >
    <Picker
      onValueChange={isPresidentChecked => props.callback(isPresidentChecked)}
      selectedValue={props.selectedValue}
    >
      <Picker.Item value="" label="Escolha seu cargo" color="#95a5a6" />
      <Picker.Item value label={PRESIDENT_COUNSELOR} />
      <Picker.Item value={false} label={COMMON_COUNSELOR} />
    </Picker>
  </View>
);

RoleField.propTypes = {
  selectedValue: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default RoleField;
