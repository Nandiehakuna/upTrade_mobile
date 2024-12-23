import React from 'react';
import { StyleSheet } from 'react-native'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';


import AppNavigator from './app/navigation/AppNavigator';








  
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