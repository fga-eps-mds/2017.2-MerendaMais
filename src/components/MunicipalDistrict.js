import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import { View, Picker } from 'react-native';
import municipalDistricts from '../constants/municipalDistricts';
import DropdownComponent from './DropdownComponent';

const MunicipalDistrict = props => (
  <View key="municipalDistrict" >
    <Text>Municipio do CAE</Text>

    <DropdownComponent
      selectedValue={props.selectedValue}
      callback={checkedValue => props.callback(checkedValue)}
      picker={[
        <Picker.Item value="" label="Escolha o Municipio do seu CAE" color="#95a5a6" />,
      ] && municipalDistricts[props.UfInitials].cidades.map(item =>
          (<Picker.Item label={item} value={`${item} -`} color="#000000" />))}
    />

  </View>
);

MunicipalDistrict.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  UfInitials: PropTypes.string.isRequired,
};


export default MunicipalDistrict;
