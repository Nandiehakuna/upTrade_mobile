import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AuthNavigator from './AuthNavigator';

import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="auth"
        component={AuthNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          title:'home',
          headerShown:false
        }}
      
      />
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="" size={size} color={color} />
          ),
          headerShown:false
        }}
      />

      {/* <Tab.Screen
      name='ListingEdit'
      component={ListingsEditScreen}
      options={{
        tabBarIcon:({color,size})=>(
          <MaterialCommunityIcons name='' size={size} color={color}/>


        )
      }}
      
      /> */}
    </Tab.Navigator>
  );
};

export default AppNavigator;
