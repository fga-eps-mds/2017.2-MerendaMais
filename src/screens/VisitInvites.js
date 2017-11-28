import React from 'react';
// import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Header from '../components/Header';

/* const styles = StyleSheet.create({
  }
});
*/

export default class ProfileInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Header
        title={'Notificações'}
        subTitle={'Visita'}
        backButton
      />

    );
  }
}
