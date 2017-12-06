import React from 'react';
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
    marginTop: 5,
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
        date: '',
        invitedAgent: false,
        meetingListOfInvitees: [{
        }],
        time: '',
      },
      visitLat: null,
      visitLong: null,
    };
  }

  componentDidMount() {
    this.props.asyncGetScheduleMeeting(this.props.counselor);
    this.props.asyncGetCounselorFromGroup(this.props.counselor.profile.CAE,
      this.props.counselor.profile.cpf);
  }

  async getMeetingLocalization() {
    await this.setState({ visitLat: this.state.schedule.lat });
    await this.setState({ visitLong: this.state.schedule.long });
    this.popupDialog.show();
  }

  async getInfo(schedule) {
    await this.setState({ schedule });
    await this.mountListOfInvitees(this.state.schedule.meetingListOfInvitees);
    await this.getMeetingLocalization();
  }

  arrayScheduleMeetingList() {
    if (this.props.listOfScheduleMeetingInAGroup.length === 0) {
      return (
        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#FF9500" />
      );
    }
    return (
      this.props.listOfScheduleMeetingInAGroup.map(schedule => (
        <View style={styles.listSchedule}>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Data: </Text>
              {schedule.date}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Horário: </Text>
              {schedule.time}
            </Text>
          </View>
          <View style={styles.buttonInvitees}>
            <TouchableOpacity
              onPress={() => this.getInfo(schedule)}
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

  async mountListOfInvitees(listOfInvitees) {
    const list = [];
    await this.setState({ invitees: [] });
    // Faz um map da list de conselheiros do CAE
    this.props.listOfCounselorsInAGroup.map((counselor) => {
      /* caso o conselheiro do CAE esteja na lista de convidados
      ele será adicionado numa lista com suas informações
      O conselheiro da cessão não será mostrado por que ele não é colocado em
      listOfCounselorsInAGroup */
      if (listOfInvitees[counselor.nuvemCode] !== undefined) {
        list.push(counselor);
        this.setState({ invitees: list });
      }

      return null;
    });
  }

  verificationDescription() {
    if (this.state.schedule.meetingDescription !== '') {
      return (
        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Descrição da reunião: </Text>
          {this.state.schedule.meetingDescription}
        </Text>
      );
    }
    return null;
  }

  renderCounselorList() {
    return (
      this.state.invitees.map(counselor => (
        <View style={styles.listRegisters} key={counselor.nuvemCode}>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Nome: </Text>
              {counselor.name}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>E-mail: </Text>
              {counselor.email}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Telefone: </Text>
              {counselor.profile.phone}
            </Text>
          </View>
        </View>
      ))
    );
  }


  render() {
    return (
      <View style={styles.principal}>
        <Header
          title={'Notificações'}
          subTitle={'Reunião'}
          backButton
        />
        <PopupDialog
        /* Popup para mostrar as informações da reunião */
          ref={(popupDialog) => {
            this.popupDialog = popupDialog;
          }}
          dialogTitle={<DialogTitle title="Informações sobre a reunião" />}
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
          <ScrollView>
            <View style={styles.listSchedule}>
              <View style={styles.textBox}>
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Data: </Text>
                  {this.state.schedule.date}
                </Text>
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Horário: </Text>
                  {this.state.schedule.time}
                </Text>
                {this.verificationDescription()}
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Número de convidados: </Text>
                  {Object.keys(this.state.schedule.meetingListOfInvitees).length}
                </Text>
                {this.showLocalizationButton()}
                <View>
                  <Text style={{ color: '#95a5a6', fontSize: 20 }}>Convidados:</Text>
                </View>
                {this.renderCounselorList()}
              </View>
            </View>
          </ScrollView>
        </PopupDialog>
        <ScrollView style={styles.content}>
          {this.arrayScheduleMeetingList()}
        </ScrollView>
      </View>
    );
  }
}

const { shape, func } = PropTypes;

VisitInvites.propTypes = {
  asyncGetCounselorFromGroup: func.isRequired,
  asyncGetScheduleMeeting: func.isRequired,
  listOfCounselorsInAGroup: func.isRequired,
  listOfScheduleMeetingInAGroup: PropTypes.arrayOf(PropTypes.shape({
    codSchool: PropTypes.number,
    date: PropTypes.string,
    time: PropTypes.string,
  })).isRequired,
  counselor: shape({
  }).isRequired,
};

export default VisitInvites;
