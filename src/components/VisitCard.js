import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { logInfo } from '../../logConfig/loggers';

const FILE_NAME = 'VisitCard';

const styles = StyleSheet.create({
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
});

const ConfirmButton = (props) => {
  logInfo(FILE_NAME, 'ConfirmButton', `Received props: ${JSON.stringify(props)}`);
  return (
    <View style={styles.buttonBox}>
      <TouchableOpacity
        onPress={() => props.confirmButtonCallback()}
      >
        <Text style={styles.buttonText}>CONFIRMAR PRESENÇA</Text>
      </TouchableOpacity>
    </View>
  );
};

const CancelButton = () => (
  <View style={[styles.buttonBox, { backgroundColor: 'red' }]}>
    <TouchableOpacity>
      <Text style={styles.buttonText}>CANCELAR PRESENÇA</Text>
    </TouchableOpacity>
  </View>
);

class VisitCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visit: {},
      text: 'Agendamento',
      counselor: this.props.counselor,
    };
  }

  render() {
    console.log(`Visit Card props ${this.props}`);

    let confirmOrCancelButton = null;

    // If the counselor is confirmed, show cancel button.
    // If the counselor isn't confirmed, show confirm button.
    if (this.props.visit.content.visitListOfInvitees[this.props.counselor.nuvemCode].confirmed) {
      confirmOrCancelButton = CancelButton();
    } else {
      confirmOrCancelButton =
        (
          <ConfirmButton
            visit={this.props.visit}
            confirmButtonCallback={async () => {
              const updatedVisit = this.props.visit;
              updatedVisit.content.visitListOfInvitees[this.props.counselor.nuvemCode]
                .confirmed = true;
              await this.setState({ visit: updatedVisit });
              this.props.asyncUpdateSchedule(this.state);
            }}
          />
        );
    }

    return (
      <View style={styles.listSchedule} >
        <View style={styles.textBox}>
          <Text style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>Escola: </Text>
            {this.props.visit.content.schoolName}
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>Data: </Text>
            {this.props.visit.content.date}
          </Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>Horário: </Text>
            {this.props.visit.content.time}
          </Text>
        </View>
        <View style={{ flex: 3 }}>
          {confirmOrCancelButton}
          <View style={styles.buttonInvitees}>
            <TouchableOpacity
              onPress={() => this.props.popUpCallBack(this.props.visit)}
            >
              <Text style={styles.buttonText}> + INFORMAÇÕES</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

VisitCard.propTypes = {
  asyncUpdateSchedule: PropTypes.func.isRequired,
  visit: PropTypes.shape({
    content: {
      agentEmail: PropTypes.string.isRequired,
      codSchool: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      invitedAgent: PropTypes.bool.isRequired,
      schoolName: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      visitListOfInvitees: PropTypes.shape({}),
    },
  }).isRequired,
  counselor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    nuvemCode: PropTypes.number.isRequired,
    profile: PropTypes.shape({
      cpf: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      isPresident: PropTypes.bool.isRequired,
      segment: PropTypes.string.isRequired,
      CAE: PropTypes.string.isRequired,
      CAE_Type: PropTypes.string,
    }).isRequired,
  }).isRequired,
  popUpCallBack: PropTypes.func.isRequired,
};

ConfirmButton.propTypes = {
  confirmButtonCallback: PropTypes.func.isRequired,
};

export default VisitCard;
