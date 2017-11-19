import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  ActivityIndicator,
  Alert,
  Picker,
} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const styles = StyleSheet.create({
  listSchedule: {
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
              {schedule.listOfInvitees.length}
            </Text>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity>
              <View style={styles.greenBox}>
                <Text>FISCALIZAR</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ))
    );
  }
  render() {
    return (
      <View>
        <Header
          title={'Visitas Agendadas'}
          backButton
        />
        <View>
          {this.arrayScheduleList()}
        </View>
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
