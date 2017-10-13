import React, { PropTypes } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  headerBox: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FF9500',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyBox: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonInspect: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9500',
    borderRadius: 8,
    borderWidth: 1,

  },


});


const MainScreen = () => ({
  render() {
    return (
      <View style={{flex: 1}}>

        <View style={styles.headerBox}>
          <Text style={styles.textLogo}> PERFIL</Text>
        </View>

        <View style={styles.bodyBox}>
          <TouchableOpacity
          style={styles.buttonInspect}
          activeOpacity= {0.7}
          >
          <Text style={{color: 'white', fontSize: 20}}>Fiscalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
});

export default MainScreen;
