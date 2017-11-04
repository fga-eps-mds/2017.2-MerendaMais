import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  headerBox: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FF9500',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyBox: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    flex: 1,
    paddingLeft: 48,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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


class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <View style={styles.headerBox}>
          <Text style={styles.textLogo}>Merenda +</Text>

          <TouchableOpacity
            onPress={() => Actions.drawerOpen()}
          >
            <FontAwesome name="navicon" size={32} />
          </TouchableOpacity>
        </View>

        <View style={styles.bodyBox}>
          <TouchableOpacity
            style={styles.buttonInspect}
            activeOpacity={0.7}
            onPress={() => Actions.stockFoodCheckoutScreen()}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>Fiscalizar</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

export default MainScreen;
