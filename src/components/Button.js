import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../Styles';


class Button extends React.Component {
  defineStyle() {
    if (this.props.enabled) {
      return (
        styles.bigButton
      );
    }

    return (
      styles.disabledBigButton
    );
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <TouchableOpacity
          key={this.props.key}
          style={this.defineStyle()}
          disabled={!this.props.enabled}
          onPress={() => this.props.onPress()}
        >
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { string, bool, func } = PropTypes;

Button.propTypes = {
  key: string.isRequired,
  text: string.isRequired,
  enabled: bool.isRequired,
  onPress: func.isRequired,
};

export default Button;
