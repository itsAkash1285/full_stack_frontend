import {
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './login.styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button} from 'react-native-paper';
import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginPage({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showToast = () => {
    ToastAndroid.show('you have logged in successfully', ToastAndroid.SHORT);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://full-stack-test-azhi.onrender.com/login',
        {
          username: email,
          password: password,
        },
      );

      console.log('Response:', response.data);

      // Check response status or do further processing based on the response
      if (response.status === 200) {
        navigation.navigate('UserRegistrationForm');
        showToast();
      } else {
        // Handle error cases
        console.error('Error:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate('UserRegistrationForm');
    // }, 2000);
    // showToast()
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={(styles.imageBack, {backgroundColor: '#4F285E'})}>
          <View
            style={
              (styles.imageBackView,
              {
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: RFValue(65),
              })
            }>
            <View>
              <View
                style={{
                  width: '30%',
                  marginHorizontal: 25,
                  marginVertical: 25,
                }}>
                {/* <Icon.Button
                  style={{width: '100%'}}
                  name="facebook"
                  backgroundColor="#fff">
                  <Text>back icon</Text>
                </Icon.Button> */}
              </View>
              <View style={{paddingHorizontal: 25}}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: RFValue(35),
                    fontWeight: 'semibold',
                  }}>
                  Login Here..
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.textInputView}>
            <TextInput
              onChangeText={text => setEmail(text)}
              value={email}
              style={styles.input}
              placeholderTextColor={'#50464B'}
              placeholder="Email"
            />

            <TextInput
              onChangeText={text => setPassword(text)}
              value={password}
              style={styles.input}
              placeholderTextColor={'#50464B'}
              placeholder="Password"
            />
            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.button}>
              <Text style={{fontSize: 20}}>Next</Text>
            </Button>

            <TouchableOpacity style={styles.signupBtn}>
              <Text
                style={styles.signupText}
                onPress={() => navigation.navigate('UserRegistrationForm')}>
                Sign UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
