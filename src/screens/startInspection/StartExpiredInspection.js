import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import stylesList from '../../Styles/ListStyles';

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingTop: 6,
    backgroundColor: 'white',
  },

  listSchedule: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textBox: {
    flex: 6,
    paddingLeft: 4,
    justifyContent: 'flex-start',
    marginRight: 18,
  },

  text: {
    fontSize: 15,
    paddingVertical: 2,
  },

  buttonBox: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#DEDEDE',
    padding: 8,
    justifyContent: 'center',
    marginRight: 13,
  },

  buttonText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

class StartExpiredInspection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  arrayScheduleList() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#FF9500" />
      );
    } else if (this.props.listOfExpiredScheduleInAGroup.length === 0) {
      return (
        <View style={stylesList.noneScheduleTextBox}>
          <Text style={stylesList.noneScheduleText}>Nenhum Agendamento Expirado!</Text>
        </View>
      );
    }
    return (
      this.props.listOfExpiredScheduleInAGroup.map(visitSchedule => (
        <View style={styles.listSchedule} key={`EX${visitSchedule.codPostagem}`}>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Escola: </Text>
              {visitSchedule.content.schoolName}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Data: </Text>
              {visitSchedule.content.date}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Horário: </Text>
              {visitSchedule.content.time}
            </Text>
            {
              visitSchedule.content.invitedAgent ? (
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Um agente foi convidado</Text>
                </Text>
              ) :
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Agente não convidado</Text>
                </Text>
            }
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Número de participantes: </Text>
              {Object.keys(visitSchedule.content.visitListOfInvitees).length}
            </Text>
          </View>
          <View style={{ flex: 3 }}>
            <View style={styles.buttonBox}>
              <TouchableOpacity
                disabled
              >
                <Text style={styles.buttonText}>EXPIRADO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))
    );
  }
  render() {
    return (
      <View style={styles.principal}>
        <ScrollView style={styles.content}>
          {this.arrayScheduleList()}
        </ScrollView>
      </View>
    );
  }
}

StartExpiredInspection.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  listOfExpiredScheduleInAGroup: PropTypes.arrayOf(PropTypes.shape({
    codSchool: PropTypes.number,
    date: PropTypes.string,
    time: PropTypes.string,
  })).isRequired,
};

export default StartExpiredInspection;
