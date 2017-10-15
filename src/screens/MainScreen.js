import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { SideMenu } from 'react-native-elements';
import Menu from '../components/Menu';

const sideMenuIcon = require('../images/ic_menu_black_48dp_1x.png');

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
    const menu = <Menu />;

    return (
      <SideMenu
        menu={menu}
        menuPosition="right"
        isOpen={this.state.isOpen}
        disableGestures
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={{ flex: 1, backgroundColor: 'white' }}>

          <View style={styles.headerBox}>
            <Text style={styles.textLogo}>Merenda +</Text>

            <TouchableOpacity
              onPress={() => this.updateMenuState(true)}
            >
              <Image source={sideMenuIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.bodyBox}>
            <TouchableOpacity
              style={styles.buttonInspect}
              activeOpacity={0.7}
            >
              <Text style={{ color: 'white', fontSize: 20 }}>Fiscalizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SideMenu>
    );
  }
}

export default MainScreen;
