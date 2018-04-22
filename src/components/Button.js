import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../Styles/GeneralStyles';


class Button extends React.Component {
  defineStyle() {
    if (this.props.style === undefined) {
      this.props.style.text = styles.buttonText;
      if (this.props.enabled) {
        return (
          styles.bigButton
        );
      }
      return (
        styles.disabledBigButton
      );
    }
    return (
      this.props.style.design
    );
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          key={this.props.key}
          style={this.defineStyle()}
          disabled={!this.props.enabled}
          onPress={() => this.props.onPress()}
        >
          <Text style={this.props.style.text}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { string, bool, func, element } = PropTypes;

Button.propTypes = {
  key: string.isRequired,
  text: string.isRequired,
  enabled: bool.isRequired,
  onPress: func.isRequired,
  style: element.isRequired,
};

export default Button;
