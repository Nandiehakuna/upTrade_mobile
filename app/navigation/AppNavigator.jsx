import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigator from './AuthNavigation';




const Tab = createBottomTabNavigator();


const AppNavigator=()=>{
        <Tab.Navigator>
                <Tab.Screen
                name='auth'
                component={AuthNavigator}
                options={{
                        tabBarIcon:()=><MaterialCommunityIcon name=''/>
                }}

                
                
                />

                <Tab.Screen
                name='Feed'
                component={FeedNavigator}
                options={{
                        tabBarIcon:({color,size})=> <MaterialCommunityIcon name='' size={size} color={color}/>
                }}

                
                />



        </Tab.Navigator>

}

export default AppNavigator

