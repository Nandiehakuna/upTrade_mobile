import React from 'react';
import { Button, StyleSheet } from 'react-native'
import LoginScreen from './app/screens/LoginScreen';
import { Text } from 'react-native';
import Screen from './app/components/Screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import {MaterialCommunityIcons} from '@icons/vector-icons'
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import MessageScreen from './app/screens/MessageScreen';
import WecomeScreen from './app/screens/WecomeScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';







  
function App(props) {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <AppNavigator/>
      
      



    </NavigationContainer>
    

      
    
  );
}

const styles = StyleSheet.create({
  
  
});

export default App;