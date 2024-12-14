import React from 'react';
import { Button, StyleSheet } from 'react-native'
import LoginScreen from './app/screens/LoginScreen';
import { Text } from 'react-native';
import Screen from './app/components/Screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import {MaterialCommunityIcons} from '@icons/vector-icons'
import AuthNavigator from './app/navigation/AuthNavigation';
import AppNavigator from './app/navigation/AppNavigator';
import MessageScreen from './app/screens/MessageScreen';
import WecomeScreen from './app/screens/WecomeScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';


const Link=()=>{
  const navigation=useNavigation();


  return(
    <Button title='click' onPress={()=> navigation.navigate('tweet-details')} />

  )

}
  



const Tweet=({navigation})=>{
  <Screen>
    <Text>tweet</Text>
    <Button title='click me' onPress={()=>navigation.navigate('tweet-detail', {id:1})}/>
    <Link />
  </Screen>

}

const TweetDeatils=({route})=>{
  <Screen>
    <Text>tweet details  {route.params.id}</Text>
  </Screen>
}


const Account=()=><Screen><Text>Account Screen</Text></Screen>
const Stack =createNativeStackNavigator()

const StackNavigator=()=>{
  <Stack.Navigator
  screenOptions={
    {
      headerStyle:{backgroundColor:'dodgerBlue'},
      headerTintColor:'white'
    }
  }
  
  >
    <Stack.Screen 
    name="tweets" 
    component={Tweet}
    // options={({route})=>({title:route.params.id})}
    options={{
      headerStyle:{backgroundColor:'tomato'},
      headerTintColor:"white",
      headerShown:false

    }}
     />
    <Stack.Screen name='tweets-details' component={TweetDeatils}/>
  </Stack.Navigator>
}

const Tab = createBottomTabNavigator()


const TabNavigator=()=>{

  <Tab.Navigator
  tabBarOptions={{
    activeBackgroundColor:'tomato',
    activeTintColor:'white',
    inactiveBackgroundColor:'#e9ecef',
    inactiveTintColor:'black'
  }}
  
  >


    <Tab.Screen
    name='feed'
    component={FeedNavigator}
    options={{
      tabBarIcon:({size, color})=><MaterialCommunityIcons name='home' size={size} color={color}/>
    }}
    
    />
  
    <Tab.Screen
    name='account'
    component={AccountNavigator}
    
    />
  </Tab.Navigator>


}

function App(props) {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <AppNavigator/>
      <WecomeScreen/>
      



    </NavigationContainer>
    

      
    
  );
}

const styles = StyleSheet.create({
  
  
});

export default App;