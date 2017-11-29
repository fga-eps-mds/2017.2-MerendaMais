import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';

const styles = StyleSheet.create({
  field: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'gray',
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 15,
    justifyContent: 'flex-start',
    paddingLeft: 2,
    paddingRight: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  legislationScreen: {
    flex: 1,
    backgroundColor: '#FAFAFA',
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
    paddingLeft: 20,
    paddingTop: 5,
    color: 'blue',
    fontSize: 20,
    paddingRight: 10,
  },
});

// export default class MainLegislationScreen extends React.Component {
const MainLegislationScreen = () => ({
  render() {
    return (
      <View style={styles.legislationScreen}>
        <Header
          title={'Legislação'}
          backButton
        />
        <View style={styles.infoProfileBox}>
          <ScrollView>
            <TouchableOpacity
              onPress={() => Actions.resolution26Screen()}
            >
              <Text style={styles.buttonText}>Resolução Número 26</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.resolution1Screen()}
            >
              <Text style={styles.buttonText}>Resolução Número 1</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  },
});

export default MainLegislationScreen;
