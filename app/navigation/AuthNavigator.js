import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WecomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WecomeScreen from '../screens/WecomeScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    >
      <Stack.Screen 
        name="welcome" 
        component={WecomeScreen} 
        
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        
      />
      <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
