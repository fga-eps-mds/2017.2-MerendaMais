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
    // const regexTest = /\w+/g;
    console.warn('handleInput', newText);

    this.setState({
      text: newText.trim(),
    },
    // Callback from setState
    () => { this.verificaTexto(newText, this.props.validorRegex); },
    );
  }

  verificaTexto(text, regexTest) {
    const isValid = regexTest.test(text);

    // This is a needed workarround to make sure that 'isValid' has its true value
    // DO NOT ERASE IF YOU DON'T KNOW A BETTER SOLUTION
    console.debug(regexTest.test(text));

    if (isValid) {
      console.warn('Valido');
      this.setState({ validateMessage: 1 });
    } else {
      console.warn('Invalido');
      this.setState({ validateMessage: 0 });
    }
  }

  render() {
    // Provavelmente mudar isso para um Style diferente. User uma linha vermelha, nao sei.
    // Não usar uma msg.
    let p;
    if (this.state.validateMessage === 0) {
      p = <Text>{this.props.errorMessage}</Text>;
    } else {
      p = <Text />;
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
