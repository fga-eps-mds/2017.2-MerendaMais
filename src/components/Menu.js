import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    height: window.height,
    backgroundColor: '#FF9500',
    padding: 20,
    borderLeftColor: 'black',
    borderLeftWidth: 1,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

export default function Menu() {
  return (
    <View style={styles.menu}>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Actions.searchSchool()}
        >
          <Text
            style={styles.item}
          >
            Pesquisar Escola
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
