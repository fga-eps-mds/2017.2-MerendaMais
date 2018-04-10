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

    if (texto === 'texto') {
      console.warn('Texto correto');
      this.setState({ validateMessage: true });
    } else {
      console.warn('Texto Incorreto');
      this.setState({ validateMessage: false });
    }
  }

  render() {
    // Provavelmente mudar isso para um Style diferente. User uma linha vermelha, nao sei.
    // Não usar uma msg.
    let p;
    if (!this.state.validateMessage) {
      p = 'Erro';
    } else {
      p = 'Correto';
    }
    return (
      <View>
        <Text> {this.props.header.toUpperCase()} </Text>
        <FontAwesome name={this.props.icon} style={styles.icon} size={26} color="black" />
        <Text>{p}</Text>
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
};


// export default GenericField;
