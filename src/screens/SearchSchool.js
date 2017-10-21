import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { SideMenu } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Menu from '../components/Menu';

const sideMenuIcon = require('../images/ic_menu_black_48dp_1x.png');
const CityIcon = require('../images/ic_location_city_48pt.png');
const SearchIcon = require('../images/ic_search_48pt.png');
const BackIcon = require('../images/ic_keyboard_arrow_left_48pt.png');
const GoIcon = require('../images/ic_keyboard_arrow_right_48pt.png');


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
  },
  textLogo: {
    flex: 1,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Input: {
    marginTop: 20,
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
    paddingVertical: 15,
    marginTop: 50,
    marginBottom: 0,
    backgroundColor: '#FF9500',
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonSearchDisabled: {
    paddingHorizontal: 117,
    paddingVertical: 15,
    marginTop: 50,
    marginBottom: 0,
    backgroundColor: '#DEDEDE',
    borderRadius: 8,
    borderWidth: 1,
  },
  listSchools: {
    flex: 5,
    justifyContent: 'center',
    width: 320,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
  },
  item: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    borderRadius: 7,
  },
  buttonSelectSchool: { padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonArea: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
});

console.disableYellowBox = true;

class SearchSchool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isLoading: false,
      city: '',
      name: '',
      schoolList: [],
    };
  }

  searchSchools() {
    const params = {
      name: this.state.name,
      city: this.state.city,
    };
    this.setState({ isLoading: true });

    axios.post('https://merenda-mais.herokuapp.com/get_schools/', params)
      .then((response) => {
        console.log(response.data);
        this.setState({ schoolList: response.data, isLoading: false });

        console.log('SearchSchool State');
        console.log(this.state);
        // If response is an empty array, no schools could be found.
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.log(error);
      });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  buttonActivation() {
    console.log(this.state.city);
    if (this.state.city > '' || this.state.name > '') {
      if (this.state.isLoading) {
        return (
          <ActivityIndicator
            style={{ paddingBottom: 10 }}
            size="large"
            color="#FF9500"
          />
        );
      }
      return (
        <TouchableOpacity
          style={styles.buttonSearchAnabled}
          activeOpacity={0.7}
          onPress={() => this.searchSchools()}
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
            <View style={{ flex: 2 }}>
              <View style={styles.Input}>
                <Image source={CityIcon} style={styles.icon} />
                <TextInput
                  width={280}
                  returnKeyType="go"
                  maxLength={50}
                  keyboardType={'default'}
                  onChangeText={text => this.setState({ city: text })}
                  value={this.state.CAE}
                  underlineColorAndroid="transparent"
                  placeholder="Estado/Município"
                />
              </View>

              <View style={styles.Input}>
                <Image source={SearchIcon} style={styles.icon} />
                <TextInput
                  width={280}
                  returnKeyType="go"
                  maxLength={50}
                  keyboardType={'default'}
                  onChangeText={text => this.setState({ name: text })}
                  value={this.state.name}
                  underlineColorAndroid="transparent"
                  placeholder="Escola a pesquisar"
                />
              </View>
            </View>

            <View style={styles.listSchools} >
              <FlatList
                data={this.state.schoolList}
                keyExtractor={item => item.nome}
                renderItem={({ item }) => (
                  <View style={styles.item}>
                    <TouchableOpacity
                      style={styles.buttonSelectSchool}
                    >
                      <Text style={{ fontSize: 16 }}>{item.nome}</Text>
                      <Image source={GoIcon} style={{ width: 25, height: 25 }} />
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>

            <View style={styles.buttonArea}>
              {this.buttonActivation()}
            </View>
          </View>
        </View>
      </SideMenu>
    );
  }
}

export default SearchSchool;
