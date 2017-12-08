import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Dimensions,
  BackHandler,
  Alert,
} from 'react-native';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import { logInfo, logWarn } from '../../../logConfig/loggers';
import { POSTS_LINK_NUVEM_CIVICA,
  APP_IDENTIFIER,
  INSPECTION_POSTING_TYPE_CODE,
  FINISH_INSPECTION } from '../../constants/generalConstants';
import { convertingJSONToString } from '../../actions/counselorActions';
import Header from '../../components/Header';
import ButtonWithActivityIndicator from '../../components/ButtonWithActivityIndicator';

const { width } = Dimensions.get('window');

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

  loading: {
    marginTop: 15,
    marginBottom: 25,
  },
});

// Component to each clickable text that goes to checklists.
const GoToChecklistClickableText = props => (
  <View style={styles.statusView}>
    <TouchableOpacity
      onPress={() => props.onPress()}
      key={props.goToChecklistKey}
    >
      <Text style={styles.text}>{props.goToChecklistText}</Text>
    </TouchableOpacity>

    <View>
      {props.isCompleted ? (
        <MaterialIcons
          name="check"
          size={28}
          style={{ paddingRight: 23 }}
          color="green"
        />
      ) : (<Text />)
      }
    </View>
  </View>
);

export default class MainReportsScreen extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.StartPendingInspection());
  }

  async createInspectionPostInNuvem(headerToInspection, bodyToInspection) {
    console.log(`${this.props.isLoading} ${headerToInspection} ${bodyToInspection}`);
  }

  // Prepare the results of inspection in blocks of information to send in post contents to Nuvem.
  async prepareAndSendInspectionResultsToNuvem() {
    // Header to create a new inpection post.
    const headerToInspection = {
      headers: {
        appIdentifier: APP_IDENTIFIER,
        appToken: this.props.counselor.token,
      },
    };

    // Body to create a new inpection post.
    const bodyToInspection = {
      autor: {
        codPessoa: this.props.counselor.nuvemCode,
      },
      codGrupoDestino: this.props.counselor.codGrupoDestino,
      postagemRelacionada: {
        codPostagem: this.props.scheduleVisit.currentVisit.codPostagem,
      },
      tipo: {
        codTipoPostagem: INSPECTION_POSTING_TYPE_CODE,
      },
    };

    this.createInspectionPostInNuvem(headerToInspection, bodyToInspection);
  }

  // Get the most current version of the schedule being inspected.
  updateCurrentVersionOfScheduleInspected() {
    console.log(this.props.scheduleVisit);
    // TODO(Allan Nobre).
  }

  // Change the post at Nuvem Cívica to inform that this counselor realized this visit.
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

  // Make the final requests to finalize the inspect.
  async finishVisit() {
    this.props.syncIsLoading();

    await this.prepareAndSendInspectionResultsToNuvem();

    // this.updateCurrentVersionOfScheduleInspected();

    // this.changeCounselorRealizedVisitStatus();

    this.props.syncIsNotLoading();
  }

  render() {
    return (
      <View style={styles.content}>
        <Header
          title={'Listas de verificação'}
          backButton
          backTo={() => Actions.StartPendingInspection()}
        />
        <ScrollView>
          <View pointerEvents={this.props.clickableView} >
            <GoToChecklistClickableText
              goToChecklistKey="Arredores da Escola"
              goToChecklistText="Arredores da Escola"
              onPress={() => Actions.schoolSurroundingsCheckoutScreen()}
              isCompleted={this.props.report.statusSchoolSurroundings}
            />

            <GoToChecklistClickableText
              goToChecklistKey="Estoque de Alimentos"
              goToChecklistText="Estoque de Alimentos"
              onPress={() => Actions.stockFoodCheckoutScreen()}
              isCompleted={this.props.report.statusFoodStock}
            />

            <GoToChecklistClickableText
              goToChecklistKey="Documentação"
              goToChecklistText="Documentação"
              onPress={() => Actions.DocCheckoutScreen()}
              isCompleted={this.props.report.statusDoc}
            />

            <GoToChecklistClickableText
              goToChecklistKey="Qualidade da Alimentação"
              goToChecklistText="Qualidade da Alimentação"
              onPress={() => Actions.foodQualityCheckoutScreen()}
              isCompleted={this.props.report.statusFoodQuality}
            />

            <GoToChecklistClickableText
              goToChecklistKey="Manipuladores de Alimentos"
              goToChecklistText="Manipuladores de Alimentos"
              onPress={() => Actions.foodHandlerCheckoutScreen()}
              isCompleted={this.props.report.statusFoodHandler}
            />

            <GoToChecklistClickableText
              goToChecklistKey="Refeitório"
              goToChecklistText="Refeitório"
              onPress={() => Actions.refectoryCheckoutScreen()}
              isCompleted={this.props.report.statusRefectory}
            />

            <GoToChecklistClickableText
              goToChecklistKey="Abastecimento de Água e Esgoto"
              goToChecklistText="Abastecimento de Água e Esgoto"
              onPress={() => Actions.waterSewerSupplyCheckoutScreen()}
              isCompleted={this.props.report.statusWaterSewerSupply}
            />

            <GoToChecklistClickableText
              goToChecklistKey="Cozinha"
              goToChecklistText="Cozinha"
              onPress={() => Actions.kitchenCheckoutScreen()}
              isCompleted={this.props.report.statusKitchen}
            />

            <GoToChecklistClickableText
              goToChecklistKey="Preparação e Distribuição de Alimentos"
              goToChecklistText="Preparação e Distribuição de Alimentos"
              onPress={() => Actions.foodPreparationCheckoutScreen()}
              isCompleted={this.props.report.statusFoodPreparation}
            />

            <GoToChecklistClickableText
              goToChecklistKey="+ Outras informações"
              goToChecklistText="+ Outras informações"
              onPress={() => Actions.ReportObservationScreen()}
              isCompleted={this.props.report.statusReportObservation}
            />

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>Anexar fotos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>Gerar Relatório Final</Text>
            </TouchableOpacity>

            <ButtonWithActivityIndicator
              activityIndicatorStyle={styles.loading}
              onPress={() => Alert.alert(
                'ENCERRAR FISCALIZAÇÃO',
                FINISH_INSPECTION,
                [
                  { text: 'Cancelar' },
                  { text: 'Finalizar', onPress: () => this.finishVisit() },
                ],
              )}
              isLoading={this.props.isLoading}
              buttonKey="FinishInspectionButton"
              buttonText="Encerrar Fiscalização"
              buttonStyle={styles.buttonContainer}
            />

          </View>
        </ScrollView>
      </View>
    );
  }
}

const { shape, string, number, bool, func } = PropTypes;

MainReportsScreen.propTypes = {
  isLoading: bool.isRequired,
  clickableView: string.isRequired,
  syncIsLoading: func.isRequired,
  syncIsNotLoading: func.isRequired,
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

GoToChecklistClickableText.propTypes = {
  isCompleted: bool.isRequired,
  goToChecklistText: string.isRequired,
  onPress: func.isRequired,
  goToChecklistKey: string.isRequired,
};
