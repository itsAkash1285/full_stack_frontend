import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SplashScreen2');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../images/logo.png')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F285E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    // alignItems:'center',
    // justifyContent:'centar',
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
});
