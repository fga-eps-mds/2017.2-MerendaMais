import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image }
  from 'react-native';

const iconEmail = require('../images/ic_account_circle.png');
const iconPhone = require('../images/ic_phone.png');

const styles = StyleSheet.create({
  header: {
    flex: 1.2,
    backgroundColor: '#FF9500',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 50,
  },

  textLogo: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 30,
  },

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

class UpdateInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
    };
  }
  render() {
    return (

      <View style={styles.principal}>
        <View style={styles.header}>
          <Text style={styles.textLogo}>EDITAR INFORMAÇÕES</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.inputs}>
            <TextInput
              width = {280}
              maxLength = {50}
              placeholder="nome@exemplo.com"
              placeholderTextColor="black"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState(email)}>
              <Image source={iconEmail} style={styles.icon} />
            </TextInput>
            </View>
          <View style={styles.inputs}>
            <TextInput
              width = {280}
              maxLength = {11}
              placeholder="(00)00000-0000"
              placeholderTextColor="black"
              underlineColorAndroid="transparent"
              onChangeText={(phone) => this.setState({phone})}>
              <Image source={iconPhone} style={styles.icon}/>
            </TextInput>
          </View>
        </View>
        <TouchableOpacity
          style= {styles.buttonContainer}>
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = () => {
  console.log(),
  return {
  };
};

const mapDispatchToProps = () => {
  console.log(),
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateInfoScreen);
