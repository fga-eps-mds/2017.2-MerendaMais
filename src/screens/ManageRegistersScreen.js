import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const styles = StyleSheet.create({
  listRegisters: {
    flex: 1,
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBox: {
    paddingLeft: 8,
  },
  text: {
    fontSize: 15,
    paddingVertical: 5,
  },
  greenBox: {
    backgroundColor: '#4CD964',
    padding: 8,
    borderRadius: 3,
    marginRight: 20,

  },
  redBox: {
    backgroundColor: '#FF3B30',
    padding: 8,
    borderRadius: 3,
    marginRight: 10,
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
      this.props.listOfCounselorsInAGroup.map(counselor => (
        <View style={styles.listRegisters}>
          <View style={styles.textBox}>
            <Text style={styles.text}> Nome: {counselor.name} </Text>
            <Text style={styles.text}> CPF: {counselor.cpf} </Text>
            <Text style={styles.text}> Telefone: {counselor.phone} </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.greenBox}>
                <Text>ACEITAR</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.redBox}>
                <Text>RECUSAR</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ))
    );
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
          {this.arrayRegistersList()}
        </ScrollView>
      </View>
    );
  }
}

ManageRegistersScreen.propTypes = {
  CAE: PropTypes.string.isRequired,
  listOfCounselorsInAGroup: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    cpf: PropTypes.string,
    phone: PropTypes.string,
  })).isRequired,
  asyncGetCounselorFromGroup: PropTypes.func.isRequired,
};
