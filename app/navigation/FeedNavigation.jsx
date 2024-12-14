import React from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListingScreen from '../screens/ListingScreen';
import ListingsDetailsScreen from '../screens/ListingsDetailsScreen';

const Stack =createNativeStackNavigator();

const FeedNavigator=()=>(
        <Stack.Navigator>
                <Stack.Screen
                name='Listings'
                component={ListingScreen}
                
                />

                <Stack.Screen
                name='ListingsDetails'
                component={ListingsDetailsScreen}
                
                />


        </Stack.Navigator>


)

export default FeedNavigator