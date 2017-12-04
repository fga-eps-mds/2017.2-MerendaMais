import React from 'react';
import * as Animatable from 'react-native-animatable';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
});

const RenderContent = (section, i, isActive) => (
  <Animatable.View duration={400} style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
    <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
  </Animatable.View>
);

export default RenderContent;
