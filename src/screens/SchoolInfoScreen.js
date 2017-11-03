import React from 'react';
import axios from 'axios';
import openMap from 'react-native-open-maps';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SideMenu } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Menu from '../components/Menu';
import { SCHOOL_ENDPOINT } from '../constants';
import { logInfo, logWarn } from '../../logConfig/loggers';

const FILE_NAME = 'SchoolInfoScreen.js';

const sideMenuIcon = require('../images/ic_menu_black_48dp_1x.png');
const BackIcon = require('../images/ic_keyboard_arrow_left_48pt.png');
// const Location = require('../images/ic_place.png');

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
  textLogo: {
    flex: 1,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },

  listInfo: {
    flex: 4,
    marginHorizontal: 10,
    paddingTop: 5,
    // justifyContent: 'center',
    width: 340,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
  },
  text: {
    flexDirection: 'row',
    color: '#95a5a6',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },

});

class SchoolInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      isOpen: false,
      isLoading: false,
      name: '',
      phone: '',
      email: '',
    };
  }

  componentWillMount() {
    logInfo(FILE_NAME, 'componentWillMount',
      `URL:${SCHOOL_ENDPOINT}/${this.props.school.schoolCode}`);

    axios.get(`${SCHOOL_ENDPOINT}/${this.props.school.schoolCode}`, {
      params: {
        campos: 'nome,email,telefone,latitude,longitude',
      },
    })
      .then((response) => {
        logInfo(FILE_NAME, 'componentWillMount',
          `Successfully got school data: ${JSON.stringify(response.data, null, 2)}`);

        // Since we get the response in portuguese, we need to "translate" it so we
        // can add it in the store.
        this.props.setSchoolInfo(
          {
            schoolCode: response.data.codEscola,
            schoolName: response.data.nome,
            schoolPhone: response.data.telefone,
            schoolEmail: response.data.email,
            schoolLat: response.data.latitude,
            schoolLong: response.data.longitude,
          });
      })
      .catch((error) => {
        logWarn(FILE_NAME, 'componentWillMount', error);
      });
  }

  showLocalizationButton() {
    if (this.props.school.schoolLat !== undefined) {
      return (
        <View key="renderButton">
          <Text style={{ color: '#95a5a6', fontSize: 20 }}>Localização: </Text>
          <TouchableOpacity
            onPress={() => this.goToMaps()}
            style={styles.buttonContainer}
            activeOpacity={0.7}
          // <Image source={Location} />
          >
            <Text style={styles.buttonText}>Ver no Mapa</Text>
          </TouchableOpacity>
        </View>
      );
    }

    // If we can't return the button, return nothing.
    return (null);
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  goToMaps() {
    // const url = `https://www.google.com/maps/?q=${this.props.school.schoolLat},${this.props.school.schoolLong}`;
    // Linking.openURL(url);
    openMap({ latitude: this.props.school.schoolLat, longitude: this.props.school.schoolLong });
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

          <Text style={styles.text}>  Infomações</Text>
          <View style={styles.listInfo}>
            <Text style={{ color: '#95a5a6', fontSize: 20 }}>Nome: </Text>
            <Text style={{ color: 'black', fontSize: 19 }}>{this.props.school.schoolName}</Text>
            <Text style={{ color: '#95a5a6', fontSize: 20 }}>Email: </Text>
            <Text style={{ color: 'black', fontSize: 19 }}>{this.props.school.schoolEmail}</Text>
            <Text style={{ color: '#95a5a6', fontSize: 20 }}>Telefone: </Text>
            <Text style={{ color: 'black', fontSize: 19 }}>{this.props.school.schoolPhone}</Text>
            {this.showLocalizationButton()}
          </View>

          <TouchableOpacity
            onPress={() => Actions.popTo('schedulingVisit')}
            style={styles.buttonContainer}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Agendar Visita</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={}
            style={styles.buttonContainer}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Acessar Visitas</Text>
          </TouchableOpacity>
        </View>
      </SideMenu>
    );
  }
}

const { shape, func, number } = React.PropTypes;

SchoolInfoScreen.propTypes = {
  setSchoolInfo: func.isRequired,
  school: shape({
    schoolCode: number.isRequired,
  }).isRequired,
};

export default SchoolInfoScreen;
