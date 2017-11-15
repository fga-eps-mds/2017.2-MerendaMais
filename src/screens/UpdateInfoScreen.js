import React, { PropTypes } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Alert,
  Picker,
  ScrollView } from 'react-native';
import { TITULAR_COUNSELOR,
  SURROGATE_COUNSELOR } from '../constants';
import Header from '../components/Header';
import { logInfo } from '../../logConfig/loggers';

const FILE_NAME = 'UpdateInfoScreen.js';

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: 'white',
  },

  content: {
    flex: 6,
    marginTop: 8,
    paddingHorizontal: 15,
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

  InputFieldStyle: {
    padding: 8,
    marginTop: 1,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },

  InputFieldDropdown: {
    marginTop: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 10,
  },

  icon: {
    margin: 5,
  },

  InputStyle: {
    flex: 1,
  },
});

export default class UpdateInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.counselor.name,
      phone: this.props.counselor.profile.phone,
      counselorType: this.props.counselor.profile.counselorType,
    };

    this.validateName = this.validateName.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
  }

  validateName(name) {
    const validName = name.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, '');
    this.setState({ name: validName });
  }

  validatePhone(phone) {
    const validPhone = phone.replace(/[^0-9]/g, '');
    this.setState({ phone: validPhone });
  }

  register() {
    const nameRegex = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;
    const phoneRegex1 = /[0-9]{11}/g;
    const phoneRegex2 = /[0-9]{10}/g;
    let error = false;
    let errorMessage = '';

    // Validating Counselor Name.
    if (!nameRegex.test(this.state.name) || this.state.name.trim() === '') {
      error = true;
      errorMessage += 'Nome inválido\n';
    }

    // Validating Counselor Phone.
    if (!phoneRegex1.test(this.state.phone) && !phoneRegex2.test(this.state.phone)) {
      error = true;
      errorMessage += 'Telefone inválido\n';
    }

    // Validating Counselor Type.
    if (this.state.counselorType === '') {
      error = true;
      errorMessage += 'Tipo de Conselheiro não selecionado\n';
    }

    // Checking if was found a irregularity in register fields.
    if (error === false) {
      this.props.asyncEditCounselor(this.fetchCounselorData());
    } else {
      Alert.alert('FALHA AO EDITAR DADOS', errorMessage);
    }
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
        counselorType: this.state.counselorType,
        segment: this.props.counselor.profile.segment,
        CAE_Type: this.props.counselor.profile.CAE_Type,
        CAE_UF: this.props.counselor.profile.CAE_UF,
        CAE_municipalDistrict: this.props.counselor.profile.CAE_municipalDistrict,
        CAE: this.props.counselor.profile.CAE,
      },
    };
  }

  render() {
    logInfo(FILE_NAME, 'render()',
      `State of update info page: ${JSON.stringify(this.state, null, 2)}`);

    return (

      <View style={styles.principal}>
        <Header
          title={'Editar Informações'}
          backButton
        />
        <ScrollView>
          <View style={styles.content}>

            <Text>Nome</Text>
            <View style={styles.InputFieldStyle}>
              <MaterialIcons name="face" style={styles.icon} size={26} color="black" />
              <TextInput
                style={styles.InputStyle}
                placeholder="Digite o seu nome completo"
                placeholderTextColor="#95a5a6"
                underlineColorAndroid="transparent"
                returnKeyLabel={'next'}
                maxLength={60}
                keyboardType={'default'}
                autoCapitalize={'words'}
                onChangeText={text => this.validateName(text)}
                value={this.state.name}
              />
            </View>

            <Text>Telefone</Text>
            <View style={styles.InputFieldStyle}>
              <MaterialIcons name="phone" style={styles.icon} size={26} color="black" />
              <TextInput
                style={styles.InputStyle}
                placeholder="Digite o seu telefone"
                placeholderTextColor="#95a5a6"
                underlineColorAndroid="transparent"
                returnKeyLabel={'next'}
                maxLength={11}
                keyboardType={'phone-pad'}
                onChangeText={text => this.validatePhone(text)}
                value={this.state.phone}
              />
            </View>

            <Text>Tipo de Conselheiro</Text>
            <View style={styles.InputFieldDropdown}>
              <Picker
                onValueChange={value => this.setState({ counselorType: value })}
                selectedValue={this.state.counselorType}
              >
                <Picker.Item value="" label="Escolha seu cargo" color="#95a5a6" />
                <Picker.Item value={TITULAR_COUNSELOR} label={TITULAR_COUNSELOR} />
                <Picker.Item value={SURROGATE_COUNSELOR} label={SURROGATE_COUNSELOR} />
              </Picker>
            </View>

          </View>
        </ScrollView>
        <TouchableOpacity
          key="infoUpdate"
          style={styles.buttonContainer}
          onPress={() => this.register()}
        >
          <Text style={styles.buttonText}>Concluir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { shape, string, number, bool } = PropTypes;

UpdateInfoScreen.propTypes = {
  asyncEditCounselor: PropTypes.func.isRequired,
  counselor: shape({
    name: string.isRequired,
    nuvemCode: number.isRequired,
    token: string.isRequired,
    userName: string.isRequired,
    profile: shape({
      cpf: string.isRequired,
      phone: string.isRequired,
      isPresident: bool.isRequired,
      counselorType: string.isRequired,
      segment: string.isRequired,
      CAE_Type: string.isRequired,
      CAE_UF: string.isRequired,
      CAE_municipalDistrict: string.isRequired,
      CAE: string.isRequired,
    }).isRequired,
  }).isRequired,
};
