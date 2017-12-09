import React from 'react';
import { Checkbox } from 'react-native-checkbox-field'; // Checkbox only
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../components/Header';
import styles from '../../Styles';

export default class WaterSewerSupplyCheckoutScreen extends React.Component {
  showPositiveCheckBox(item) {
    return (
      <View>
        <Checkbox
          checkboxStyle={styles.checklist.checkBoxStyle}
          selected={item.markedYes}
          selectedColor={'#008000'}
          onSelect={() => this.props.setWaterSewerSupplyReportPositive(item.key)}
          disabled={item.markedNo}
          disabledColor={null}
        />
      </View>
    );
  }

  showNegativeCheckBox(item) {
    return (
      <View>
        <Checkbox
          checkboxStyle={styles.checklist.checkBoxStyle}
          selected={item.markedNo}
          selectedColor={'#B22222'}
          onSelect={() => this.props.setWaterSewerSupplyReportNegative(item.key)}
          disabled={item.markedYes}
          disabledColor={null}
        />
      </View>
    );
  }

  concludeReport() {
    this.props.setStatusWaterSewerSupply(true);
    Actions.mainReportsScreen();
  }

  render() {
    return (
      <View style={styles.checklist.principal}>
        <Header
          title={'Lista de verificação'}
          subTitle={'Abastecimento de Água e Esgoto'}
          backButton
        />
        <KeyboardAvoidingView style={styles.checklist.content} behavior="padding">
          <ScrollView>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', paddingTop: 5, paddingLeft: 10 }}>Sim</Text>
                <Text style={{ fontWeight: 'bold', paddingTop: 5, paddingLeft: 20 }}>Nao</Text>
              </View>
              {
                this.props.report.map(item => (
                  <View style={styles.checklist.text} key={item.key}>
                    {this.showPositiveCheckBox(item)}
                    {this.showNegativeCheckBox(item)}
                    <Text style={styles.checklist.label}>{item.label}</Text>
                  </View>
                ),
                )
              }
            </View>

            <View behavior="padding">
              <Text
                style={styles.checklist.observationText}
              >Alguma observação adicional? Insira aqui. (Opcional)</Text>
              <View style={styles.checklist.observationBox}>
                <TextInput
                  onChangeText={text => this.props.setWaterSewerSupplyObservation(text)}
                  style={styles.checklist.textInput}
                  multiline
                  value={this.props.observation}
                  underlineColorAndroid="transparent"
                  placeholder="Observações (opcional)"
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.checklist.buttonContainer}
              onPress={() => this.concludeReport()}
              key="setObservation"
            >
              <Text style={styles.checklist.buttonText}>Concluir</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

WaterSewerSupplyCheckoutScreen.propTypes = {
  setStatusWaterSewerSupply: PropTypes.func.isRequired,
  setWaterSewerSupplyObservation: PropTypes.func.isRequired,
  setWaterSewerSupplyReportPositive: PropTypes.func.isRequired,
  setWaterSewerSupplyReportNegative: PropTypes.func.isRequired,
  observation: PropTypes.string.isRequired,
  report: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    key: PropTypes.number,
  })).isRequired,
};
