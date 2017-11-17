import React from 'react';
import PropTypes from 'prop-types';
import { View, Picker } from 'react-native';
import styles from '../Styles';
import { TITULAR_COUNSELOR, SURROGATE_COUNSELOR } from '../constants';

const CounselorTypeField = props => (
  <View
    style={styles.InputFieldDropdown}
  >
    <Picker
      onValueChange={counselorTypeChecked => props.callback(counselorTypeChecked)}
      selectedValue={props.selectedValue}

    >
      <Picker.Item value="" label="Escolha seu cargo" color="#95a5a6" />
      <Picker.Item value={TITULAR_COUNSELOR} label={TITULAR_COUNSELOR} />
      <Picker.Item value={SURROGATE_COUNSELOR} label={SURROGATE_COUNSELOR} />
    </Picker>
  </View>
);

CounselorTypeField.propTypes = {
  selectedValue: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default CounselorTypeField;
