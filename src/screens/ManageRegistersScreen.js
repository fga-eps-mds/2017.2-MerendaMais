import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  listRegisters: {
    flex: 1,
    margin: 25,
    height: height * 0.755,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#FAFAFA',
  },
});

export default class ManageRegisters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      registersList: [],
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View>
          <Header
            title={'Gerenciar Registro'}
            backButton
          />
        </View>
        <ScrollView>
          <View style={styles.listRegisters} >
            <Text> Caixa cinza </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
