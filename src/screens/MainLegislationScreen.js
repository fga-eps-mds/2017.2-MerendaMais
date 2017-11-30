import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Linking, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../components/Header';

const styles = StyleSheet.create({
  legislationScreen: {
    flex: 1,
    backgroundColor: '#FAFAFA',
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
    paddingLeft: 20,
    paddingTop: 5,
    color: 'blue',
    fontSize: 20,
    paddingRight: 10,
  },
  buttonTexts: {
    padding: 5,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    marginHorizontal: 10,
    // justifyContent: 'flex-end',
  },
  fieldStyle: {
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
  },
});

const MainLegislationScreen = () => ({
  render() {
    return (
      <View style={styles.legislationScreen}>
        <Header
          title={'Legislação'}
          backButton
        />
        <ScrollView>
          <View style={{ padding: 10 }}>

            <TouchableOpacity
              onPress={() => Actions.resolution1Screen()}
              style={styles.fieldStyle}
            >
              <TouchableOpacity
                onPress={() => Alert.alert(
                  'Resolução CD/FNDE/MEC Nº 1',
                  'Resolução CD/FNDE/MEC Nº 1, de 8 de fevereiro de 2017 - Altera o valor per capita para oferta da alimentação escolar do Programa de Alimentação Escolar - PNAE.',
                  [
                    { text: 'OK', onPress: () => Actions.legislationScreen, style: 'cancel' },
                  ],
                  { cancelable: false },
                )}
              >
                <FontAwesome name="question-circle-o" style={styles.icon} size={32} color="black" />
              </TouchableOpacity>
              <Text style={styles.buttonTexts}>Resolução Nº 1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Actions.resolution26Screen()}
              style={styles.fieldStyle}
            >
              <TouchableOpacity
                onPress={() => Alert.alert(
                  'Resolução/CD/FNDE nº 26',
                  'Resolução/CD/FNDE nº 26, de 17 de junho de 2013 - Dispõe sobre o atendimento da alimentação escolar aos alunos da educação básica no âmbito do Programa Nacional de Alimentação Escolar –PNAE.',
                  [
                    { text: 'OK', onPress: () => Actions.legislationScreen, style: 'cancel' },
                  ],
                  { cancelable: false },
                )}
              >
                <FontAwesome name="question-circle-o" style={styles.icon} size={32} color="black" />
              </TouchableOpacity>
              <Text style={styles.buttonTexts}>Resolução Nº 26</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Actions.lawNumber11947Screen()}
              style={styles.fieldStyle}
            >
              <TouchableOpacity
                onPress={() => Alert.alert(
                  'Lei Nº 11.947, DE 16 DE JUNHO DE 2009.',
                  'Dispõe sobre o atendimento da alimentação escolar e do Programa Dinheiro Direto na Escola aos alunos da educação básica;',
                  [
                    { text: 'OK', onPress: () => Actions.legislationScreen, style: 'cancel' },
                  ],
                  { cancelable: false },
                )}
              >
                <FontAwesome name="question-circle-o" style={styles.icon} size={32} color="black" />
              </TouchableOpacity>
              <Text style={styles.buttonTexts}>Lei Nº 11.947</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Actions.lawNumber12982Screen()}
              style={styles.fieldStyle}
            >
              <TouchableOpacity
                onPress={() => Alert.alert(
                  'Lei nº 12.982, de 28 de maio de 2014',
                  'Altera a Lei nº 11.947, de 16 de junho de 2009, para determinar o provimento de alimentação escolar adequada aos alunos portadores de estado ou de condição de saúde específica.',
                  [
                    { text: 'OK', onPress: () => Actions.legislationScreen, style: 'cancel' },
                  ],
                  { cancelable: false },
                )}
              >
                <FontAwesome name="question-circle-o" style={styles.icon} size={32} color="black" />
              </TouchableOpacity>
              <Text style={styles.buttonTexts}>Lei N° 12.982</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.fieldStyle}
              onPress={() => Alert.alert(
                'Cartilha',
                'Para visualizar a cartilha do PNAE, é necessário baixá-la externamente em seu navegador de internet, ' +
                'deseja continuar?',
                [
                  { text: 'Não', onPress: () => Actions.legislationScreen, style: 'cancel' },
                  { text: 'Sim', onPress: () => Linking.openURL('http://portal.tcu.gov.br/main.jsp?lumPageId=8A8182A25B4A7A25015B5E1770516ECC&previewItemId=8A8182A25B4A7A25015B5E21D1AA2BB0&lumItemId=8A8182A25B4A7A25015B5E21D1CD2BB4') },
                ],
                { cancelable: false },
              )}
            >
              <Text style={styles.buttonTexts}>Acessar Cartilha</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.fieldStyle}
              onPress={() => Alert.alert(
                'Consultar Legislação e Manuais',
                'Para consultar toda a legislação e manuais do PNAE, ' +
                'Clique em Sim para ser redirecionado para o site do FDNE, deseja continuar?',
                [
                  { text: 'Não', onPress: () => Actions.legislationScreen, style: 'cancel' },
                  { text: 'Sim', onPress: () => Linking.openURL('http://www.fnde.gov.br/programas/pnae') },
                ],
                { cancelable: false },
              )}
            >
              <Text style={styles.buttonTexts}>Consultar Legislações e Manuais.</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  },
});

export default MainLegislationScreen;