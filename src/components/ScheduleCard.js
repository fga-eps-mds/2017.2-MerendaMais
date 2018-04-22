import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';

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
    flexDirection: 'row',
    alignItems: 'center',
  },

  textBox: {
    flex: 4,
    paddingLeft: 4,
    justifyContent: 'flex-start',
    marginRight: 15,
  },

  text: {
    fontSize: 15,
    paddingVertical: 2,
  },
});

class ScheduleCard extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: {},
        counselor: this.props.counselor,
      };
  }

  render(){
    return(
      <View style={styles.listSchedule} key={this.props.keyProp}>
        <View style={styles.textBox}>
        {
          this.props.data.map( (item) =>(
            <Text style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>{item.label} </Text>
            {item.value}
          </Text>
          ) 
        )}
        </View>
          {this.props.children}
      </View>
    );
  }
}

ScheduleCard.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired,
    keyProp: PropTypes.string.isRequired,
    counselor: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      token: PropTypes.string.isRequired,
      nuvemCode: PropTypes.number.isRequired,
      profile: PropTypes.shape({
        cpf: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        isPresident: PropTypes.bool.isRequired,
        segment: PropTypes.string.isRequired,
        CAE: PropTypes.string.isRequired,
        CAE_Type: PropTypes.string,
      }).isRequired,
    }).isRequired,
};

export default ScheduleCard;