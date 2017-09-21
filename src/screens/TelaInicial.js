import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,Image,TouchableOpacity} from 'react-native';

const imageCapa = require('../images/capa.jpg');


export default class TelaInicial extends React.Component {

    render() {
        return (
            <View style={styles.im}>
                <Image source = {imageCapa}>
                    <View style={styles.capa}>
                        <Text style={styles.txt}>MERENDA +</Text>
                        <TouchableOpacity
                        style={styles.btn}
                        activeOpacity= {0.7}>
                            <Text style={styles.txt_btn}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.btn1}
                        activeOpacity= {0.7}
                        >
                            <Text style={styles.txt_btn}>Cadastrar</Text>
                        </TouchableOpacity>

                    </View>
                </Image>
            </View>
        );
    }
}


const styles=StyleSheet.create({
    im: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000000'
    },
    capa: {
        alignItems:'center',
        backgroundColor:'transparent',
        shadowOffset:{width:0,height:1},
        shadowOpacity:1
    },
    btn: {
        paddingHorizontal:135,
        paddingVertical:20,
        marginBottom:50,
        marginTop:200,
        backgroundColor:'#FF9500',
        borderRadius:10

    },
    txt_btn: {
        fontSize:20,
        color:'white'
    },
    btn1: {
        paddingHorizontal:117,
        paddingVertical:20,
        marginBottom:50,
        marginTop:10,
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
