import React, { PropTypes } from 'react';
import { StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image }
  from 'react-native';
import Header from '../components/Header';

const iconPhone = require('../images/ic_phone.png');
const iconName = require('../images/ic_account_circle.png');

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },
  buttonContainer: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
  },
  content: {
    marginTop: 30,
    marginBottom: 9,
    flex: 6,
    flexDirection: 'column',
  },
  inputs: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'gray',
    marginHorizontal: 15,
    marginBottom: 30,
    justifyContent: 'flex-start',
    paddingLeft: 2,
    paddingRight: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
  },
});

export default class UpdateInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.counselor.name,
      phone: this.props.counselor.profile.phone,
    };
  }

  fetchCounselorData() {
    return {
      nuvemCode: this.props.counselor.nuvemCode,
      name: this.state.name,
      token: this.props.counselor.token,
      userName: this.props.counselor.userName,
      profile: {
        cpf: this.props.counselor.profile.cpf,
        phone: this.state.phone,
        isPresident: this.props.counselor.profile.isPresident,
        segment: this.props.counselor.profile.segment,
        CAE_Type: this.props.counselor.profile.CAE_Type,
        CAE: this.props.counselor.profile.CAE,
      },
    };
  }

  render() {
    return (

      <View style={styles.principal}>
        <Header
          title={'Editar Informações'}
          backButton={'<'}
        />
        <View style={styles.content}>
          <View style={styles.inputs}>
            <Image source={iconName} style={styles.icon} />
            <TextInput
              width={280}
              maxLength={50}
              value={this.state.name}
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ name: text })}
            />
          </View>
          <View style={styles.inputs}>
            <Image source={iconPhone} style={styles.icon} />
            <TextInput
              width={280}
              maxLength={11}
              value={this.state.phone}
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ phone: text })}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.asyncEditCounselor(this.fetchCounselorData())}
        >
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { shape, string, number, bool } = React.PropTypes;

UpdateInfoScreen.propTypes = {
  asyncEditCounselor: PropTypes.func.isRequired,
  counselor: shape({
    name: string.isRequired,
    nuvemCode: number.isRequired,
    token: string.isRequired,
    userName: PropTypes.string.isRequired,
    profile: shape({
      cpf: string.isRequired,
      phone: string.isRequired,
      isPresident: bool.isRequired,
      segment: string.isRequired,
      CAE: string.isRequired,
      CAE_Type: string,
    }).isRequired,
  }).isRequired,
};
