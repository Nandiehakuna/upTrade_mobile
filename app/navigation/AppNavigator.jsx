import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AuthNavigator from './AuthNavigator';

import FeedNavigator from './FeedNavigator';
import ListingsEditButton from './ListingsEditButton';

import ListingsEditScreen from '../screens/ListingsEditScreen';
import ListingsNavigator from './ListingsNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator >

<Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          headerShown:false,
          title:'Feed'
        }}
      />

     
     

<Tab.Screen
  name="ListingEdit"
  component={ListingsNavigator}
  options={{
    // tabBarButtonStyle: { flex: 1, justifyContent: 'center' }, // Button style for tab
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="home" size={size} color={color} />
    ),
    tabBarButton: () => (
      <ListingsEditButton onPress={() => navigation.navigate("ListingsEdit")} />
    ),
  }}
/>


<Tab.Screen
        name="auth"
        component={AuthNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" size={size} color={color} />
          ),
          title:'Account',
          headerShown:false
        }}
      
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
