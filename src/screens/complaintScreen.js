import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';

const styles = StyleSheet.create({

  complaintScreen: {
    flex: 1,
  },

});

const complaintScreen = () => ({
  render() {
    return (
      <View style={styles.complaintScreen}>
        <Header
          title={'Como denunciar?'}
          backButton
        />
      </View>
    );
  },
});

export default complaintScreen;
