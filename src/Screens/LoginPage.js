import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const windowHeight = Dimensions.get('window').height;

export default function LoginPage1() {
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <Text>login here...</Text>
      </View>
      <View style={styles.downView}>
        <Text>login here...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    filex: 1,
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperView: {
    flex: 0.5,
    backgroundColor: 'black',
    height: windowHeight * 0.5,
  },
  downView: {
    flex: 0.5,
    backgroundColor: 'yellow',
    height: windowHeight * 0.5,
  },
});
