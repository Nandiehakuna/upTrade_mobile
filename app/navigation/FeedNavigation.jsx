import React from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListingScreen from '../screens/ListingScreen';
import ListingsDetailsScreen from '../screens/ListingsDetailsScreen';

const Stack =createNativeStackNavigator();

const FeedNavigator=()=>(
        <Stack.Navigator mode='modal'>
                <Stack.Screen
                name='Listings'
                component={ListingScreen}
                
                />

                <Stack.Screen
                name='ListingsDetails'
                component={ListingsDetailsScreen}
                options={{
                        headerShown:false
                }}
                
                />


        </Stack.Navigator>


)

export default FeedNavigator