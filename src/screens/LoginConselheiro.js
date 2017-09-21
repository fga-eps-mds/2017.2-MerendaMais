import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'

const iconAccount = require('../images/account_circle.png');

export default class LoginConselheiro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {CPF: ''};
    }

    render() {
        return (
            <View style={styles.principal}>
                <View style={styles.topo}>
                    <Text style={styles.textLogo}>Merenda +</Text>
                </View>

                <View style={styles.conteudo}>
                    <View style={styles.InputCPF}>
                        <Image source={iconAccount} style={styles.icon}/>
                        <TextInput
                        width = {280}
                        returnKeyType = 'go'
                        onChangeText={(CPF) => this.setState({CPF})}
                        maxLength = {11}
                        value = {this.state.CPF}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'CPF'
                        />
                    </View>

                    <TouchableOpacity
                    style={styles.buttonLogin}
                    activeOpacity= {0.7}>
                        <Text style={{color: 'white', fontSize: 20}}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    activeOpacity = {0.6}
                    >
                        <Text style={{marginTop: 30}}>É um presidente?
                            <Text style={{color: 'blue'}}> Clique aqui</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.rodape}>
                    <TouchableOpacity
                    activeOpacity = {0.6}
                    >
                    <Text>Ainda não se cadastrou?
                        <Text style={{color: 'blue'}}> Cadastrar-se</Text>
                    </Text>
                    </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center'

    },
    conteudo: {
        marginTop: 9,
        flex: 6,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'

    },
    rodape: {
        flex: 0.7,
        borderTopColor: '#a9a9a9',
        borderTopWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5
    },
    textLogo: {
        fontSize: 35,
        color:'white',
        fontWeight:'bold',
        marginTop:10
    },
    InputCPF: {
        paddingLeft: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        borderRadius: 7

    },
    buttonLogin: {
        paddingHorizontal: 133,
        paddingVertical: 18,
        marginTop: 50,
        marginBottom: 0,
        backgroundColor: '#FF9500',
        borderRadius: 8,
        borderWidth: 1,
    },

});
