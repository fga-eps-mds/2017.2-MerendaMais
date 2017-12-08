import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Dimensions,
  BackHandler,
} from 'react-native';
import axios from 'axios';
import Checkbox from 'react-native-checkbox';
import { Actions } from 'react-native-router-flux';
import { logInfo, logWarn } from '../../../logConfig/loggers';
import { POSTS_LINK_NUVEM_CIVICA } from '../../constants/generalConstants';
import { convertingJSONToString } from '../../actions/counselorActions';
import Header from '../../components/Header';

const { width } = Dimensions.get('window');

const blackCheckedCheckbox = require('../../images/black-checked-checkbox.png');
const blackUncheckedCheckbox = require('../../images/black-unchecked-checkbox.png');
const greenCheckedCheckbox = require('../../images/green-checked-checkbox.png');
const greenUncheckedCheckbox = require('../../images/green-unchecked-checkbox.png');

const FILE_NAME = 'MainReportsScreen.js';

const styles = StyleSheet.create({

  buttonContainer: {
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginVertical: 13,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
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
    flex: 1,
    width: width * 0.7,
    paddingLeft: 10,
    color: 'blue',
    fontSize: 20,
  },

  statusView: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default class MainReportsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      anyReport: false,
      whatever: '',
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.mainScreen());
  }

  checkingFoodQualityReport() {
    return (
      <View>
        <Checkbox
          checked={this.props.report.statusFoodQuality}
          checkedImage={greenCheckedCheckbox}
          uncheckedImage={greenUncheckedCheckbox}
          label=" "
        />
      </View>
    );
  }
  checkingDocReport() {
    return (
      <View>
        <Checkbox
          checked={this.props.report.statusDoc}
          checkedImage={greenCheckedCheckbox}
          uncheckedImage={greenUncheckedCheckbox}
          label=" "
        />
      </View>
    );
  }
  checkingRefectoryReport() {
    return (
      <View>
        <Checkbox
          checked={this.props.report.statusRefectory}
          checkedImage={greenCheckedCheckbox}
          uncheckedImage={greenUncheckedCheckbox}
          label=" "
        />
      </View>
    );
  }
  checkingKitchenReport() {
    return (
      <View>
        <Checkbox
          checked={this.props.report.statusKitchen}
          checkedImage={blackCheckedCheckbox}
          uncheckedImage={blackUncheckedCheckbox}
          label=" "
        />
      </View>
    );
  }
  checkingStockFoodReport() {
    return (
      <View>
        <Checkbox
          checked={this.props.report.statusFoodStock}
          checkedImage={blackCheckedCheckbox}
          uncheckedImage={blackUncheckedCheckbox}
          label=" "
        />
      </View>
    );
  }

  checkingSchoolSurroundingsReport() {
    return (
      <View>
        <Checkbox
          checked={this.props.report.statusSchoolSurroundings}
          checkedImage={blackCheckedCheckbox}
          uncheckedImage={blackUncheckedCheckbox}
          label=" "
        />
      </View>
    );
  }

  checkingFoodHandlerReport() {
    return (
      <View>
        <Checkbox
          checked={this.props.report.statusFoodHandler}
          checkedImage={blackCheckedCheckbox}
          uncheckedImage={blackUncheckedCheckbox}
          label=" "
        />
      </View>
    );
  }
  checkingReportObservation() {
    return (
      <View>
        <Checkbox
          checked={this.props.report.statusReportObservation}
          checkedImage={blackCheckedCheckbox}
          uncheckedImage={blackUncheckedCheckbox}
          label=" "
        />
      </View>
    );
  }

  checkingWaterSewerSupplyReport() {
    return (
      <View>
        <Checkbox
          checked={this.props.report.statusWaterSewerSupply}
          checkedImage={blackCheckedCheckbox}
          uncheckedImage={blackUncheckedCheckbox}
          label=" "
        />
      </View>
    );
  }

  checkingFoodPreparationReport() {
    return (
      <View>
        <Checkbox
          checked={this.props.report.statusFoodPreparation}
          checkedImage={blackCheckedCheckbox}
          uncheckedImage={blackUncheckedCheckbox}
          label=" "
        />
      </View>
    );
  }

  changeCounselorRealizedVisitStatus() {
    const newContentJSON = this.props.scheduleVisit.currentVisit.content;
    newContentJSON.visitListOfInvitees[this.props.counselor.nuvemCode].realizedVisit = true;

    const newContentString = convertingJSONToString(newContentJSON);

    const putScheduleHeader = {
      headers: {
        appToken: this.props.counselor.token,
      },
    };

    const putScheduleBody = {
      JSON: newContentString,
      texto: 'Agendamento',
      valor: 0,
    };

    axios.put(`${POSTS_LINK_NUVEM_CIVICA}
    ${this.props.scheduleVisit.currentVisit.codPostagem}/conteudos/
    ${this.props.scheduleVisit.currentVisit.codConteudoPost}`,
    putScheduleBody, putScheduleHeader)
      .then((response) => {
        logInfo(FILE_NAME, 'changeCounselorRealizedVisitStatus', response.data);
      })
      .catch((error) => {
        logWarn(FILE_NAME, 'changeCounselorRealizedVisitStatus', error);
      });
  }

  finishVisit() {
    /* Requisições para salvar a fiscalização na Nuvem Cívica */

    /* Change the post at Nuvem Cívica to inform that this counselor realized this visit */
    this.changeCounselorRealizedVisitStatus();
  }

  render() {
    return (
      <View style={styles.content}>
        <Header
          title={'Listas de verificação'}
          backButton
          backTo={() => Actions.mainScreen()}
        />
        <ScrollView>
          <View>
            <View style={styles.statusView}>
              <TouchableOpacity
                onPress={() => Actions.schoolSurroundingsCheckoutScreen()}
              >
                <Text style={styles.text}>Arredores da Escola</Text>
              </TouchableOpacity>
              {this.checkingSchoolSurroundingsReport()}
            </View>

            <View style={styles.statusView}>
              <TouchableOpacity
                onPress={() => Actions.stockFoodCheckoutScreen()}
              >
                <Text style={styles.text}>Estoque de Alimentos</Text>
              </TouchableOpacity>
              {this.checkingStockFoodReport()}
            </View>

            <View style={styles.statusView}>
              <TouchableOpacity
                onPress={() => Actions.DocCheckoutScreen()}
              >
                <Text style={styles.text}>Documentação</Text>
              </TouchableOpacity>
              {this.checkingDocReport()}
            </View>

            <View style={styles.statusView}>
              <TouchableOpacity
                onPress={() => Actions.foodQualityCheckoutScreen()}
              >
                <Text style={styles.text}>Qualidade da Alimentação</Text>
              </TouchableOpacity>
              {this.checkingFoodQualityReport()}
            </View>

            <View style={styles.statusView}>
              <TouchableOpacity
                onPress={() => Actions.foodHandlerCheckoutScreen()}
              >
                <Text style={styles.text}>Manipuladores de Alimentos</Text>
              </TouchableOpacity>
              {this.checkingFoodHandlerReport()}
            </View>

            <View style={styles.statusView}>
              <TouchableOpacity
                onPress={() => Actions.refectoryCheckoutScreen()}
              >
                <Text style={styles.text}>Refeitório</Text>
              </TouchableOpacity>
              {this.checkingRefectoryReport()}
            </View>

            <View style={styles.statusView}>
              <TouchableOpacity
                onPress={() => Actions.waterSewerSupplyCheckoutScreen()}
              >
                <Text style={styles.text}>Abastecimento de Água e Esgoto</Text>
              </TouchableOpacity>
              {this.checkingWaterSewerSupplyReport()}
            </View>

            <View style={styles.statusView}>
              <TouchableOpacity
                onPress={() => Actions.kitchenCheckoutScreen()}
              >
                <Text style={styles.text}>Cozinha</Text>
              </TouchableOpacity>
              {this.checkingKitchenReport()}
            </View>

            <View style={styles.statusView}>
              <TouchableOpacity
                onPress={() => Actions.foodPreparationCheckoutScreen()}
              >
                <Text style={styles.text}>Preparação e Distribuição de Alimentos</Text>
              </TouchableOpacity>
              {this.checkingFoodPreparationReport()}
            </View>

            <View style={styles.statusView}>
              <TouchableOpacity
                onPress={() => Actions.ReportObservationScreen()}
              >
                <Text style={styles.text}>+ Outras informações</Text>
              </TouchableOpacity>
              {this.checkingReportObservation()}
            </View>

            <TouchableOpacity
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>Anexar fotos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>Gerar Relatório Final</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.finishVisit()}
            >
              <Text style={styles.buttonText}>Encerrar Fiscalização</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const { shape, string, number } = PropTypes;

MainReportsScreen.propTypes = {
  counselor: shape({
    token: string.isRequired,
    nuvemCode: number.isRequired,
  }).isRequired,
  scheduleVisit: shape({
    currentVisit: shape({
    }).isRequired,
  }).isRequired,
  report: shape({

  }).isRequired,
};
