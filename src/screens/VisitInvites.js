import React from 'react';
import axios from 'axios';
import openMap from 'react-native-open-maps';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import PopupDialog, {
  DialogTitle,
  DialogButton,
} from 'react-native-popup-dialog';
import Header from '../components/Header';
import { SCHOOL_ENDPOINT } from '../constants';
import { logInfo, logWarn } from '../../logConfig/loggers';

const FILE_NAME = 'VisitInvites.js';

const styles = StyleSheet.create({
  principal: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingTop: 6,
    backgroundColor: 'white',
  },

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
    marginTop: 5,
    paddingLeft: 4,
    justifyContent: 'flex-start',
  },

  text: {
    fontSize: 15,
    paddingVertical: 2,
  },

  buttonBox: {
    borderColor: 'black',
    borderWidth: 0.8,
    borderRadius: 7,
    backgroundColor: '#4cd964',
    padding: 7,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 8,
  },

  buttonInvitees: {
    borderColor: 'black',
    borderWidth: 0.8,
    borderRadius: 7,
    backgroundColor: 'white',
    padding: 8,
    justifyContent: 'center',
    marginRight: 20,
    marginTop: 68,
    width: 120,
  },

  buttonText: {
    fontSize: 12,
    textAlign: 'center',
  },

  footerPopUp: {
    backgroundColor: '#F9F9FB',
    borderColor: '#DAD9DC',
    borderTopWidth: 0.5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listRegisters: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 7,
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
  },
  buttonMap: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FF9500',
    justifyContent: 'flex-end',
  },
});

class VisitInvites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invitees: [],
      schedule: {
        agentEmail: '',
        codSchool: 0,
        date: '',
        invitedAgent: false,
        listOfInvitees: [{
        }],
        schoolName: '',
        time: '',
      },
      visitLat: null,
      visitLong: null,
    };
  }

  componentWillMount() {
    this.props.asyncGetSchedule(this.props.counselor);
    this.props.asyncGetCounselorFromGroup(this.props.counselor.profile.CAE,
      this.props.counselor.profile.cpf);
  }

  async getSchoolLocalization() {
    try {
      const response = await
        axios.get(`${SCHOOL_ENDPOINT}/${this.state.schedule.codSchool}`, {
          params: {
            campos: 'latitude,longitude',
          },
        });

      logInfo(FILE_NAME, 'getSchoolLocalization in visits Notifications',
        `Successfully got school data: ${JSON.stringify(response.data, null, 2)}`);

      // Since we get the response in portuguese, we need to "translate" it so we
      // can add it in the store.

      await this.setState({ visitLat: response.data.latitude });
      console.log('Set state Lat');
      await this.setState({ visitLong: response.data.longitude });
      console.log('O state depois das latitudes');
      console.log(this.state);
      this.popupDialog.show();
    } catch (error) {
      logWarn(FILE_NAME, 'getSchoolLocalization in visits Notifications', error);
      this.popupDialog.show();
    }
  }

  async seeVisitInfo(schedule) {
    await this.setState({ schedule });
    console.log('o schedule do state');
    console.log(this.state);
    await this.getSchoolLocalization();
  }

  // Será usada para confirmar/cancelar a presença do conselheiro na visita
  verification(listOfInvitees) {
    if (listOfInvitees[this.props.counselor.nuvemCode] === undefined) {
      return (
        <View style={[styles.buttonBox, { backgroundColor: '#ff3b30' }]}>
          <TouchableOpacity
            disabled
          >
            <Text style={styles.buttonText}>NÃO CONVIDADO</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (!listOfInvitees[this.props.counselor.nuvemCode].confirmed) {
      return (
        <View style={[styles.buttonBox, { backgroundColor: '#ffcc00' }]}>
          <TouchableOpacity
            disabled
          >
            <Text style={styles.buttonText}>NÃO CONFIRMOU</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.buttonBox}>
        <TouchableOpacity>
          {/* onPress={() => Actions.mainReportsScreen()} */}
          <Text style={styles.buttonText}>CONFIRMAR PRESENÇA</Text>
        </TouchableOpacity>
      </View>
    );
  }

  arrayScheduleList() {
    if (this.props.listOfPendingScheduleInAGroup.length === 0) {
      return (
        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#FF9500" />
      );
    }
    return (
      this.props.listOfPendingScheduleInAGroup.map(schedule => (
        <View style={styles.listSchedule}>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Escola: </Text>
              {schedule.schoolName}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Data: </Text>
              {schedule.date}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Horário: </Text>
              {schedule.time}
            </Text>
            {this.verification(schedule.listOfInvitees)}
          </View>
          <View style={styles.buttonInvitees}>
            <TouchableOpacity
              onPress={() => this.seeVisitInfo(schedule)}
            >
              <Text style={styles.buttonText}> + INFORMAÇÕES</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))
    );
  }

  goToMaps() {
    // const url = `https://www.google.com/maps/?q=${this.props.school.schoolLat},${this.props.school.schoolLong}`;
    // Linking.openURL(url);
    openMap({ latitude: this.state.visitLat, longitude: this.state.visitLong });
  }

  showLocalizationButton() {
    if (this.state.visitLat !== undefined && this.state.visitLat !== null) {
      return (
        <View key="renderButton">
          <Text style={{ color: '#95a5a6', fontSize: 20 }}>Localização: </Text>
          <TouchableOpacity
            onPress={() => this.goToMaps()}
            style={styles.buttonMap}
            activeOpacity={0.7}
            // <Image source={Location} />
          >
            <Text style={styles.buttonText}>Ver no Mapa</Text>
          </TouchableOpacity>
        </View>
      );
    }

    // If we can't return the button, return nothing.
    return (null);
  }

  render() {
    return (
      <View style={styles.principal}>
        <Header
          title={'Notificações'}
          subTitle={'Visita'}
          backButton
        />
        <PopupDialog
        /* Popup para mostrar as informações da visita */
          ref={(popupDialog) => {
            this.popupDialog = popupDialog;
          }}
          dialogTitle={<DialogTitle title="Informações sobre a visita" />}
          overlayPointerEvents="none"
          height="60%"
          width="85%"
          actions={[
            <View style={styles.footerPopUp}>
              <DialogButton
                buttonStyle={styles.dialogButtonStyle}
                text="OK"
                onPress={() => this.popupDialog.dismiss()}
                key="dialogButton1"
              />
            </View>,
          ]}
        >
          <View style={styles.listSchedule}>
            <View style={styles.textBox}>
              <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Escola: </Text>
                {this.state.schedule.schoolName}
              </Text>
              <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Data: </Text>
                {this.state.schedule.date}
              </Text>
              <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Horário: </Text>
                {this.state.schedule.time}
              </Text>
              {
                this.state.schedule.invitedAgent ? (
                  <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold' }}>Um agente foi convidado</Text>
                  </Text>
                ) :
                  <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold' }}>Agente não convidado</Text>
                  </Text>
              }
              <Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Número de convidados: </Text>
                {Object.keys(this.state.schedule.listOfInvitees).length}
              </Text>
              {this.showLocalizationButton()}
            </View>
          </View>
        </PopupDialog>
        <ScrollView style={styles.content}>
          {this.arrayScheduleList()}
        </ScrollView>
      </View>
    );
  }
}

const { shape, func } = PropTypes;

VisitInvites.propTypes = {
  asyncGetCounselorFromGroup: func.isRequired,
  asyncGetSchedule: func.isRequired,
  listOfPendingScheduleInAGroup: PropTypes.arrayOf(PropTypes.shape({
    codSchool: PropTypes.number,
    date: PropTypes.string,
    time: PropTypes.string,
  })).isRequired,
  counselor: shape({
  }).isRequired,
};

export default VisitInvites;
