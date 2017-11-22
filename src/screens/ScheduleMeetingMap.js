import React from 'react';
import { MapView } from 'expo';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, KeyboardAvoidingView, Alert, ScrollView } from 'react-native';
import Header from '../components/Header';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: 'white',
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
      </View>
    );
  }
}
