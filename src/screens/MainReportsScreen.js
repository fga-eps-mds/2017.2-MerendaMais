import React from 'react';
import { StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Checkbox from 'react-native-checkbox';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';
import store from '../Reducers/store';

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
    paddingLeft: 20,
    paddingTop: 5,
    color: 'blue',
    fontSize: 20,
    paddingRight: 10,
  },
  text_Water: {
    paddingLeft: 20,
    paddingTop: 5,
    color: 'blue',
    fontSize: 18,
    paddingRight: 10,
  },
});

export default class MainReportsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anyReport: false,
      whatever: '',
    };
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

  render() {
    return (
      <View style={styles.content}>
        <Header
          title={'Relatórios'}
          backButton
        />
        <ScrollView>
          <View>
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
                onPress={() => Actions.kitchenCheckoutScreen()}
              >
                <Text style={styles.text}>Cozinha</Text>
              </TouchableOpacity>
              {this.checkingKitchenReport()}
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
                onPress={() => Actions.schoolSurroundingsCheckoutScreen()}
              >
                <Text style={styles.text}>Arredores da Escola</Text>
              </TouchableOpacity>
              {this.checkingSchoolSurroundingsReport()}
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
                onPress={() => Actions.waterSewerSupplyCheckoutScreen()}
              >
                <Text style={styles.text_Water}>Abastecimento de Água e Esgoto Sanitário</Text>
              </TouchableOpacity>
              {this.checkingWaterSewerSupplyReport()}
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
          </View>
        </ScrollView>
      </View>
    );
  }
}
