import React from 'react';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../Styles/GeneralStyles';

const SchoolListButton = props => (
  <View style={styles.flatListItem}>
    <TouchableOpacity
      style={styles.flatListButton}
      onPress={() => props.onPress()}
    >
      <Text style={{ fontSize: 16, width: '80%' }}>{props.item.nome}</Text>
      <Ionicons
        name="ios-arrow-forward-outline"
        style={styles.flatListIcon}
        size={35}
        color="black"
      />
    </TouchableOpacity>
  </View>
);


SchoolListButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  item: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    codEscola: PropTypes.number.isRequired,
  }).isRequired,
};

export default SchoolListButton;
