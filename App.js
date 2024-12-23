import React from 'react';
import { StyleSheet } from 'react-native'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';


import AppNavigator from './app/navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';








  
function App(props) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={DefaultTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
    

      
    
  );
}

const styles = StyleSheet.create({
  
  
});

export default App;