import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'

const iconAccount = require('../images/account_circle.png');
const iconLock = require('../images/ic_lock.png');

export default class LoginPresidente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {CPF: '', senha: ''};
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
                        <TextInput style={styles.styleInput}
                        width = {280}
                        returnKeyType = 'next'
                        onChangeText={(CPF) => this.setState({CPF})}
                        maxLength = {11}
                        value = {this.state.CPF}
                        underlineColorAndroid = 'transparent'
                        placeholder = 'CPF'
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        />
                    </View>

                    <View style={styles.InputPassword}>
                        <Image source={iconLock} style={styles.icon}/>
                        <TextInput style={styles.styleInput}
                        width = {280}
                        underlineColorAndroid = 'transparent'
                        returnKeyType = 'go'
                        secureTextEntry
                        onChangeText={(senha) => this.setState({senha})}
                        value = {this.state.senha}
                        placeholder = 'Senha'
                        ref = {(input) => this.passwordInput = input}
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
                        <Text style={{marginTop: 30}}>É um conselheiro?
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
    textLogo: {
        fontSize: 35,
        color:'white',
        fontWeight:'bold',
        marginTop:10
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5
    },
    InputCPF: {
        paddingLeft: 2,
        paddingRight: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        borderRadius: 7,

    },
    InputPassword: {
        paddingLeft: 2,
        paddingRight: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:30,
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
    }

});
