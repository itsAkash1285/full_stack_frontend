import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {RadioButton, Button} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

const UserRegistrationForm = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('English');
  const handleSelect = option => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    navigation.navigate('LoginType');
  };

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginType');
    }, 2000);
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
                  Which language do you prefer?
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.textInputView}>
            {/* <TextInput
              style={styles.input}
              placeholderTextColor={'#50464B'}
              placeholder="Email"
            />
            <TextInput style={styles.input} placeholder="Passwordddd" /> */}

            <View style={styles.input}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="English"
                  status={
                    selectedOption == +'English' ? 'checked' : 'unchecked'
                  }
                  onPress={() => setSelectedOption('English')}
                />
                <Text style={{fontSize: 18, marginLeft: 8}}>English</Text>
              </View>
            </View>
            <View style={styles.input}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="Hindi"
                  status={selectedOption == 'Hindi' ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedOption('Hindi')}
                />
                <Text style={{fontSize: 18, marginLeft: 8}}>हिंदी</Text>
              </View>
            </View>
            <View style={styles.input}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="Kannada"
                  status={selectedOption == 'Kannada' ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedOption('Kannada')}
                />
                <Text style={{fontSize: 18, marginLeft: 8}}>ಕನ್ನಡ</Text>
              </View>
            </View>
            <Text style={{padding: 10}}>
              This allows you to experience the app in a language of your
              preference.
            </Text>

            <Button mode="contained" onPress={handleNext} style={styles.button}>
              <Text style={{fontSize: 20}}>Next</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserRegistrationForm;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: '#fff',
  },
  icons: {
    height: RFValue(15),
    width: RFValue(15),
    marginTop: RFValue(3),
  },
  button: {
    backgroundColor: '#4F285E',
    padding: RFValue(10),
    width: '100%',
    marginTop: RFValue(20),
    borderRadius: RFValue(50),
    color: '#fff',
    bottom: 0,
  },
  imageBack: {
    height: RFPercentage(200),
    backgroundColor: '#4F285E',
  },
  imageBackView: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(50),
  },
  bottomView: {
    flex: 2,
    backgroundColor: '#ffffff',
    bottom: RFValue(50),
    borderTopStartRadius: RFValue(40),
    borderTopEndRadius: RFValue(40),
  },
  inputStyles: {
    height: RFValue(50),
    width: '100%',
    borderWidth: 0,
    fontWeight: 'regular',
  },
  forgotpass: {
    alignSelf: 'flex-end',
    color: '#023e98',
    marginTop: 10,
    fontWeight: 'regular',
    fontSize: RFValue(14),
  },
  buttonText: {
    fontSize: RFValue(18),
    color: '#fff',
    fontWeight: 'regular',
    fontSize: RFValue(14),
  },
  signUpText: {
    color: '#023e98',
    fontSize: RFValue(14),
  },
  textInputView: {
    marginHorizontal: RFValue(35),
    paddingVertical: RFValue(15),
  },
  signUpView: {
    flexDirection: 'row',
    marginTop: RFValue(15),
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    marginVertical: RFValue(10),
    borderWidth: 1,
    borderColor: '#D1CFCD',
    padding: 15,
    fontSize: RFValue(18),
    color: '#50464B',
    minHeight: 65,
    borderRadius: RFValue(24),
    backgroundColor: '#E5E2DE',
  },
});
