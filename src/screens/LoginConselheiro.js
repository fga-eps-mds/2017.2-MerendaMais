import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image, TouchableHighlight} from 'react-native'

export default class LoginConselheiro extends React.Component {
    render() {
        return (
        <View style={styles.principal}>
            <View style={styles.topo}>

            </View>

            <View style={styles.conteudo}>

            </View>

            <View style={styles.rodape}>

            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    principal: {
        flex: 1
    },
    topo: {
        flex: 1.2,
        backgroundColor: '#FF9500',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 6

    },
    conteudo: {
        marginTop: 9,
        flex: 6,
        backgroundColor: 'white'

    },
    rodape: {
        flex: 0.7,
        borderTopColor: '#a9a9a9',
        borderTopWidth: 1
    }

});
