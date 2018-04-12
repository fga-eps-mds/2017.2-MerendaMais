import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput } from 'react-native';
import styles from '../Styles';

export default class GenericField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      validateMessage: -1,
    };
  }

  handleInput(newText) {
    this.setState({
      text: newText.trim(),
    },
    // Callback from setState
    () => { this.validateText(this.state.text, this.props.validorRegex); },
    );
  }

  validateText(text, regexTest) {
    if (regexTest.global) {
      console.warn('validateText()', 'Regexp using global flag! The results may be wrong.');
    } else {
      // Do nothing
    }

    const isValid = regexTest.test(text);

    if (isValid) {
      console.warn('Valido');
      this.setState({ validateMessage: true });
    } else {
      console.warn('Invalido');
      this.setState({ validateMessage: false });
    }
  }

  render() {
    // Provavelmente mudar isso para um Style diferente. User uma linha vermelha, nao sei.
    // Não usar uma msg.
    let p;
    if (this.state.validateMessage || this.state.validateMessage === -1) {
      p = <Text />;
    } else {
      p = <Text>{this.props.errorMessage}</Text>;
    }

    return (
      <View>
        {p}
        <Text> {this.props.header.toUpperCase()} </Text>
        <TextInput
          style={styles.InputFieldStyle}
          placeholder={this.props.message}
          value={this.state.test}
          onChangeText={text => this.handleInput(text)}
        />

      </View>
    );
  }
}
GenericField.propTypes = {
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  validorRegex: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

// export default GenericField;
