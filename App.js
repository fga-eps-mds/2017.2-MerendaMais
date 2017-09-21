import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UpdateInfoScreen from './src/screens/UpdateInfoScreen'
import { Provider } from 'react-redux';
import store from './src/redux/store';
import UpdateInfoContainer from './src/containers/UpdateInfoContainer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <UpdateInfoScreen />
      </Provider>
    );
  }
}
