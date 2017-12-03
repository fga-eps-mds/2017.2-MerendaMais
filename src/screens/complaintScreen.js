import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import * as constant from '../constants/publicAgencyInformations';

const styles = StyleSheet.create({
  complaintScreen: {
    flex: 1,
  },

  textBox: {
    marginTop: 20,
    paddingLeft: 2,
    justifyContent: 'flex-start',
  },

  field: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'gray',
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 15,
    justifyContent: 'flex-start',
    paddingLeft: 2,
    paddingRight: 4,
  },

  information: {
    fontSize: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

const complaintScreen = () => ({
  render() {
    return (
      <View style={styles.complaintScreen}>
        <Header
          title={'Denunciar'}
          backButton
        />
        <ScrollView>
          <View style={styles.textBox}>
            <Text style={[styles.title, { fontSize: 20 }]}>{constant.COMPLAINT_TITLE}</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.title}>{constant.FNDE}</Text>
            <Text style={styles.information}>
              <Text style={{ fontWeight: 'bold' }}>{constant.ADDRESS}</Text>
              {constant.FNDE_ADDRESS}
            </Text>
            <Text style={styles.information}>
              <Text style={{ fontWeight: 'bold' }}>{constant.PHONE}</Text>
              {constant.FNDE_PHONE}
            </Text>
            <Text style={styles.information}>
              <Text style={{ fontWeight: 'bold' }}>{constant.WEB_SITE}</Text>
              {constant.FNDE_WEB_SITE}
            </Text>
            <Text style={styles.information}>
              <Text style={{ fontWeight: 'bold' }}>{constant.EMAIL}</Text>
              {constant.FNDE_EMAIL}
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.title}>{constant.CGU}</Text>
            <Text style={styles.information}>
              <Text style={{ fontWeight: 'bold' }}>{constant.ADDRESS}</Text>
              {constant.CGU_ADDRESS}
            </Text>
            <Text style={styles.information}>
              <Text style={{ fontWeight: 'bold' }}>{constant.WEB_SITE}</Text>
              {constant.CGU_WEB_SITE}
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.title}>{constant.MPF}</Text>
            <Text style={styles.information}>
              <Text style={{ fontWeight: 'bold' }}>{constant.ADDRESS}</Text>
              {constant.MPF_ADDRESS}
            </Text>
            <Text style={styles.information}>
              <Text style={{ fontWeight: 'bold' }}>{constant.PHONE}</Text>
              {constant.MPF_PHONE}
            </Text>
            <Text style={styles.information}>
              <Text style={{ fontWeight: 'bold' }}>{constant.EMAIL}</Text>
              {constant.MPF_EMAIL}
            </Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.title}>{constant.TCU}</Text>
            <Text style={styles.information}>
              <Text style={{ fontWeight: 'bold' }}>{constant.ADDRESS}</Text>
              {constant.TCU_ADDRESS}
            </Text>
            <Text style={styles.information}>
              <Text style={{ fontWeight: 'bold' }}>{constant.PHONE}</Text>
              {constant.TCU_PHONE}
            </Text>
            <Text style={styles.information}>
              <Text style={{ fontWeight: 'bold' }}>{constant.EMAIL}</Text>
              {constant.TCU_EMAIL}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  },
});

export default complaintScreen;
