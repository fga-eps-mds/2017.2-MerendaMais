import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../Styles/GeneralStyles';

export default class GenericField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styleInUse: styles.genericViewSection,
      errorTextArea: <Text />,
      text: '',
    };
  }

  handleInput(newText) {
    this.setState({ text: newText.trim() }, () => {
      this.validateText(this.state.text, this.props.regexInput);
    });
  }

  handleValidText() {
    this.setState({ errorTextArea: <Text /> });
    this.setState({ styleInUse: [styles.InputFieldStyle, { borderColor: '#80FF80', backgroundColor: '#d1ffd1', borderWidth: 2 }] });
  }

  handleInvalidText() {
    this.setState({ errorTextArea: <Text>{this.props.errorMessage}</Text> });
    this.setState({ styleInUse: [styles.InputFieldStyle, { borderColor: '#FF9999', backgroundColor: '#ffd6d6', borderWidth: 2 }] });
  }

  validateText(text, regexTest) {
    if (regexTest.global) {
      console.warn('validateText()', 'RegExp using global flag! The results may be wrong.');
    } else {
      // Do nothing
    }

    const isTextValid = regexTest.test(text);

    if (isTextValid) {
      console.warn('Valido');

      // setStateValue is the function in props at the component creation
      this.props.setStateValue(this.state.text);
      this.handleValidText();
    } else if (!isTextValid && text === '') {
      // This case is for empty text
      this.setState({ styleInUse: styles.genericViewSection });
    } else {
      console.warn('Invalido');
      this.handleInvalidText();
    }
  }

  render() {
    return (
      <View>
        <Text> {this.props.header.toUpperCase().trim()} </Text>
        <View style={this.state.styleInUse}>
          <FontAwesome name="user-circle" style={styles.icon} size={26} color="black" />
          <TextInput
            style={styles.InputStyle}
            placeholder={this.props.placeholderMessage.trim()}
            placeholderTextColor="#565454"
            value={this.state.test}
            underlineColorAndroid="transparent"
            onChangeText={text => this.handleInput(text)}
          />
        </View>

        {this.state.errorTextArea}
      </View>
    );
  }
}

GenericField.propTypes = {
  header: PropTypes.string.isRequired,
  placeholderMessage: PropTypes.string.isRequired,
  setStateValue: PropTypes.func.isRequired,
  regexInput: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

// export default GenericField;
