import {ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View} from 'react-native';
import React, {useState} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {RadioButton, Button} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';If
import {styles} from '../login/login.styles';

const LoginType = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('New User');
  const showToast = () => {
    ToastAndroid.show('you have been successfully registered', ToastAndroid.SHORT);
  };
  const handleNext = () => {
    navigation.navigate('Login');
    showToast()
  };
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
                  How do you want to login?
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.textInputView}>
            <View style={styles.input}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="New User"
                  status={
                    selectedOption == 'New User' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setSelectedOption('New User')}
                />
                <Text style={{fontSize: 18, marginLeft: 8}}>
                  Register me as a new user
                </Text>
              </View>
            </View>
            <View style={styles.input}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="Phone Number"
                  status={
                    selectedOption == 'Phone Number' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setSelectedOption('Phone Number')}
                />
                <Text style={{fontSize: 18, marginLeft: 8}}>
                  Use my Phone Number
                </Text>
              </View>
            </View>
            <View style={styles.input}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="Yojana Card"
                  status={
                    selectedOption == 'Yojana Card' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setSelectedOption('Yojana Card')}
                />
                <Text style={{fontSize: 18, marginLeft: 8}}>
                  Use my Yojana Card
                </Text>
              </View>
            </View>

            <Button mode="contained" onPress={handleNext} style={styles.button}>
              <Text style={{fontSize: 20}}>Next</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginType;
