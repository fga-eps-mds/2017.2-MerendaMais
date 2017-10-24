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
  text: {
    flexDirection: 'row',
  },
  text2: {
    paddingTop: 15,
    flex: 1,
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
            <View style={styles.text}>
              <CheckBox
                containerStyle={styles.checkbox}
                key={item.key}
                label=" "
                onChange={() => props.setStockFoodReport(item.key)}
              />
              <Text style={styles.text2}>{item.label}</Text>
            </View>
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
