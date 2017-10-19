import React from 'react';
import CheckBox from 'react-native-checkbox';
import { StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
}
  from 'react-native';

const styles = StyleSheet.create({
  header: {
    flex: 1.2,
    backgroundColor: '#FF9500',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 50,
  },

  textLogo: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 30,
  },

  principal: {
    flex: 1,
  },

  buttonContainer: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },

  content: {

    marginBottom: 9,
    flex: 6,
    flexDirection: 'column',

  },

  checkbox: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
  },

});

export default class StockFoodCheckoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: '',
    };
  }
  render() {
    return (
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.textLogo}>RELATÓRIO</Text>
        </View>

        <View>
          <CheckBox
            label="Escola não possui Estoque de Alimentos"
            checked={this.state.checked}
          />

          <CheckBox
            label="Alimentos vencidos"
            checked={this.state.checked}
          />

          <CheckBox
            label="Embalagens roídas"
            checked={this.state.checked}
          />

          <CheckBox
            label="Insetos dentro das embalagens"
            checked={this.state.checked}
          />

          <CheckBox
            label="Alimentos desorganizados"
            checked={this.state.checked}
          />

          <CheckBox
            label="Alimentos em contato com o chão"
            checked={this.state.checked}
          />

          <CheckBox
            label="Alimentos dentro de caixas"
            checked={this.state.checked}
          />

          <CheckBox
            label="Produtos de limpeza junto aos alimentos"
            checked={this.state.checked}
          />

          <CheckBox
            label="Embalagens abertas"
            checked={this.state.checked}
          />

          <CheckBox
            label="Prateleiras enferrujadas"
            checked={this.state.checked}
          />

          <CheckBox
            label="Prateleiras encostadas na parede"
            checked={this.state.checked}
          />
          <CheckBox
            label="Local abafado"
            checked={this.state.checked}
          />
          <CheckBox
            label="Contato direto dos raios de sol com as embalagens"
            checked={this.state.checked}
          />
          <CheckBox
            label="Falta de controle de entrada de alimentos"
            checked={this.state.checked}
          />
          <CheckBox
            label="Falta de controle de saída de alimentos"
            checked={this.state.checked}
          />
          <CheckBox
            label="Telhado sem forro"
            checked={this.state.checked}
          />
          <CheckBox
            label="Telhado com furos"
            checked={this.state.checked}
          />
          <CheckBox
            label="Congelador sem termômetro"
            checked={this.state.checked}
          />
          <CheckBox
            label="Lixeiras destampadas"
            checked={this.state.checked}
          />
          <CheckBox
            label="Chão difícil de limpar"
            checked={this.state.checked}
          />
          <CheckBox
            label="Parede difícil de limpar"
            checked={this.state.checked}
          />
          <CheckBox
            label="Janelas sem tela de proteção"
            checked={this.state.checked}
          />
          <CheckBox
            label="Portas sem tela de proteção"
            checked={this.state.checked}
          />
          <CheckBox
            label="Portas sem rodapé"
            checked={this.state.checked}
          />
          <CheckBox
            label="Insetos sobrevoando o local"
            checked={this.state.checked}
          />
          <CheckBox
            label="Animais com livre circulação"
            checked={this.state.checked}
          />
          <CheckBox
            label="Ventilador de teto empoeirado"
            checked={this.state.checked}
          />
          <CheckBox
            label="Equipamentos sujos"
            checked={this.state.checked}
          />
          <CheckBox
            label="Local mal iluminado"
            checked={this.state.checked}
          />
          <CheckBox
            label="Local sujo"
            checked={this.state.checked}
          />
          <CheckBox
            label="Objetos que não sejam alimentos"
            checked={this.state.checked}
          />
          <CheckBox
            label="Lixo não é armazenado em local fechado"
            checked={this.state.checked}
          />

        </View>
        <TouchableOpacity style={styles.buttonContainer} >
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
