import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
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

export default class ManageRegistersScreen extends React.Component {
  componentWillMount() {
    this.props.asyncGetCounselorFromGroup(this.props.CAE);
  }

  arrayRegistersList() {
    if (this.props.listOfCounselorsInAGroup.length === 0) {
      return (
        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#FF9500" />
      );
    }
    return (
      this.props.listOfCounselorsInAGroup.map(counselor =>
        <Text> {counselor.nome} </Text>,
      )
    );
  }

  render() {
    console.log('Props:');
    console.log(this.props.listOfCounselorsInAGroup);
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View>
          <Header
            title={'Gerenciar Registro'}
            backButton
          />
        </View>
        <ScrollView>
          <View style={styles.listRegisters}>
            {this.arrayRegistersList()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

ManageRegistersScreen.propTypes = {
  CAE: PropTypes.string.isRequired,
  asyncGetCounselorFromGroup: PropTypes.func.isRequired,
};
