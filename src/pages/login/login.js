import {ScrollView, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './login.styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button} from 'react-native-paper';
import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginPage({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log(
        {
          username: email,
          password: password,
        },
        'data',
      );
      // const response = await axios.post('https://full-stack-test-azhi.onrender.com/login', {
      //   username: email,
      //   password: password,
      // }, {headers:{
      //   'Content-Type':'application/json'
      // }});

      const getArticlesFromApi = await fetch('https://full-stack-test-azhi.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          username: email,
          password: password,
        },
      });

      console.log('Response:', getArticlesFromApi);
      // if (response) {
      //   navigation.navigate('UserRegistrationForm');
      // }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate('UserRegistrationForm');
    // }, 2000);
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
