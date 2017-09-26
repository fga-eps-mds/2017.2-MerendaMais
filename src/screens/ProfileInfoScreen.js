import React from 'react'
import {StyleSheet, Text, ScrollView, View, TextInput, TouchableOpacity,Picker, Button, Image} from 'react-native'
import { connect } from 'react-redux';
//import { asyncCreateCounselor } from '../actions/counselorActions';
import { asyncGetCounselor } from '../actions/counselorActions';

class ProfileInfoScreen extends React.Component{
    render() {
        return (
              <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>Nome: {this.props.counselor.name}</Text>
              <Text>CPF: {this.props.counselor.cpf}</Text>
              <Text>Telefone: {this.props.counselor.phone}</Text>
              <Text>Email: {this.props.counselor.email}</Text>
              <Text>Segmento: {this.props.counselor.segment}</Text>
              <Text>CAE: {this.props.counselor.CAE}</Text>
              <Text>Tipo do CAE: {this.props.counselor.CAE_Type}</Text>
              </View>
        );
    }
}


const mapStateToProps = (state) => {
    return{
        counselor: state.counselor
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getCounselor(id){
            dispatch(asyncGetCounselor(id));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoScreen);
