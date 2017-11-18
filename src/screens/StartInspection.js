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

  render() {
    return (
      <View>
        <Header
          title={'Visitas Agendadas'}
          backButton
        />
        <View>
          <Text>DASDAfsd</Text>
        </View>
      </View>
    );
  }
}

const { shape, func } = PropTypes;

StartInspection.propTypes = {
  asyncGetSchedule: func.isRequired,
  counselor: shape({
  }).isRequired,
};

export default StartInspection;
