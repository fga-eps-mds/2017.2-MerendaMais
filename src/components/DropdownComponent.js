import React from 'react';
import PropTypes from 'prop-types';
import { View, Picker } from 'react-native';
import styles from '../Styles';

const DropdownComponent = props => (
  <View
    style={styles.InputFieldDropdown}
  >
    <Picker
      onValueChange={checkedAttribute => props.callback(checkedAttribute)}
      selectedValue={props.selectedValue}
    >
      {props.picker}

    </Picker>
  </View>
);

DropdownComponent.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  picker: PropTypes.element.isRequired,
};

export default DropdownComponent;
