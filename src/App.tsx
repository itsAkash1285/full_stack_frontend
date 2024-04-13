/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';



function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}

export default App;
