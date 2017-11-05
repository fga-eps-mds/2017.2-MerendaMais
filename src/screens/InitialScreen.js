import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity } from 'react-native';


const initialBackgroundImage = require('../images/initial_background.jpg');

const styles = StyleSheet.create({
  initialBackgroundImage: {
    flex: 1,
    width: null,
  },

  initialScreen: {
    flex: 1,
    backgroundColor: 'transparent',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
  },

  loginButton: {
    width: 320,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9500',
    borderRadius: 10,
    marginBottom: 60,
  },

  buttonText: {
    fontSize: 20,
    color: 'white',
  },

  registerButton: {
    width: 320,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9500',
    borderRadius: 10,
  },

  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 140,
  },
});

const InitialScreen = () => ({
  render() {
    return (
      <Image style={styles.initialBackgroundImage} source={initialBackgroundImage}>
        <View style={styles.initialScreen}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.titleText}>MERENDA +</Text>
          </View>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
              style={styles.loginButton}
              activeOpacity={0.7}
              onPress={() => Actions.loginScreen()}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.registerButton}
              activeOpacity={0.7}
              onPress={() => Actions.registerScreen()}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>

    );
  },
});

export default InitialScreen;
