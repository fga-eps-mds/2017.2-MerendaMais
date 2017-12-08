import React from 'react';
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

export default class ReportObservationScreen extends React.Component {
  concludeReport() {
    this.props.setStatusReportObservation(true);
    Actions.mainReportsScreen();
  }

  render() {
    return (
      <View style={styles.checklist.principal}>
        <Header
          title={'Lista de verificação'}
          subTitle={'Observações adicionais'}
          backButton
        />
        <KeyboardAvoidingView style={styles.checklist.content} behavior="padding">
          <ScrollView>
            <View behavior="padding">
              <View style={styles.checklist.textBox}>
                <TextInput
                  onChangeText={text => this.props.setReportObservation(text)}
                  style={styles.checklist.textInput}
                  multiline
                  value={this.props.observation}
                  underlineColorAndroid="transparent"
                  placeholder="Observações gerais que gostaria de adicionar (opcional)"
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.checklist.buttonContainer}
              onPress={() =>
                this.concludeReport()
              }
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

ReportObservationScreen.propTypes = {
  setStatusReportObservation: PropTypes.func.isRequired,
  setReportObservation: PropTypes.func.isRequired,
  observation: PropTypes.string.isRequired,
};
