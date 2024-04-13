import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginPage from '../pages/login/login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../pages/splashScreen/splashScreen';
import SplashScreen2 from '../pages/splashScreen/SplashScreen2';
import UserRegistrationForm from '../pages/registerForm/UserRegistrationForm';
import LoginType from '../pages/registerForm/LoginType';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="splashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}></Stack.Screen>

      <Stack.Screen
        name="SplashScreen2"
        component={SplashScreen2}
        options={{headerShown: false}}></Stack.Screen>

      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}></Stack.Screen>

      <Stack.Screen
        name="UserRegistrationForm"
        component={UserRegistrationForm}
        options={{headerShown: false}}></Stack.Screen>

      <Stack.Screen
        name="LoginType"
        component={LoginType}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
