import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const windowHeight = Dimensions.get('window').height;
const upperContainerHeight = windowHeight * 0.5;
const lowerContainerHeight = windowHeight * 0.5;
const SplashScreen2 = ({navigation}) => {
  useEffect(() => {
  	setTimeout(() => {
  	  navigation.navigate('Login');
  	}, 2000);
    }, []);
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.text}>Getting {'\n'} benefits{'\n'}is now easy!</Text>
      </View>
      <View style={styles.lowerContainer}>
        <Image
          style={styles.image}
          source={require('../../images/ladies.png')}
        />
      </View>
    </View>
  );
};

export default SplashScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink grey',
  },
  upperContainer: {
    height: upperContainerHeight,
	justifyContent:'center'
  },
  lowerContainer: {
    height: lowerContainerHeight,
    backgroundColor: 'pink grey',
  },
  image: {
    width: '100%',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
    fontSize: 40,
    lineHeight: 48,
    color: '#4F285E',
  },
});
