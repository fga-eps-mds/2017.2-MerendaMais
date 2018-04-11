import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../Styles';


export default class GenericField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validateMessage: '',
    };
  }

  verificaTexto(texto) {
    // arrumar essa validação para receber um Regex
    console.log(JSON.stringify(this.props.validorRegex));
    console.warn(texto);
    if (this.props.validorRegex.test(texto.trim())) {
      console.warn('Valido');
      this.setState({ validateMessage: true });
    } else {
      console.warn('Invalido');
      this.setState({ validateMessage: false });
    }
    return texto;
  }

  render() {
    // Provavelmente mudar isso para um Style diferente. User uma linha vermelha, nao sei.
    // Não usar uma msg.
    let p;
    if (this.state.validateMessage === false) {
      p = <Text>{this.props.errorMessage}</Text>;
    } else {
      p = <Text />;
    }

    return (
      <View>
        <Text> {this.props.header.toUpperCase()} </Text>
        <FontAwesome name={this.props.icon} style={styles.icon} size={26} color="black" />
        <TextInput
          style={styles.InputFieldStyle}
          placeholder={this.props.message}
          onChangeText={text => this.verificaTexto(text)}
        />
        {p}

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
