import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput } from 'react-native';
import styles from '../Styles/GeneralStyles';

export default class GenericField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styleInUse: styles.InputFieldStyle,
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
    this.setState({ styleInUse: [styles.InputFieldStyle, { borderColor: '#80FF80', borderWidth: 2 }] });
  }

  handleInvalidText() {
    this.setState({ errorTextArea: <Text>{this.props.errorMessage}</Text> });
    this.setState({ styleInUse: [styles.InputFieldStyle, { borderColor: '#FF9999', borderWidth: 2 }] });
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
    } else {
      console.warn('Invalido');
      this.handleInvalidText();
    }
  }

  render() {
    return (
      <View>
        <Text> {this.props.header.toUpperCase().trim()} </Text>
        <TextInput
          style={this.state.styleInUse}
          placeholder={this.props.placeholderMessage.trim()}
          value={this.state.test}
          onChangeText={text => this.handleInput(text)}
        />

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
