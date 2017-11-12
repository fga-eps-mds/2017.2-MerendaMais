import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

// either import the whole module and call as Communications.method()
import Communications from 'react-native-communications';

// or can now import single methods and call straight via the method name
// import { web, phonecall } from 'react-native-communications';
// e.g. onPress={() => { web('http://www.github.com') }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(253,253,253)',
  },
  holder: {
    flex: 0.25,
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
  },
});

const SendEmail = () => ({
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Communications.email(
          // To, cc, bcc, subject, email text
          ['email1@email.com', 'emailN@email.com'],
          null,
          null,
          'Subject',
          'Email Body text')}
        >
          <View style={styles.holder}>
            <Text style={styles.text}>Send an email</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  },
});

export default SendEmail;
