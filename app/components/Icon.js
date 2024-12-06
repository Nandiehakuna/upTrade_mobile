import React from 'react';
import { View,StyleSheet } from 'react-native'
import {MaterialCommunityIcons}from '@expo/vector-icons'

function Icon({size=40, backgroundColor='#000', IconColor='#fff',BorderRadius=size/2, name}) {
    return (
        <View style={{
            height:size,
            width:size,
            backgroundColor:backgroundColor,
            color:IconColor,
            BorderRadius:BorderRadius,
            justifyContent:'center',
            alignItems:'center'



        }}>
            <MaterialCommunityIcons
            size={size * 0.5}
            color={IconColor}
            name={name}

            
            />



        </View>
    );
}

const styles = StyleSheet.create({
    
});
export default Icon;