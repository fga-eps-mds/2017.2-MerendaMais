import React from 'react';
import CheckBox from 'react-native-checkbox';
import { StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';

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

});

const StockFoodCheckoutScreen = props => (
  <ScrollView style={styles.content}>
    <Header
      title={'Relatório'}
      subTitle={'Estoque de alimento'}
    />
    <View>
      {
        props.report.map((item) => {
          return (
            <CheckBox
              label={item.label}
              containerStyle={styles.checkbox}
              key={item.key}
              onChange={() => props.setStockFoodReport(item.key)}
            />
          );
        })
      }
    </View>
    <TouchableOpacity style={styles.buttonContainer} >
      <Text style={styles.buttonText}>Concluir</Text>
    </TouchableOpacity>
  </ScrollView>
);

export default StockFoodCheckoutScreen;
