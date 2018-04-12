import React from 'react';
import PropTypes from 'prop-types';
import { View, Picker } from 'react-native';
import styles from '../Styles/GeneralStyles';

const DropdownComponent = props => (
  <View
    style={styles.InputFieldDropdown}
  >
    <Picker
      onValueChange={checkedAttribute => props.callback(checkedAttribute)}
      selectedValue={props.selectedValue}
    >
      {props.pickerTitle}
      {props.pickerBody}

    </Picker>
  </View>
);

DropdownComponent.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  pickerTitle: PropTypes.element.isRequired,
  pickerBody: PropTypes.element.isRequired,
};

export default DropdownComponent;
