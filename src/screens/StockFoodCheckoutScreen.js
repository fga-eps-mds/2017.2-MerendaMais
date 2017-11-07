import React from 'react';
import { Checkbox } from 'react-native-checkbox-field'; // Checkbox only
import PropTypes from 'prop-types';
import { StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
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
    flexWrap: 'wrap',
  },
  text: {
    flexDirection: 'row',
  },
  label: {
    paddingTop: 15,
    flex: 1,
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    height: height * 0.25,
    paddingLeft: 10,
    fontSize: width * 0.05,
    textAlignVertical: 'top',
  },

  textBox: {
    paddingLeft: 10,
    paddingTop: 30,
    paddingRight: 10,
  },
});

export default class StockFoodCheckoutScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      observation: '',
    };
  }
  showPositiveCheckBox(item) {
    return (
      <View>
        <Checkbox
          containerStyle={styles.checkbox}
          label="Sim"
          selected={item.markedYes}
          selectedColor={'#4caf50'}
          onSelect={() => this.props.setStockFoodReportPositive(item.key)}
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
          containerStyle={styles.checkbox}
          label="Não"
          selected={item.markedNo}
          selectedColor={'red'}
          onSelect={() => this.props.setStockFoodReportNegative(item.key)}
          disabled={item.markedYes}
          disabledColor={null}
        />
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.content}>
        <Header
          title={'Relatório'}
          subTitle={'Estoque de alimento'}
        />

        <View>
          {
            this.props.report.map(item => (
              <View style={styles.text} key={item.key}>
                {this.showPositiveCheckBox(item)}
                {this.showNegativeCheckBox(item)}
                <Text style={styles.label}>{item.label}</Text>
              </View>
            ),
            )
          }
        </View>

        <View behavior="padding">
          <View style={styles.textBox}>
            <TextInput
              onChangeText={text => this.setState({ observation: text })}
              style={styles.textInput}
              multiline
              underlineColorAndroid="transparent"
              placeholder="Observações (opcional)"
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.setFoodStockObservation(this.state.observation)}
          key="setObservation"
        >
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

StockFoodCheckoutScreen.propTypes = {
  setFoodStockObservation: PropTypes.func.isRequired,
  setStockFoodReportPositive: PropTypes.func.isRequired,
  setStockFoodReportNegative: PropTypes.func.isRequired,
  report: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    key: PropTypes.number,
  })).isRequired,
};
