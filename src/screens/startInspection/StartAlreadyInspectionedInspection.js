import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import PopupDialog, {
  DialogTitle,
  DialogButton,
} from 'react-native-popup-dialog';
import PropTypes from 'prop-types';
import stylesList from '../../Styles/ListStyles';
import PDFReport from '../../components/PDFReport';
import LoadingIndicator from '../../components/LoadingIndicator';

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

  popUp: {
    marginBottom: 120,
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

  textBox: {
    flex: 6,
    paddingLeft: 4,
    justifyContent: 'flex-start',
    marginRight: 18,
  },

  text: {
    fontSize: 15,
    paddingVertical: 2,
  },

  buttonBox: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#DEDEDE',
    padding: 8,
    justifyContent: 'center',
    marginRight: 10,
  },

  buttonText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

class StartAlreadyInspectionedInspection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  arrayScheduleList() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#FF9500" />
      );
    } else if (this.props.listOfAlreadyInpectionedSchedueInAGroup.length === 0) {
      return (
        <View style={stylesList.noneScheduleTextBox}>
          <Text style={stylesList.noneScheduleText}>Nenhum Agendamento Fiscalizado!</Text>
        </View>
      );
    }
    return (
      this.props.listOfAlreadyInpectionedSchedueInAGroup.map(visitSchedule => (
        <View style={styles.listSchedule} key={`AL${visitSchedule.codPostagem}`}>
          <View style={styles.textBox}>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Escola: </Text>
              {visitSchedule.content.schoolName}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Data: </Text>
              {visitSchedule.content.date}
            </Text>
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Horário: </Text>
              {visitSchedule.content.time}
            </Text>
            {
              visitSchedule.content.invitedAgent ? (
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Um agente foi convidado</Text>
                </Text>
              ) :
                <Text style={styles.text}>
                  <Text style={{ fontWeight: 'bold' }}>Agente não convidado</Text>
                </Text>
            }
            <Text style={styles.text}>
              <Text style={{ fontWeight: 'bold' }}>Número de participantes: </Text>
              {Object.keys(visitSchedule.content.visitListOfInvitees).length}
            </Text>
          </View>
          <View style={{ flex: 3 }}>
            <View style={styles.buttonBox}>
              <TouchableOpacity
                disabled
              >
                <Text style={styles.buttonText}>FISCALIZADO</Text>
              </TouchableOpacity>
            </View>
            <PDFReport
              reportResult={this.props.reportResult}
              asyncGetCurrentPost={this.props.asyncGetCurrentPost}
              visitSchedule={visitSchedule}
              counselor={this.props.counselor}
              isLoadingResult={this.props.isLoadingResult}
              isNotLoadingResult={this.props.isNotLoadingResult}
              onPressPopUp={() => this.popupDialog.show()}
            />
          </View>
        </View>
      ))
    );
  }

  render() {
    return (
      <View style={styles.principal}>
        <PopupDialog
          ref={(popupDialog) => {
            this.popupDialog = popupDialog;
          }}
          dialogTitle={<DialogTitle title="Carregando" />}
          dialogStyle={styles.popUp}
          overlayPointerEvents="none"
          height="25%"
          width="50%"
          actions={[
            <View style={styles.popUp}>
              {this.props.getIsLoadingResult === false ?
                <DialogButton
                  buttonStyle={styles.dialogButtonStyle}
                  text="SAIR"
                  onPress={() => this.popupDialog.dismiss()}
                  key="dialogButton1"
                />
                :
                LoadingIndicator
              }
            </View>,
          ]}
        />
        <ScrollView style={styles.content}>
          {this.arrayScheduleList()}
        </ScrollView>
      </View>
    );
  }
}

StartAlreadyInspectionedInspection.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  counselor: PropTypes.shape({
  }).isRequired,
  listOfAlreadyInpectionedSchedueInAGroup: PropTypes.arrayOf(PropTypes.shape({
    codSchool: PropTypes.number,
    date: PropTypes.string,
    time: PropTypes.string,
  })).isRequired,
  asyncGetCurrentPost: PropTypes.func.isRequired,
  reportResult: PropTypes.shape({
  }).isRequired,
  isLoadingResult: PropTypes.func.isRequired,
  isNotLoadingResult: PropTypes.func.isRequired,
  getIsLoadingResult: PropTypes.bool.isRequired,
};

export default StartAlreadyInspectionedInspection;
