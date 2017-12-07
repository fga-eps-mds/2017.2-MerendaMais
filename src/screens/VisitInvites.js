import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import PopupDialog, { DialogTitle, DialogButton } from 'react-native-popup-dialog';
import VisitCard from '../components/VisitCard';
import LocalizationButton from '../components/LocalizationButton';
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

  dialogButtonStyle: {
    marginVertical: -10,
  },

  textBox: {
    flex: 4,
    paddingLeft: 4,
    justifyContent: 'flex-start',
    marginRight: 15,
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
    padding: 8,
    marginRight: 15,
    justifyContent: 'center',
    marginVertical: 5,
  },

  buttonInvitees: {
    borderColor: 'black',
    borderWidth: 0.8,
    borderRadius: 7,
    backgroundColor: 'white',
    padding: 8,
    justifyContent: 'center',
    marginRight: 15,
    marginVertical: 5,
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
});

const VisitInfoPopUp = props => (
  <View style={styles.listSchedule}>
    <View style={styles.textBox}>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>Escola: </Text>
        {props.visit.content.schoolName}
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>Data: </Text>
        {props.visit.content.date}
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>Horário: </Text>
        {props.visit.content.time}
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>Número de convidados: </Text>
        {Object.keys(props.visit.content.visitListOfInvitees).length}
      </Text>
      <LocalizationButton visit={props.visit} />
    </View>
  </View>
);

class VisitInvites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visit: {
        content: {
          agentEmail: '',
          codSchool: 0,
          date: '',
          invitedAgent: false,
          visitListOfInvitees: {},
          schoolName: '',
          time: '',
        },
      },
    };
  }

  /* When the screen is Mounting, asynchronously calls for
    the list of all visits for which our logged counselor was
    invited.
  */
  componentWillMount() {
    this.props.asyncGetSchedule(this.props.counselor);
  }

  componentWillReceiveProps() {
    console.log('ComponentWillReceiveProps');
  }

  render() {
    let activityIndicatorOrCard = null;

    if (this.props.application === true) {
      activityIndicatorOrCard = (
        <ActivityIndicator
          style={{ marginTop: 50, justifyContent: 'center' }}
          size="large"
          color="#FF9500"
        />
      );
    } else {
      activityIndicatorOrCard = this.props.listOfPendingInvitedScheduleList.map(visit => (
        <VisitCard
          visit={visit}
          counselor={this.props.counselor}
          popUpCallBack={(selectedVisit) => {
            this.popupDialog.show();
            this.setState({ visit: selectedVisit });
            console.log(`Visit: ${this.state.visit}`);
          }}
          key={visit.codConteudoPost}
        />
      ));
    }

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
          <VisitInfoPopUp visit={this.state.visit} />
        </PopupDialog>
        <ScrollView style={styles.content}>
          {activityIndicatorOrCard}
        </ScrollView>
        {console.log(this.props.application)}
      </View>
    );
  }
}

VisitInvites.propTypes = {
  asyncGetSchedule: PropTypes.func.isRequired,
  counselor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    nuvemCode: PropTypes.number.isRequired,
  }).isRequired,
  application: PropTypes.bool.isRequired,
  listOfPendingInvitedScheduleList: PropTypes.shape([]).isRequired,
};

VisitInfoPopUp.propTypes = {
  visit: PropTypes.shape({
    content: {
      agentEmail: PropTypes.string,
      codSchool: PropTypes.number,
      date: PropTypes.string,
      invitedAgent: PropTypes.bool,
      schoolName: PropTypes.string,
      time: PropTypes.string,
    },
    visitListOfInvitees: PropTypes.shape({}),
  }),
};

VisitInfoPopUp.defaultProps = {
  visit: {
    content: {
      agentEmail: 'email@email.com',
      codSchool: 0,
      date: '10-10-2017',
      invitedAgent: false,
      schoolName: 'Escola',
      time: '10:10',
    },
    visitListOfInvitees: {
      1: {},
    },
  },
};


export default VisitInvites;
