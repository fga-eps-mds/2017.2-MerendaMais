import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../Styles/GeneralStyles';

const MenuButton = props => (
  <TouchableOpacity
    key="menuButton"
    activeOpacity={0.7}
    onPress={() => props.onPress()}
  >

    <View style={styles.fieldStyle}>
      {props.isLogout &&
        (<Text />)}
      {!props.isLogout &&
        (<Text />)}
      <Text
        style={styles.item}
      >
        {props.text}
      </Text>
    </View>

  </TouchableOpacity>
);

MenuButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isLogout: PropTypes.bool,
};

MenuButton.defaultProps = {
  isLogout: false,
};

export default MenuButton;
