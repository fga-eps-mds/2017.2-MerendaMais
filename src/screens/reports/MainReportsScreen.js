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
import store from '../../Reducers/store';
import { backHandlerPopToMain } from '../../NavigationFunctions';
import Header from '../../components/Header';
import { logInfo, logWarn } from '../../../logConfig/loggers';
import { POSTS_LINK_NUVEM_CIVICA } from '../../constants/generalConstants';
import { convertingJSONToString } from '../../actions/counselorActions';

const { width } = Dimensions.get('window');

const FILE_NAME = 'MainReportsScreen.js';

const styles = StyleSheet.create({

  buttonContainer: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },
  icon_header: {
    marginLeft: 20,
  },
  wrapper: {
    height: 100,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FF9500',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  buttonPhoto: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 10,
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
  textLogo: {
    // Font size 30 looks nice on 360 width phone.
    // (x * widthYourPhone = fontSize) where x is the proportion used in fontSize above.
    fontSize: width * 0.08,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 100,
  },
  text: {
    paddingLeft: 20,
    paddingTop: 5,
    color: 'blue',
    fontSize: 20,
    paddingRight: 10,
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

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', backHandlerPopToMain);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', backHandlerPopToMain);
  }

  checkingFoodQualityReport() {
    const newStateFoodQuality = store.getState();
    if (newStateFoodQuality.report.statusFoodQuality) {
      this.state.anyReport = true;
      return (
        <View style={{ marginLeft: 10 }}>
          <Checkbox
            checked={this.state.anyReport}
            label=" "
            checkedColor="green"
          />
        </View>
      );
    }
    return (null);
  }
  checkingDocReport() {
    const newStateDoc = store.getState();
    if (newStateDoc.report.statusDoc) {
      this.state.anyReport = true;
      return (
        <View style={{ marginLeft: 10 }}>
          <Checkbox
            checked={this.state.anyReport}
            label=" "
            checkedColor="green"
          />
        </View>
      );
    }
    return (null);
  }
  checkingRefectoryReport() {
    const newStateRefectory = store.getState();
    if (newStateRefectory.report.statusRefectory) {
      this.state.anyReport = true;
      return (
        <View style={{ marginLeft: 10 }}>
          <Checkbox
            checked={this.state.anyReport}
            label=" "
            checkedColor="green"
          />
        </View>
      );
    }
    return (null);
  }
  checkingKitchenReport() {
    const newStateKitchen = store.getState();
    if (newStateKitchen.report.statusKitchen) {
      this.state.anyReport = true;
      return (
        <View style={{ marginLeft: 10 }}>
          <Checkbox
            checked={this.state.anyReport}
            label=" "
            checkedColor="green"
          />
        </View>
      );
    }
    return (null);
  }
  checkingStockFoodReport() {
    const newStateStockFood = store.getState();
    if (newStateStockFood.report.statusFoodStock) {
      this.state.anyReport = true;
      return (
        <View style={{ marginLeft: 10 }}>
          <Checkbox
            checked={this.state.anyReport}
            label=" "
            checkedColor="green"
          />
        </View>
      );
    }
    return (null);
  }

  checkingSchoolSurroundingsReport() {
    const newStateSchoolSurroudingings = store.getState();
    if (newStateSchoolSurroudingings.report.statusSchoolSurroundings) {
      this.state.anyReport = true;
      return (
        <View style={{ marginLeft: 10 }}>
          <Checkbox
            checked={this.state.anyReport}
            label=" "
            checkedColor="green"
          />
        </View>
      );
    }
    return (null);
  }
  checkingFoodHandlerReport() {
    const newStateFoodHandler = store.getState();
    if (newStateFoodHandler.report.statusFoodHandler) {
      this.state.anyReport = true;
      return (
        <View style={{ marginLeft: 10 }}>
          <Checkbox
            checked={this.state.anyReport}
            label=" "
            checkedColor="green"
          />
        </View>
      );
    }
    return (null);
  }
  checkingReportObservation() {
    const newStateReportObservation = store.getState();
    if (newStateReportObservation.report.statusReportObservation) {
      this.state.anyReport = true;
      return (
        <View style={{ marginLeft: 10 }}>
          <Checkbox
            checked={this.state.anyReport}
            label=" "
            checkedColor="green"
          />
        </View>
      );
    }
    return (null);
  }

  checkingWaterSewerSupplyReport() {
    const newStateWaterSewerSupply = store.getState();
    if (newStateWaterSewerSupply.report.statusWaterSewerSupply) {
      this.state.anyReport = true;
      return (
        <View style={{ marginLeft: 10 }}>
          <Checkbox
            checked={this.state.anyReport}
            label=" "
            checkedColor="green"
          />
        </View>
      );
    }
    return (null);
  }

  checkingFoodPreparationReport() {
    const newStateFoodPreparation = store.getState();
    if (newStateFoodPreparation.report.statusFoodPreparation) {
      this.state.anyReport = true;
      return (
        <View style={{ marginLeft: 5 }}>
          <Checkbox
            checked={this.state.anyReport}
            label=" "
            checkedColor="green"
          />
        </View>
      );
    }
    return (null);
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
          title={'Relatórios'}
          onPress={() => Actions.popTo('mainScreen')}
        />
        <Text style={styles.textLogo}>Relatórios</Text>
        <ScrollView>
          <View>
            <View style={{ flexDirection: 'row', paddingTop: 40 }}>
              <TouchableOpacity
                onPress={() => Actions.schoolSurroundingsCheckoutScreen()}
              >
                <Text style={styles.text}>Arredores da Escola</Text>
              </TouchableOpacity>
              {this.checkingSchoolSurroundingsReport()}
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 40 }}>
              <TouchableOpacity
                onPress={() => Actions.stockFoodCheckoutScreen()}
              >
                <Text style={styles.text}>Estoque de Alimentos</Text>
              </TouchableOpacity>
              {this.checkingStockFoodReport()}
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 40 }}>
              <TouchableOpacity
                onPress={() => Actions.DocCheckoutScreen()}
              >
                <Text style={styles.text}>Documentação</Text>
              </TouchableOpacity>
              {this.checkingDocReport()}
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 40 }}>
              <TouchableOpacity
                onPress={() => Actions.foodQualityCheckoutScreen()}
              >
                <Text style={styles.text}>Qualidade da Alimentação</Text>
              </TouchableOpacity>
              {this.checkingFoodQualityReport()}
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 40 }}>
              <TouchableOpacity
                onPress={() => Actions.foodHandlerCheckoutScreen()}
              >
                <Text style={styles.text}>Manipuladores de Alimentos</Text>
              </TouchableOpacity>
              {this.checkingFoodHandlerReport()}
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 40 }}>
              <TouchableOpacity
                onPress={() => Actions.refectoryCheckoutScreen()}
              >
                <Text style={styles.text}>Refeitório</Text>
              </TouchableOpacity>
              {this.checkingRefectoryReport()}
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 40 }}>
              <TouchableOpacity
                onPress={() => Actions.waterSewerSupplyCheckoutScreen()}
              >
                <Text style={styles.text}>Abastecimento de Água e Esgoto</Text>
              </TouchableOpacity>
              {this.checkingWaterSewerSupplyReport()}
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 40 }}>
              <TouchableOpacity
                onPress={() => Actions.kitchenCheckoutScreen()}
              >
                <Text style={styles.text}>Cozinha</Text>
              </TouchableOpacity>
              {this.checkingKitchenReport()}
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 40 }}>
              <TouchableOpacity
                onPress={() => Actions.foodPreparationCheckoutScreen()}
              >
                <Text style={styles.text}>Preparação e Distribuição de Alimentos</Text>
              </TouchableOpacity>
              {this.checkingFoodPreparationReport()}
            </View>

            <View style={{ flexDirection: 'row', paddingTop: 40 }}>
              <TouchableOpacity
                onPress={() => Actions.ReportObservationScreen()}
              >
                <Text style={styles.text}>+ Outras informações</Text>
              </TouchableOpacity>
              {this.checkingReportObservation()}
            </View>

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
};
