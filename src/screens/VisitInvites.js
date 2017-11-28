import React from 'react';
import axios from 'axios';
// import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Header from '../components/Header';
import { logInfo, logWarn } from '../../logConfig/loggers';
import { FULL_INFO_POSTS_LINK_NUVEM_CIVICA,
  POSTING_TYPE_CODE,
  APP_IDENTIFIER,
} from '../constants';

const FILE_NAME = 'VisitInvites.js';

/* const styles = StyleSheet.create({
  }
});
*/

export default class VisitInvites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inviteList: [],
    };
  }

  componentWillMount() {
    axios.get(FULL_INFO_POSTS_LINK_NUVEM_CIVICA, {
      params: { codAlicativo: APP_IDENTIFIER, codTiposPostagem: POSTING_TYPE_CODE },
      headers: { appToken: this.props.counselor.token },
    })
      .then((response) => {
        logInfo(FILE_NAME, 'inviteList', `Visit List: ${JSON.stringify(response.data, null, 2)}`);
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        logWarn(FILE_NAME, 'inviteList', error);
      });
  }

  render() {
    return (
      <Header
        title={'Notificações'}
        subTitle={'Visita'}
        backButton
      />

    );
  }
}
