import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './Routes.js'
import store from './src/Reducers/store.js';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Routes />
      </Provider>

    );
  }
}
