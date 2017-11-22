import React from 'react';
import { MapView } from 'expo';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../components/Header';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 7,
    marginBottom: 5,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 5,
    paddingTop: 10,
    paddingLeft: 10,
    height: height * 0.06,
    fontSize: width * 0.05,
    textAlignVertical: 'top',
  },
  textBox: {
    margin: 1.5,
    paddingLeft: 2,
    justifyContent: 'flex-start',
  },

});


export default class ScheduleMeetingMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: 60.0,
        longitude: -30.0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      error: null,
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          location: { ...this.state.location, latitude: position.coords.latitude } });
        this.setState({
          location: { ...this.state.location, longitude: position.coords.longitude } });
        console.log('ONDE EU TO');
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    console.log('O STATE');
    console.log(this.state);
    return (
      <View style={styles.principal}>
        <Header
          title={'AGENDAR REUNIÃO'}
          subTitle={'ESCOLHA O LOCAL'}
          backButton
        />
        <View style={styles.textBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Local da Reunião"
            // onChangeText={text => this.setState({ passwordCompared: text })}
          />
        </View>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          region={this.state.location}
        >
          <MapView.Marker
            coordinate={this.state.location}
            pinColor="orange"
          />
        </MapView>
        <TouchableOpacity
          key="setMeetingLocationButton"
          style={styles.button}
          // onPress={() => Actions.ScheduleMeetingMap()}
        >
          <Text style={styles.buttonText}>Definir Local da Reunião</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
