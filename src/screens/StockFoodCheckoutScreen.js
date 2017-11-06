import React from 'react';
import CheckBox from 'react-native-checkbox';
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
        <CheckBox
          containerStyle={styles.checkbox}
          label=" "
          checked={item.markedYes}
          disable={this.props.report.markedNo ? 'disable' : false}
          onChange={() => {
            if (!item.markedNo) {
              this.props.setStockFoodReportPositive(item.key);
            }
            return (null);
          }}
        />
      </View>
    );
  }

  showNegativeCheckBox(item) {
    return (
      <View>
        <CheckBox
          containerStyle={styles.checkbox}
          label=" "
          checked={item.markedNo}
          disable={this.props.report.markedYes ? 'disable' : false}
          onChange={() => {
            if (!item.markedYes) {
              this.props.setStockFoodReportNegative(item.key);
            }
            return (null);
          }}
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
