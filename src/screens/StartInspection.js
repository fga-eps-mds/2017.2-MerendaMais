import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

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
    paddingLeft: 4,
    justifyContent: 'flex-start',
  },

  text: {
    fontSize: 15,
    paddingVertical: 2,
  },

  buttonBox: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#4cd964',
    padding: 8,
    justifyContent: 'center',
    marginRight: 20,
  },
  buttonText: {
    fontSize: 12,
  },
});

class StartInspection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentWillMount() {
    this.props.asyncGetSchedule(this.props.counselor);
  }

  verification(listOfInvitees) {
    if (listOfInvitees[this.props.counselor.nuvemCode] === undefined) {
      return (
        <View style={[styles.buttonBox, { backgroundColor: '#ff3b30' }]}>
          <TouchableOpacity
            disabled
          >
            <Text style={styles.buttonText}>NÃO CONVIDADO</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (!listOfInvitees[this.props.counselor.nuvemCode].confirmed) {
      return (
        <View style={[styles.buttonBox, { backgroundColor: '#ffcc00' }]}>
          <TouchableOpacity
            disabled
          >
            <Text style={styles.buttonText}>NÃO CONFIRMOU</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.buttonBox}>
        <TouchableOpacity
          onPress={() => Actions.mainReportsScreen()}
        >
          <Text style={styles.buttonText}>FISCALIZAR</Text>
        </TouchableOpacity>
      </View>
    );
  }

  arrayScheduleList() {
    if (this.props.listOfSchedulingInAGroup.length === 0) {
      return (
        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#FF9500" />
      );
    }
    return (
      this.props.listOfSchedulingInAGroup.map(schedule => (
        <View style={styles.listSchedule}>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Escola: </Text>
              {schedule.codSchool}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Data: </Text>
              {schedule.date}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Horário: </Text>
              {schedule.time}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Número de convidados: </Text>
              {Object.keys(schedule.listOfInvitees).length}
            </Text>
          </View>
          {this.verification(schedule.listOfInvitees)}
        </View>
      ))
    );
  }
  render() {
    console.log(this.props.listOfSchedulingInAGroup);
    return (
      <View style={styles.principal}>
        <ScrollView style={styles.content}>
          {this.arrayScheduleList()}
        </ScrollView>
      </View>
    );
  }
}

const { shape, func } = PropTypes;

StartInspection.propTypes = {
  asyncGetSchedule: func.isRequired,
  listOfSchedulingInAGroup: PropTypes.arrayOf(PropTypes.shape({
    codSchool: PropTypes.number,
    date: PropTypes.string,
    time: PropTypes.string,
  })).isRequired,
  counselor: shape({
  }).isRequired,
};

export default StartInspection;
