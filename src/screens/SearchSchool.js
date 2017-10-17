import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { SideMenu } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Menu from '../components/Menu';

const sideMenuIcon = require('../images/ic_menu_black_48dp_1x.png');
const CityIcon = require('../images/ic_location_city_48pt.png');
const SearchIcon = require('../images/ic_search_48pt.png');
const BackIcon = require('../images/ic_keyboard_arrow_left_48pt.png');


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
    paddingTop: 10,
    alignItems: 'center',
  },
  textLogo: {
    flex: 1,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Input: {
    marginTop: 25,
    paddingLeft: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 7,
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  buttonSearchAnabled: {
    paddingHorizontal: 117,
    paddingVertical: 18,
    marginTop: 50,
    marginBottom: 0,
    backgroundColor: '#FF9500',
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonSearchDisabled: {
    paddingHorizontal: 117,
    paddingVertical: 18,
    marginTop: 50,
    marginBottom: 0,
    backgroundColor: '#DEDEDE',
    borderRadius: 8,
    borderWidth: 1,
  },
});


class SearchSchool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      CAEState: '',
      school: '',
    };
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  buttonActivation() {
    console.log(this.state.CAEState);
    if (this.state.CAEState > '') {
      return (
        <TouchableOpacity
          style={styles.buttonSearchAnabled}
          activeOpacity={0.7}
          onPress={() => null}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>Pesquisar</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={styles.buttonSearchDisabled}
        disabled
      >
        <Text style={{ color: 'white', fontSize: 20 }}>Pesquisar</Text>
      </TouchableOpacity>
    );
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
            <TouchableOpacity
              onPress={() => Actions.pop()}
            >
              <Image source={BackIcon} />
            </TouchableOpacity>
            <Text style={styles.textLogo}>Pesquisar Escola</Text>
            <TouchableOpacity
              onPress={() => this.updateMenuState(true)}
            >
              <Image source={sideMenuIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyBox}>
            <View style={{ flex: 1 }}>
              <View style={styles.Input}>
                <Image source={CityIcon} style={styles.icon} />
                <TextInput
                  width={280}
                  returnKeyType="go"
                  onChangeText={text => this.setState({ CAEState: text })}
                  value={this.state.CAE}
                  underlineColorAndroid="transparent"
                  placeholder="Estado/Município do seu CAE"
                />
              </View>

              <View style={styles.Input}>
                <Image source={SearchIcon} style={styles.icon} />
                <TextInput
                  width={280}
                  returnKeyType="go"
                  onChangeText={text => this.setState({ school: text })}
                  value={this.state.school}
                  underlineColorAndroid="transparent"
                  placeholder="Escola a pesquisar"
                />
              </View>
            </View>
            <View style={{ flex: 3, justifyContent: 'flex-end', paddingBottom: 30 }}>
              {this.buttonActivation()}
            </View>
          </View>
        </View>
      </SideMenu>
    );
  }
}

const { shape, string } = React.PropTypes;

SearchSchool.propTypes = {
  counselor: shape({
    CAE: string.isRequired,
  }).isRequired,
};

export default SearchSchool;
