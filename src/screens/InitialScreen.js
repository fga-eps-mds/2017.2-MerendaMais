import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const imageCapa = require('../images/capa.jpg');


export default class InitialScreen extends React.Component {

    render() {
        return (
            <Image style={styles.im} source = {imageCapa}>
                <View style={styles.capa}>
                    <View style={{flex: 1, alignItems:'center'}}>
                        <Text style={styles.txt}>MERENDA +</Text>
                    </View>

                    <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
                        <TouchableOpacity
                        style={styles.btn}
                        activeOpacity= {0.7}
                        onPress = {() => Actions.loginConselheiro()}>
                            <Text style={styles.txt_btn}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.btn1}
                        activeOpacity= {0.7}
                        onPress = {() => Actions.registerScreen()}>
                            <Text style={styles.txt_btn}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Image>

        );
    }
}


const styles=StyleSheet.create({
    im: {
        flex:1,
        width: null
    },
    capa: {
        flex: 1,
        backgroundColor:'transparent',
        shadowOffset:{width:0,height:1},
        shadowOpacity:1
    },
    btn: {
        width: 320,
        height: 65,
        alignItems:'center',
        justifyContent: 'center',
        marginBottom:60,
        backgroundColor:'#FF9500',
        borderRadius:10

    },
    txt_btn: {
        fontSize:20,
        color:'white'
    },
    btn1: {
        width: 320,
        height: 65,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#FF9500',
        borderRadius:10

    },
    txt: {
        fontSize:60,
        fontWeight:'bold',
        color:'white',
        marginTop:140
    }
});
