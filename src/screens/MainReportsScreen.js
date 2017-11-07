import React from 'react';
import { StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';

const styles = StyleSheet.create({

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
  buttonPhoto: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#FF9500',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },

  content: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    paddingLeft: 30,
    paddingTop: 30,
    color: 'blue',
    fontSize: 20,
    paddingRight: 10,
  },
});

export default class MainReportsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anyReport: false,
    };
  }
  render() {
    return (
      <View style={styles.content}>
        <Header
          title={'Relatórios'}
          backButton
        />
        <View>
          <TouchableOpacity
            onPress={() => Actions.stockFoodCheckoutScreen()}
          >
            <Text style={styles.text}>Estoque de Alimentos</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text}>Cozinha</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Actions.refectoryCheckoutScreen()}
          >
            <Text style={styles.text}>Refeitório</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text}>Documentação</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text}>Qualidade da Alimentação</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text}>+ Outras informações</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonPhoto}
          >
            <Text style={styles.buttonText}>Anexar fotos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Gerar Relatório Final</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
