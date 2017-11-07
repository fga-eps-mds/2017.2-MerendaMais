import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const styles = StyleSheet.create({
  listRegisters: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
  },
  textBox: {
    paddingLeft: 2,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 15,
    paddingVertical: 5,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
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
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Nome: </Text>
              {counselor.name}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>CPF: </Text>
              {counselor.cpf}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Telefone: </Text>
              {counselor.phone}
            </Text>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity>
              <View style={styles.greenBox}>
                <Text>VALIDAR</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.redBox}>
                <Text>EXCLUIR</Text>
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
