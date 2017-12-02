import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
});

const RenderHeader = (section, i, isActive) => (
  <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
    <Text style={styles.headerText}>{section.title}</Text>
  </Animatable.View>
);

export default RenderHeader;
