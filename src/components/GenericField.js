import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput } from 'react-native';
import styles from '../Styles';


export default class GenericField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validateMessage: true,
      input: '',
    };
  }

  verificaTexto(texto) {
    // arrumar essa validação para receber um Regex
    const patt = RegExp(this.props.validorRegex);
    console.warn(texto);
    console.log('Resultado da regex: ', patt.test(texto));
    if (patt.test(texto)) {
      console.warn('Valido');
      this.setState({ input: texto });
      this.setState({ validateMessage: true });
      console.warn('Resultado do validateMessage: ', this.state.validateMessage);
    } else {
      console.warn('Invalido');
      this.setState({ validateMessage: false });
      console.warn('Resultado do validateMessage: ', this.state.validateMessage);
    }
    return texto;
  }

  render() {
    // Provavelmente mudar isso para um Style diferente. User uma linha vermelha, nao sei.
    // Não usar uma msg.
    let p;
    if (!this.state.validateMessage) {
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
          onChangeText={text => this.verificaTexto(text)}
        />

      </View>
    );
  }
}
GenericField.propTypes = {
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  validorRegex: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};


// export default GenericField;
