import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListingsEditScreen from '../screens/ListingsEditScreen';

function ListingsNavigator(props) {
        const Stack = createNativeStackNavigator();
        return (
                <Stack.Navigator>
                        <Stack.Screen
                        name='ListingsEdit'
                        component={ListingsEditScreen}


                        
                        />

                        



                </Stack.Navigator>
                
        );
}

export default ListingsNavigator;